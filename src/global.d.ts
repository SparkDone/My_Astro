import type { AstroIntegration } from "@swup/astro";

declare global {
	interface Window {
		// type from '@swup/astro' is incorrect
		swup: AstroIntegration;
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
