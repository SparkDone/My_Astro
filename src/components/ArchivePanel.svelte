<script lang="ts">
import { onMount } from "svelte";

import I18nKey from "../i18n/i18nKey";
import { i18n } from "../i18n/translation";
import { getPostUrlBySlug } from "../utils/url-utils";

export let tags: string[];
export let categories: string[];
export let sortedPosts: Post[] = [];

const params = new URLSearchParams(window.location.search);
tags = params.has("tag") ? params.getAll("tag") : [];
categories = params.has("category") ? params.getAll("category") : [];
const uncategorized = params.get("uncategorized");

interface Post {
	slug: string;
	data: {
		title: string;
		tags: string[];
		category?: string;
		published: Date;
	};
}

interface MonthGroup {
	month: number; // 1-12
	posts: Post[];
}

interface YearGroup {
	year: number;
	months: MonthGroup[];
}

let groups: YearGroup[] = [];

function formatDate(date: Date) {
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${month}-${day}`;
}

function formatTag(tagList: string[]) {
	return tagList.map((t) => `#${t}`).join(" ");
}

onMount(async () => {
	let filteredPosts: Post[] = sortedPosts;

	if (tags.length > 0) {
		filteredPosts = filteredPosts.filter(
			(post) =>
				Array.isArray(post.data.tags) &&
				post.data.tags.some((tag) => tags.includes(tag)),
		);
	}

	if (categories.length > 0) {
		filteredPosts = filteredPosts.filter(
			(post) => post.data.category && categories.includes(post.data.category),
		);
	}

	if (uncategorized) {
		filteredPosts = filteredPosts.filter((post) => !post.data.category);
	}

	// 先按年分组
	const yearMap = filteredPosts.reduce(
		(acc, post) => {
			const year = post.data.published.getFullYear();
			if (!acc[year]) acc[year] = [];
			acc[year].push(post);
			return acc;
		},
		{} as Record<number, Post[]>,
	);

	// 转换为 年 -> 月 的结构，并排序（年降序、月降序、文内按日期降序）
	groups = Object.keys(yearMap)
		.map((yearStr) => {
			const year = Number.parseInt(yearStr);
			const postsOfYear = yearMap[year];

			// 月分组
			const monthMap = postsOfYear.reduce((acc, post) => {
				const month = post.data.published.getMonth() + 1; // 1-12
				if (!acc[month]) acc[month] = [] as Post[];
				acc[month].push(post);
				return acc;
			}, {} as Record<number, Post[]>);

			const months: MonthGroup[] = Object.keys(monthMap)
				.map((m) => {
					const month = Number.parseInt(m);
					const posts = monthMap[month].slice().sort((a, b) => b.data.published.getTime() - a.data.published.getTime());
					return { month, posts } as MonthGroup;
				})
				.sort((a, b) => b.month - a.month);

			return { year, months } as YearGroup;
		})
		.sort((a, b) => b.year - a.year);
});
</script>

<div class="card-base px-8 py-6">
	{#each groups as group}
		<div>
			<!-- 年度行（年份靠左，计数靠右，与下方对齐） -->
			<div class="flex items-center justify-between h-[3.75rem]">
				<div class="transition text-2xl font-bold text-90">
					{group.year}
				</div>
				<div class="text-xs text-black/40 dark:text-white/40">
					{group.months.reduce((sum, m) => sum + m.posts.length, 0)} {i18n(I18nKey.postsCount)}
				</div>
			</div>
 
			<!-- 月度分组：标题 + 细分隔线 + 简洁的三列行 -->
			{#each group.months as monthGroup}
				<div class="mt-2 mb-3">
					<div class="flex items-center justify-between mt-2 mb-1">
						<div class="text-sm font-bold text-black/60 dark:text-white/60">
							{String(monthGroup.month).padStart(2, '0')} 月
						</div>
						<div class="text-xs text-black/40 dark:text-white/40">
							{monthGroup.posts.length} {i18n(monthGroup.posts.length === 1 ? I18nKey.postCount : I18nKey.postsCount)}
						</div>
					</div>
					<div class="border-top-line mb-2"></div>

					<div class="space-y-1">
						{#each monthGroup.posts as post}
							<a
									href={getPostUrlBySlug(post.slug)}
									aria-label={post.data.title}
									class="group grid grid-cols-[5rem_1fr_auto] items-center gap-3 px-2 py-2 rounded-md hover:bg-[var(--btn-plain-bg-hover)] transition-colors"
							>
								<!-- date -->
								<div class="text-sm text-right text-75">
									{formatDate(post.data.published)}
								</div>

								<!-- post title -->
								<div class="min-w-0 text-left">
									<div class="truncate leading-tight group-hover:text-[var(--primary)] transition-colors">
										{post.data.title}
									</div>
								</div>

								<!-- tag list -->
								<div class="hidden md:block text-right text-sm text-75">
									<div class="truncate">{formatTag(post.data.tags)}</div>
								</div>
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>
 
 <style>
   .border-top-line {
     border-top: 1px solid rgba(0,0,0,0.08);
   }
   :global(.dark) .border-top-line {
     border-top-color: rgba(255,255,255,0.12);
   }
 </style>
