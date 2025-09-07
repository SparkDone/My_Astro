export {};

declare global {
	// 允许直接导入 .svelte（无类型声明时）
	declare module "*.svelte" {
		const component: unknown;
		export default component;
	}
	interface Window {
		// type from '@swup/astro' is incorrect
		swup: unknown;
		pagefind: {
			search: (query: string) => Promise<{
				results: Array<{
					data: () => Promise<SearchResult>;
				}>;
			}>;
		};
		// Layout and theme management
		customScrollbarInitialized?: boolean;
		layoutInitialized?: boolean;
		swupInitializing?: boolean;
		universalLayoutSwitcherInstance?: unknown;
		initUniversalLayoutSwitcher?: (options?: {
			defaultLayout?: string;
			targetSelector?: string;
		}) => void;
		forceReinitLayoutSwitcher?: () => void;
		reinitThemeSwitch?: () => void;
		// MainGridLayout.astro 中使用的自定义属性
		isAutoCollapsed?: boolean;
		wasInSmartMode?: boolean;
		lastLoggedWidth?: number;
	}
}

// 为特定无类型 JS 模块提供最小声明
declare module "@/scripts/article-sorter.js" {
	export function sortArticlesWithFeatured(articles: unknown[]): unknown[];
}

declare module "*.js" {
	const mod: unknown;
	export default mod;
}

declare module "@/scripts/layout-switcher.js" {
	const mod: unknown;
	export default mod;
}

declare module "../scripts/layout-switcher.js" {
	const mod: unknown;
	export default mod;
}

declare module "../scripts/article-sorter.js" {
	export function sortArticlesWithFeatured(articles: unknown[]): unknown[];
}

interface SearchResult {
	url: string;
	meta: {
		title: string;
	};
	excerpt: string;
	content?: string;
	word_count?: number;
	filters?: Record<string, unknown>;
	anchors?: Array<{
		element: string;
		id: string;
		text: string;
		location: number;
	}>;
	weighted_locations?: Array<{
		weight: number;
		balanced_score: number;
		location: number;
	}>;
	locations?: number[];
	raw_content?: string;
	raw_url?: string;
	sub_results?: SearchResult[];
}
