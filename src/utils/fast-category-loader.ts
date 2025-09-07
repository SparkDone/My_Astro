/**
 * 快速分类加载器 - 专门优化分类页面的加载速度
 */

import { contentManager } from "../lib/content-manager";
import type { PostEntry } from "../types/post";

// 全局缓存
const globalCategoryCache = new Map<
	string,
	{
		posts: Array<{
			id: string;
			slug: string;
			data: {
				title: string;
				description?: string;
				published: Date;
				cover?: string;
				tags?: string[];
				category?: string;
			};
		}>;
		totalPosts: number;
		hasMore: boolean;
		nextPage?: number;
	}
>();
const globalCacheTimestamps = new Map<string, number>();
const CACHE_DURATION = import.meta.env.DEV ? 1 * 1000 : 10 * 60 * 1000; // 开发环境1秒，生产环境10分钟缓存

/**
 * 快速获取分类文章（优化版）
 */
export async function getFastCategoryPosts(
	categorySlugOrName: string,
): Promise<PostEntry[]> {
	const cacheKey = `posts_${categorySlugOrName}`;
	const now = Date.now();
	const cacheTime = globalCacheTimestamps.get(cacheKey);

	// 检查缓存
	if (
		globalCategoryCache.has(cacheKey) &&
		cacheTime &&
		now - cacheTime < CACHE_DURATION
	) {
		if (import.meta.env.DEV) {
			console.log(`⚡ 快速缓存命中: ${categorySlugOrName}`);
		}
		const cached = globalCategoryCache.get(cacheKey) as
			| { posts: PostEntry[] }
			| undefined;
		return cached?.posts || [];
	}

	try {
		const startTime = Date.now();

		// 获取所有文章（这个通常已经被contentManager缓存了）
		const allPosts = await contentManager.getSortedPosts();

		// 快速过滤分类文章 - 改进匹配逻辑
		const categoryPosts = allPosts.filter((post) => {
			const postCategory = post.data.category;
			if (!postCategory) return false;

			// 调试信息
			if (import.meta.env.DEV && allPosts.indexOf(post) < 3) {
				console.log(
					`🔍 文章分类匹配调试: "${postCategory}" vs "${categorySlugOrName}"`,
				);
			}

			// 多种匹配策略
			const normalizedPostCategory = postCategory.toLowerCase().trim();
			const normalizedSearchCategory = categorySlugOrName.toLowerCase().trim();

			return (
				normalizedPostCategory === normalizedSearchCategory ||
				postCategory === categorySlugOrName ||
				// 处理URL编码的情况
				decodeURIComponent(normalizedPostCategory) ===
					normalizedSearchCategory ||
				decodeURIComponent(normalizedSearchCategory) === normalizedPostCategory
			);
		});

		const loadTime = Date.now() - startTime;

		// 缓存结果
		globalCategoryCache.set(cacheKey, {
			posts: categoryPosts,
			totalPosts: categoryPosts.length,
			hasMore: false,
			nextPage: undefined,
		});
		globalCacheTimestamps.set(cacheKey, now);

		if (import.meta.env.DEV) {
			console.log(
				`⚡ 快速获取分类文章: ${categorySlugOrName} (${categoryPosts.length}篇, ${loadTime}ms)`,
			);

			// 如果没有找到文章，显示所有可用分类
			if (categoryPosts.length === 0) {
				const availableCategories = [
					...new Set(
						allPosts.map((post) => post.data.category).filter(Boolean),
					),
				];
				console.log("📋 可用分类列表:", availableCategories);
				console.log(`🔍 搜索的分类: "${categorySlugOrName}"`);
			}
		}

		return categoryPosts;
	} catch (error) {
		console.error(`❌ 快速获取分类文章失败: ${categorySlugOrName}`, error);
		return [];
	}
}

/**
 * 快速获取分类页面数据（简化版）
 */
export async function getFastCategoryPageData(categorySlugOrName: string) {
	const cacheKey = `pagedata_${categorySlugOrName}`;
	const now = Date.now();
	const cacheTime = globalCacheTimestamps.get(cacheKey);

	// 检查缓存
	if (
		globalCategoryCache.has(cacheKey) &&
		cacheTime &&
		now - cacheTime < CACHE_DURATION
	) {
		if (import.meta.env.DEV) {
			console.log(`⚡ 快速页面数据缓存命中: ${categorySlugOrName}`);
		}
		return globalCategoryCache.get(cacheKey);
	}

	try {
		const startTime = Date.now();

		// 并行获取数据
		const [categoryPosts] = await Promise.all([
			getFastCategoryPosts(categorySlugOrName),
		]);

		// 简化的分类数据
		const categoryData = {
			id: 0,
			name: categorySlugOrName,
			slug: categorySlugOrName.toLowerCase(),
			description: `${categorySlugOrName} category`,
			color: "#6366f1",
			layout_type: "grid", // 默认布局
			sortOrder: 0,
		};

		const result = {
			posts: (categoryPosts || []) as typeof categoryPosts,
			categoryData,
			layoutType: "grid",
			totalPosts: (categoryPosts || []).length,
			categoryName: categorySlugOrName,
			categorySlug: categorySlugOrName,
		};

		const loadTime = Date.now() - startTime;

		// 缓存结果
		globalCategoryCache.set(cacheKey, {
			posts: result.posts as PostEntry[],
			totalPosts: result.totalPosts,
			hasMore: false,
			nextPage: undefined,
		});
		globalCacheTimestamps.set(cacheKey, now);

		if (import.meta.env.DEV) {
			console.log(`⚡ 快速页面数据生成: ${categorySlugOrName} (${loadTime}ms)`);
		}

		return result;
	} catch (error) {
		console.error(`❌ 快速获取分类页面数据失败: ${categorySlugOrName}`, error);
		throw error;
	}
}
