import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { siteConfig } from "@/config";
import { getIndexSettings } from "@/lib/strapi";
import { getSortedPosts } from "@/utils/hybrid-content-utils";

// 启用预渲染，确保RSS文件在构建时生成
export const prerender = true;

export async function GET(context: APIContext) {
	try {
		const blog = await getSortedPosts();

		// 获取 Strapi 中的站点设置
		let rssTitle = siteConfig.title;
		let rssDesc = siteConfig.subtitle || "No description";

		try {
			const indexSettings = await getIndexSettings();
			if (indexSettings?.data?.site_title) {
				rssTitle = indexSettings.data.site_title;
			}
			if (indexSettings?.data?.site_description) {
				rssDesc = indexSettings.data.site_description;
			} else if (indexSettings?.data?.site_subtitle) {
				rssDesc = indexSettings.data.site_subtitle;
			}
		} catch (error) {
			console.warn("Failed to fetch index settings:", error);
		}

		// 生成RSS项目
		const items = blog.map((post) => ({
			title: post.data.title,
			description: post.data.description || post.data.title,
			pubDate: post.data.published,
			link: `/posts/${post.slug}/`,
		}));

		return rss({
			title: rssTitle,
			description: rssDesc,
			site: context.site!,
			items: items,
		});
	} catch (error) {
		console.error("RSS generation error:", error);
		return new Response("RSS generation failed", { status: 500 });
	}
}
