/**
 * 统一数据获取器
 * 解决API调用重复问题，提供批量数据获取功能
 */

import type { PostEntry } from "@/types/post";
import { logger } from "../config/api";
import { contentManager } from "../lib/content-manager";
import {
	getCategoryByName,
	getCategoryBySlug,
	getIndexSettings,
} from "../lib/strapi";

// 缓存接口
interface DataCache {
	posts?: PostEntry[];
	indexSettings?: unknown;
	categories?: Map<string, unknown>;
}

// 请求级别的缓存（每次页面请求重置）
let requestCache: DataCache = {};

// 重置缓存（每次新请求时调用）
export function resetRequestCache() {
	requestCache = {};
}

/**
 * 统一获取首页所需的所有数据
 */
export type IndexSettings = {
	default_homepage_layout?: string;
	[key: string]: unknown;
};

export async function getIndexPageData() {
	// 调试信息（仅在详细调试模式下显示）
	if (import.meta.env.DEV && import.meta.env.DEBUG === "true") {
		logger.info("🏠 获取首页统一数据");
	}

	const [posts, indexSettings] = await Promise.all([
		getCachedPosts(),
		getCachedIndexSettings(),
	]);

	// 确保 posts 不为 undefined
	const safePosts = posts || [];

	// const banner = extractBannerFromIndexSettings(indexSettings);

	return {
		posts: safePosts,
		indexSettings,

		// 计算衍生数据
		totalPosts: safePosts.length,
		categories: extractCategoriesFromPosts(safePosts),
		tags: extractTagsFromPosts(safePosts),
	};
}

/**
 * 统一获取分类页面所需的所有数据
 */
export async function getCategoryPageData(categorySlugOrName: string) {
	logger.info(`🏷️ 获取分类页面统一数据: ${categorySlugOrName}`);

	// 使用 hybrid-content-utils 中更好的分类匹配逻辑
	const { getPostsByCategory } = await import("./hybrid-content-utils");
	const [categoryPosts, categoryData] = await Promise.all([
		getPostsByCategory(categorySlugOrName),
		getCachedCategoryData(categorySlugOrName),
	]);

	// 确保 categoryPosts 不为 undefined
	const safeCategoryPosts = (categoryPosts || []) as PostEntry[];
	const categoryObj = (categoryData ?? {}) as {
		layout_type?: string;
		name?: string;
		slug?: string;
	};
	const layoutType =
		(categoryObj.layout_type as "grid" | "masonry" | undefined) || "grid";

	return {
		posts: safeCategoryPosts,
		categoryData: categoryObj,
		layoutType,
		totalPosts: safeCategoryPosts.length,
		categoryName: categoryObj.name || categorySlugOrName,
		categorySlug: categoryObj.slug || categorySlugOrName,
	};
}

/**
 * 统一获取文章页面所需的所有数据
 */
export async function getPostPageData(slug: string) {
	logger.info(`📄 获取文章页面统一数据: ${slug}`);

	const posts = await getCachedPosts();
	// 确保 posts 不为 undefined
	const safePosts = posts || [];
	const post = safePosts.find((p) => p.slug === slug);

	if (!post) {
		return null;
	}

	// 获取相关文章（同分类）
	const relatedPosts = safePosts
		.filter((p) => p.slug !== slug && p.data.category === post.data.category)
		.slice(0, 3);

	return {
		post,
		relatedPosts,
		allPosts: safePosts,
		navigation: {
			prev: findPreviousPost(safePosts, slug),
			next: findNextPost(safePosts, slug),
		},
	};
}

// ============ 缓存辅助函数 ============

async function getCachedPosts(): Promise<PostEntry[]> {
	if (!requestCache.posts) {
		// 调试信息（仅在详细调试模式下显示）
		if (import.meta.env.DEV && import.meta.env.DEBUG === "true") {
			logger.info("📚 缓存未命中，获取文章数据");
		}
		const posts = await contentManager.getSortedPosts();
		// 确保 posts 不为 undefined
		requestCache.posts = posts || [];
	}
	return requestCache.posts || [];
}

async function getCachedIndexSettings() {
	if (!requestCache.indexSettings) {
		// 调试信息（仅在详细调试模式下显示）
		if (import.meta.env.DEV && import.meta.env.DEBUG === "true") {
			logger.info("🏠 缓存未命中，获取首页设置");
		}
		try {
			const response = await getIndexSettings();
			requestCache.indexSettings = response.data as unknown;
		} catch (error) {
			logger.error("获取首页设置失败，使用默认配置:", error);
			// 当Strapi不可用时，使用默认配置
			requestCache.indexSettings = {
				default_homepage_layout: "masonry",
				site_title: "我的博客",
				site_subtitle: "分享技术与生活",
				site_description: "一个基于Astro和Strapi构建的现代化博客",
			};
		}
	}
	return requestCache.indexSettings;
}

async function getCachedCategoryData(categorySlugOrName: string) {
	if (!requestCache.categories) {
		requestCache.categories = new Map();
	}

	if (!requestCache.categories.has(categorySlugOrName)) {
		logger.info(`🏷️ 缓存未命中，获取分类数据: ${categorySlugOrName}`);
		try {
			// 先尝试从Strapi获取分类数据
			let response = await getCategoryBySlug(categorySlugOrName);

			// 如果按slug找不到，尝试按名称查找
			if (!response.data || response.data.length === 0) {
				response = await getCategoryByName(categorySlugOrName);
			}

			const categoryData =
				response.data && response.data.length > 0 ? response.data[0] : null;

			// 如果Strapi中没有找到，创建本地模式的默认分类数据
			if (!categoryData) {
				logger.info(
					`📝 Strapi中未找到分类，创建本地模式默认配置: ${categorySlugOrName}`,
				);
				const localCategoryData = createLocalCategoryData(categorySlugOrName);
				requestCache.categories.set(categorySlugOrName, localCategoryData);
			} else {
				requestCache.categories.set(
					categorySlugOrName,
					categoryData as unknown,
				);
			}
		} catch (error) {
			logger.warn(
				`⚠️ Strapi获取分类数据失败，使用本地模式: ${categorySlugOrName}`,
				error,
			);
			// Strapi调用失败时，创建本地模式的默认分类数据
			const localCategoryData = createLocalCategoryData(categorySlugOrName);
			requestCache.categories.set(categorySlugOrName, localCategoryData);
		}
	}

	return requestCache.categories.get(categorySlugOrName);
}

// 为本地模式创建默认分类数据
function createLocalCategoryData(categorySlugOrName: string) {
	// 本地模式的分类布局配置
	const localCategoryConfigs: Record<
		string,
		{ layout_type: "grid" | "masonry" }
	> = {
		Guides: { layout_type: "grid" },
		guides: { layout_type: "grid" },
		Tutorials: { layout_type: "masonry" },
		tutorials: { layout_type: "masonry" },
		Projects: { layout_type: "grid" },
		projects: { layout_type: "grid" },
		Blog: { layout_type: "grid" },
		blog: { layout_type: "grid" },
		News: { layout_type: "grid" },
		news: { layout_type: "grid" },
		Reviews: { layout_type: "grid" },
		reviews: { layout_type: "grid" },
		Tips: { layout_type: "masonry" },
		tips: { layout_type: "masonry" },
	};

	const config = localCategoryConfigs[categorySlugOrName] || {
		layout_type: "masonry",
	}; // 默认使用列表布局进行测试

	return {
		id: 0,
		name: categorySlugOrName,
		slug: categorySlugOrName.toLowerCase(),
		description: `${categorySlugOrName} category`,
		color: "#6366f1",
		layout_type: config.layout_type,
		sortOrder: 0,
	};
}

// ============ 数据提取辅助函数 ============

// function extractBannerFromIndexSettings(indexSettings: any): BannerData | null { ... }
// function extractBannerFromCategoryData(categoryData: any): BannerData | null { ... }

function extractCategoriesFromPosts(posts: PostEntry[]) {
	if (!posts || !Array.isArray(posts)) {
		return [];
	}

	const categoryMap = new Map<string, number>();
	posts.forEach((post) => {
		const category = post.data.category;
		if (category) {
			categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
		}
	});
	return Array.from(categoryMap.entries()).map(([name, count]) => ({
		name,
		count,
	}));
}

function extractTagsFromPosts(posts: PostEntry[]) {
	if (!posts || !Array.isArray(posts)) {
		return [];
	}

	const tagMap = new Map<string, number>();
	posts.forEach((post) => {
		post.data.tags?.forEach((tag: string) => {
			tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
		});
	});
	return Array.from(tagMap.entries()).map(([name, count]) => ({ name, count }));
}

function findPreviousPost(posts: PostEntry[], currentSlug: string) {
	if (!posts || !Array.isArray(posts)) {
		return null;
	}
	const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
	return currentIndex > 0 ? posts[currentIndex - 1] : null;
}

function findNextPost(posts: PostEntry[], currentSlug: string) {
	if (!posts || !Array.isArray(posts)) {
		return null;
	}
	const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
	return currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
}
