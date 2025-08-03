import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { siteConfig } from "@/config";
import { getIndexSettings } from "@/lib/strapi";
import { getSortedPosts } from "@/utils/hybrid-content-utils";

const parser = new MarkdownIt();

function stripInvalidXmlChars(str: string): string {
	return str.replace(
		// biome-ignore lint/suspicious/noControlCharactersInRegex: https://www.w3.org/TR/xml/#charsets
		/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g,
		"",
	);
}

export async function GET(context: APIContext) {
	try {
		const blog = await getSortedPosts();

		// 获取 Strapi 中的站点设置
		let rssTitle = siteConfig.title;
		let rssDesc = siteConfig.description;

		try {
			const indexSettings = await getIndexSettings();
			if (indexSettings?.data?.site_title) {
				rssTitle = indexSettings.data.site_title;
			}
			if (indexSettings?.data?.site_description) {
				rssDesc = indexSettings.data.site_description;
			}
		} catch (error) {
			console.warn("Failed to fetch index settings:", error);
		}

		return rss({
			title: rssTitle,
			description: rssDesc,
			site: context.site!,
			items: blog.map((post) => {
				const content = post.body ? parser.render(post.body) : "";
				const cleanContent = sanitizeHtml(content, {
					allowedTags: sanitizeHtml.defaults.allowedTags.concat([
						"img",
						"video",
						"audio",
						"source",
						"track",
						"figure",
						"figcaption",
						"picture",
					]),
					allowedAttributes: {
						...sanitizeHtml.defaults.allowedAttributes,
						img: ["src", "alt", "title", "width", "height"],
						video: ["src", "controls", "width", "height"],
						audio: ["src", "controls"],
						source: ["src", "type"],
						track: ["src", "kind", "srclang", "label"],
						figure: ["class"],
						figcaption: ["class"],
						picture: ["class"],
					},
				});

				return {
					title: stripInvalidXmlChars(post.title),
					pubDate: post.publishedAt ? new Date(post.publishedAt) : new Date(),
					description: stripInvalidXmlChars(post.excerpt || ""),
					link: post.slug ? `/${post.slug}/` : "/",
					content: stripInvalidXmlChars(cleanContent),
					author: post.author?.name || siteConfig.author,
					categories: post.categories?.map((cat) => cat.name) || [],
					...(post.cover && {
						enclosure: {
							url: new URL(post.cover.url, context.site!).href,
							type: post.cover.mime || "image/jpeg",
						},
					}),
				};
			}),
		});
	} catch (error) {
		console.error("RSS generation error:", error);
		return new Response("RSS generation failed", { status: 500 });
	}
}
