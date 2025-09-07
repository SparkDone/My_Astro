<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { url } from "@utils/url-utils.ts";
import { onMount } from "svelte";
import type { SearchResult } from "@/global";

// 统一状态管理
let keyword = ""; // 统一的搜索关键词
let result: SearchResult[] = [];
let isSearching = false;
let pagefindLoaded = false;
let initialized = false;
let searchTimeout: number;
let showAllResults = false;
let maxDisplayResults = 3;
let panelVisible = false;
let lastSearchKeyword = '';

// 缓存DOM元素，避免重复查询
let searchPanel: HTMLElement | null = null;

const fakeResult: SearchResult[] = [
	{
		url: url("/"),
		meta: {
			title: "第一个搜索结果 - 测试中文",
		},
		excerpt:
			"这是一个包含 <mark>搜索关键词</mark> 的中文测试结果。",
	},
	{
		url: url("/"),
		meta: {
			title: "Second Search Result - English Test",
		},
		excerpt: "This is an English test result with <mark>search keywords</mark>.",
	},
	{
		url: url("/"),
		meta: {
			title: "第三个结果 - 混合语言测试",
		},
		excerpt: "Mixed language content with <mark>关键词</mark> and keywords.",
	},
	{
		url: url("/"),
		meta: {
			title: "Fourth Result - More Content",
		},
		excerpt: "Additional test content to demonstrate the <mark>more button</mark> functionality.",
	},
	{
		url: url("/"),
		meta: {
			title: "第五个搜索结果",
		},
		excerpt: "更多的测试内容来展示 <mark>更多按钮</mark> 的功能。",
	},
	{
		url: url("/"),
		meta: {
			title: "Sixth Search Result",
		},
		excerpt: "Even more content to test the <mark>expand/collapse</mark> feature.",
	},
];

// 优化的面板控制函数
const togglePanel = () => {
	setPanelVisibility(!panelVisible);
};

const setPanelVisibility = (show: boolean): void => {
	// 初始化时缓存DOM元素
	if (!searchPanel) {
		searchPanel = document.getElementById("search-panel");
	}

	// 获取移动端搜索面板
	const mobileSearchPanel = document.getElementById("search-panel-mobile");

	// 避免重复设置相同状态
	if (panelVisible === show) {
		return;
	}

	panelVisible = show;

	// 控制桌面版搜索面板
	if (searchPanel) {
		if (show) {
			searchPanel.classList.remove("float-panel-closed");
			searchPanel.classList.add("visible");
		} else {
			searchPanel.classList.add("float-panel-closed");
			searchPanel.classList.remove("visible");
		}
	}

	// 控制移动端搜索面板 - 只在移动端显示
	if (mobileSearchPanel) {
		// 检查是否在移动端（屏幕宽度小于1024px）
		const isMobile = window.innerWidth < 1024;
		if (show && isMobile) {
			mobileSearchPanel.classList.remove("float-panel-closed");
			mobileSearchPanel.classList.add("visible");
		} else {
			mobileSearchPanel.classList.add("float-panel-closed");
			mobileSearchPanel.classList.remove("visible");
		}
	}
};

// 处理输入事件
const handleInput = () => {
    debouncedSearch(keyword);
};

// 优化的防抖搜索函数
const debouncedSearch = (searchKeyword: string, delay: number = 500): void => {
	clearTimeout(searchTimeout);

	// 如果关键词为空，立即清空结果并隐藏面板
	if (!searchKeyword.trim()) {
		result = [];
		isSearching = false;
		setPanelVisibility(false);
		return;
	}

	// 如果关键词太短，显示面板但不搜索（允许单个字符搜索）
	if (searchKeyword.trim().length < 1) {
		result = [];
		isSearching = false;
		setPanelVisibility(true);
		return;
	}

	// 显示面板并开始搜索
	setPanelVisibility(true);

	// 延迟搜索，避免每个字符都触发搜索
	searchTimeout = setTimeout(() => {
		search(searchKeyword);
	}, delay);
};

// 优化的键盘导航处理
const handleKeydown = (event: KeyboardEvent): void => {
	if (event.key === 'Escape') {
		// ESC键关闭搜索面板并重置状态
		setPanelVisibility(false);
		keyword = '';
		result = [];
		showAllResults = false;
		lastSearchKeyword = '';
	}
};

// 优化搜索关键词处理 - 兼容中英文
const normalizeKeyword = (keyword: string): string => {
	return keyword
		.trim()
		.toLowerCase()
		// 移除多余空格
		.replace(/\s+/g, ' ')
		// 处理中文标点符号
		.replace(/[，。！？；：""''（）【】]/g, ' ')
		// 处理英文标点符号
		.replace(/[,\.!\?;:"'\(\)\[\]]/g, ' ')
		.trim();
};

const search = async (searchKeyword: string): Promise<void> => {
	const normalizedKeyword = normalizeKeyword(searchKeyword);

	if (!normalizedKeyword) {
		setPanelVisibility(false);
		result = [];
		showAllResults = false;
		lastSearchKeyword = '';
		return;
	}

	if (!initialized) {
		return;
	}

	// 如果是新的搜索关键词，重置展开状态
	if (normalizedKeyword !== lastSearchKeyword) {
		showAllResults = false;
		lastSearchKeyword = normalizedKeyword;
	}

	isSearching = true;

	try {
		let searchResults: SearchResult[] = [];

		if (import.meta.env.PROD && pagefindLoaded && window.pagefind) {
			try {
				// 使用优化的搜索参数
				const response = await window.pagefind.search(normalizedKeyword, {
					// 提高搜索结果的相关性
					excerpt_length: 100,
					// 支持模糊匹配
					fuzzy: true,
					// 支持部分匹配
					partial: true
				});
				searchResults = await Promise.all(
					response.results.map((item) => item.data()),
				);
			} catch (pagefindError) {
				// 在生产环境中隐藏详细的WASM错误信息，只显示友好的提示
				if (import.meta.env.PROD) {
					console.log('🔍 搜索完成：未找到相关内容');
				} else {
					console.warn('⚠️ Pagefind搜索失败，显示无结果:', pagefindError);
				}
				// Pagefind失败时，显示空结果
				searchResults = [];
			}
		} else {
			// 开发环境和生产环境降级：使用搜索API
			try {
				// 使用混合模式搜索API（支持Strapi和本地内容）
				const apiUrl = `/api/search/?q=${encodeURIComponent(normalizedKeyword)}&limit=20`;
				console.log('🔍 发送搜索请求:', apiUrl);

				const response = await fetch(apiUrl);
				console.log('📡 搜索API响应状态:', response.status);

				if (response.ok) {
					const data = await response.json();
					console.log('📊 搜索API响应数据:', data);

					if (data.success && data.data) {
						console.log('✅ API返回成功，数据条数:', data.data.length);
						console.log('📊 搜索数据来源:', data.source || 'unknown');
						// 转换API响应格式为搜索组件期望的格式
						searchResults = data.data.map(post => ({
							url: post.url,
							meta: {
								title: post.title, // 已经包含高亮的标题
							},
							excerpt: post.excerpt, // 已经包含高亮的摘要
						}));
						console.log('🔄 转换后的搜索结果:', searchResults);
					} else {
						console.error('❌ 搜索API返回错误:', data.error || '未知错误');
						console.log('📋 完整响应数据:', data);
						searchResults = [];
					}
				} else {
					console.error('❌ 搜索API请求失败:', response.status, response.statusText);
					const errorText = await response.text();
					console.error('❌ 错误详情:', errorText);
					searchResults = [];
				}
			} catch (apiError) {
				console.error('搜索API错误:', apiError);
				// 如果API也失败，使用假数据作为最后的降级
				searchResults = fakeResult.map(item => ({
					...item,
					excerpt: item.excerpt.replace(/搜索关键词|search keywords|关键词|more button|更多按钮|expand\/collapse/g,
						(match) => `<mark>${match}</mark>`)
				}));
			}
		}



		result = searchResults;
		// 不重置显示状态，保持用户的展开选择
		// showAllResults = false; // 移除这行，避免展开后立即收起
		// 面板已经在debouncedSearch中显示了，这里不需要再次设置

		// 调试信息
		if (import.meta.env.DEV) {
			console.log('搜索关键词:', normalizedKeyword);
			console.log('搜索结果:', result.length, '个结果');
			console.log('是否显示More按钮:', result.length > maxDisplayResults);
			console.log('当前搜索状态 - keyword:', keyword);
			console.log('面板可见性:', panelVisible, 'result.length > 0:', result.length > 0);
			if (result.length > 0) {
				console.log('第一个结果:', result[0]);
			}
		}
	} catch (error) {
		console.error("Search error:", error);
		result = [];
		// 错误时不重置展开状态，保持用户体验
		// showAllResults = false; // 移除这行
		// 错误时不隐藏面板，保持用户体验
	} finally {
		isSearching = false;
	}
};

onMount(() => {
	const initializeSearch = () => {
		initialized = true;
		pagefindLoaded =
			typeof window !== "undefined" &&
			!!window.pagefind &&
			typeof window.pagefind.search === "function";
		console.log("Pagefind status on init:", pagefindLoaded);
		if (keyword) search(keyword);
	};

	// 监听重新初始化事件
	const handleReinit = () => {
		console.log('🔄 收到搜索组件重新初始化事件');
		initialized = false;
		// 重置所有状态
		result = [];
		showAllResults = false;
		lastSearchKeyword = '';
		panelVisible = false;
		isSearching = false;
		// 重新初始化
		initializeSearch();
	};



	if (import.meta.env.DEV) {
		console.log(
			"开发环境：使用搜索API进行真实内容搜索",
		);
		initializeSearch();
	} else {
		document.addEventListener("pagefindready", () => {
			console.log("Pagefind ready event received.");
			initializeSearch();
		});
		document.addEventListener("pagefindloaderror", () => {
			console.warn(
				"Pagefind load error event received. Search functionality will be limited.",
			);
			initializeSearch(); // Initialize with pagefindLoaded as false
		});

		// Fallback in case events are not caught or pagefind is already loaded by the time this script runs
		setTimeout(() => {
			if (!initialized) {
				console.log("Fallback: Initializing search after timeout.");
				initializeSearch();
			}
		}, 2000); // Adjust timeout as needed
	}

	// 绑定重新初始化事件监听器
	const searchBar = document.getElementById('search-bar');
	const searchBarMobile = document.getElementById('search-bar-inside');

	if (searchBar) {
		searchBar.addEventListener('search-reinit', handleReinit);
	}
	if (searchBarMobile) {
		searchBarMobile.addEventListener('search-reinit', handleReinit);
	}

	// 返回清理函数
	// 添加点击外部事件监听器
	document.addEventListener('click', handleClickOutside);
	
	return () => {
		if (searchBar) {
			searchBar.removeEventListener('search-reinit', handleReinit);
		}
		if (searchBarMobile) {
			searchBarMobile.removeEventListener('search-reinit', handleReinit);
		}
		// 移除点击外部事件监听器
		document.removeEventListener('click', handleClickOutside);
	};
});

// 手动搜索函数
const performSearch = () => {
    if (!keyword.trim()) {
        return;
    }
    
    console.log('🔍 手动搜索:', keyword);
    search(keyword);
    setPanelVisibility(true);
};

// 点击空白区域关闭搜索面板
const handleClickOutside = (event: MouseEvent) => {
    const searchContainer = document.getElementById('search-bar');
    const searchPanel = document.getElementById('search-panel');
    const mobileSearchOverlay = document.querySelector('.mobile-search-overlay');
    const searchSwitch = document.getElementById('search-switch');
    
    // 检查点击是否在搜索相关元素外部
    const isClickInsideSearch = 
        (searchContainer && searchContainer.contains(event.target as Node)) ||
        (searchPanel && searchPanel.contains(event.target as Node)) ||
        (mobileSearchOverlay && mobileSearchOverlay.contains(event.target as Node)) ||
        (searchSwitch && searchSwitch.contains(event.target as Node));
    
    // 检查是否点击了页头导航元素
    const navbar = document.querySelector('nav');
    const isClickInsideNavbar = navbar && navbar.contains(event.target as Node);
    
    // 如果点击了页头导航，不关闭搜索面板
    if (isClickInsideNavbar) {
        return;
    }
    
    if (!isClickInsideSearch) {
        setPanelVisibility(false);
        keyword = '';
        result = [];
    }
};

// 移除响应式搜索，避免重复触发
// 现在只通过用户点击搜索按钮或按Enter键触发搜索
</script>

<!-- 现代化搜索框 - 桌面版 -->
<div id="search-bar" data-search-component class="modern-search-container hidden lg:block mr-4">
    <input 
        type="text"
        placeholder="{i18n(I18nKey.search)}" 
        bind:value={keyword}
        on:input={handleInput}
        on:keydown={(e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            } else if (e.key === 'Escape') {
                setPanelVisibility(false);
                keyword = '';
                result = [];
            }
        }}
        on:blur={(e) => {
            // 延迟隐藏面板，给用户时间点击搜索结果
            setTimeout(() => {
                // 检查焦点是否在搜索面板内
                if (searchPanel && !searchPanel.contains(document.activeElement) && !keyword.trim()) {
                    setPanelVisibility(false);
                }
            }, 150);
        }}
        class="modern-search-input"
    >
    <Icon icon="material-symbols:search" class="modern-search-icon"></Icon>
    
    <!-- 搜索按钮 -->
    <button 
        type="button"
        on:click={performSearch}
        class="modern-search-button"
        aria-label="搜索"
        disabled={!keyword.trim()}
    >
        <Icon icon="material-symbols:search" class="w-4 h-4"></Icon>
    </button>
    
    {#if keyword.trim()}
        <button 
            type="button"
            on:click={() => {
                keyword = '';
                result = [];
                setPanelVisibility(false);
            }}
            class="modern-search-clear visible"
            aria-label="清除搜索"
        >
            <Icon icon="material-symbols:close" class="w-3 h-3"></Icon>
        </button>
    {/if}
    
    <!-- 搜索面板 - 移到搜索容器内部 -->
    <div id="search-panel"
         on:mousedown={(e) => {
             if (e.target.tagName !== 'INPUT') {
                 e.preventDefault();
             }
         }}
         on:click={(e) => {
             e.stopPropagation();
         }}
         class="modern-search-suggestions float-panel-closed">
        
        <!-- 搜索结果 -->
        {#if isSearching}
            <div class="modern-search-loading">
                正在搜索...
            </div>
        {:else if keyword.trim() && keyword.trim().length < 1}
            <div class="modern-search-no-results">
                <Icon icon="material-symbols:edit" class="w-8 h-8 mx-auto mb-3 text-gray-400"></Icon>
                <p class="text-sm mb-1">请输入搜索关键词</p>
                <p class="text-xs text-gray-500">当前输入: "{keyword}"</p>
            </div>
        {:else if result.length === 0 && keyword.trim()}
            <div class="modern-search-no-results">
                <Icon icon="material-symbols:search-off" class="w-8 h-8 mx-auto mb-3 text-gray-400"></Icon>
                <p class="text-sm mb-1">未找到相关结果</p>
                <p class="text-xs text-gray-500">搜索关键词: "{keyword}"</p>
            </div>
        {:else}
            {#each (showAllResults ? result : result.slice(0, maxDisplayResults)) as item, index}
                <a href={item.url}
                   on:click={() => {
                       console.log('点击了搜索结果:', item.meta.title);
                       setPanelVisibility(false);
                       showAllResults = false;
                       keyword = '';
                       result = [];
                   }}
                   class="modern-search-item">
                    <Icon icon="material-symbols:article-outline" class="modern-search-item-icon"></Icon>
                    <div class="modern-search-item-content">
                        <div class="modern-search-item-title">{@html item.meta.title}</div>
                        <div class="modern-search-item-desc">{@html item.excerpt}</div>
                    </div>
                </a>
            {/each}
        {/if}
    </div>
</div>

<!-- toggle btn for phone/tablet view -->
<button on:click={togglePanel} aria-label="Search Panel" id="search-switch"
        class="btn-plain scale-animation lg:hidden rounded-lg w-11 h-11 active:scale-90">
    <Icon icon="material-symbols:search" class="text-[1.25rem]"></Icon>
</button>

<!-- 移动端搜索面板 -->
<div id="search-panel-mobile" class="mobile-search-overlay float-panel-closed">
    <!-- 移动端搜索内容容器 -->
    <div class="mobile-search-content">
        <!-- 移动端搜索框 -->
        <div class="mobile-search-header">
            <div class="modern-search-container">
                <input
                    type="text"
                    placeholder="{i18n(I18nKey.search)}"
                    bind:value={keyword}
                    on:input={handleInput}
                    on:keydown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            performSearch();
                        } else if (e.key === 'Escape') {
                            setPanelVisibility(false);
                            keyword = '';
                            result = [];
                        }
                    }}
                    class="modern-search-input"
                />
                <Icon icon="material-symbols:search" class="modern-search-icon"></Icon>
                
                <!-- 移动端搜索按钮 -->
                <button 
                    type="button"
                    on:click={performSearch}
                    class="modern-search-button"
                    aria-label="搜索"
                    disabled={!keyword.trim()}
                >
                    <Icon icon="material-symbols:search" class="w-4 h-4"></Icon>
                </button>
                
                {#if keyword.trim()}
                    <button 
                        type="button"
                        on:click={() => {
                            keyword = '';
                            result = [];
                            setPanelVisibility(false);
                        }}
                        class="modern-search-clear visible"
                        aria-label="清除搜索"
                    >
                        <Icon icon="material-symbols:close" class="w-3 h-3"></Icon>
                    </button>
                {/if}
            </div>
        </div>

        <!-- 移动端搜索结果 -->
        <div class="mobile-search-results">
            {#if isSearching}
                <div class="modern-search-loading">
                    正在搜索...
                </div>
            {:else if keyword.trim() && keyword.trim().length < 1}
                <div class="modern-search-no-results">
                    <Icon icon="material-symbols:edit" class="w-8 h-8 mx-auto mb-3 text-gray-400"></Icon>
                    <p class="text-sm mb-1">请输入搜索关键词</p>
                    <p class="text-xs text-gray-500">当前输入: "{keyword}"</p>
                </div>
            {:else if result.length === 0 && keyword.trim()}
                <div class="modern-search-no-results">
                    <Icon icon="material-symbols:search-off" class="w-8 h-8 mx-auto mb-3 text-gray-400"></Icon>
                    <p class="text-sm mb-1">未找到相关结果</p>
                    <p class="text-xs text-gray-500">搜索关键词: "{keyword}"</p>
                </div>
            {:else}
                {#each (showAllResults ? result : result.slice(0, maxDisplayResults)) as item, index}
                    <a href={item.url}
                       on:click={() => {
                           console.log('点击了搜索结果:', item.meta.title);
                           setPanelVisibility(false);
                           showAllResults = false;
                           keyword = '';
                           result = [];
                       }}
                       class="modern-search-item">
                        <Icon icon="material-symbols:article-outline" class="modern-search-item-icon"></Icon>
                        <div class="modern-search-item-content">
                            <div class="modern-search-item-title">{@html item.meta.title}</div>
                            <div class="modern-search-item-desc">{@html item.excerpt}</div>
                        </div>
                    </a>
                {/each}
            {/if}
        </div>
    </div>
</div>

<style>
  input:focus {
    outline: 0;
  }

  .search-panel {
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    /* 自定义滚动条 */
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  .search-panel::-webkit-scrollbar {
    width: 6px;
  }

  .search-panel::-webkit-scrollbar-track {
    background: transparent;
  }

  .search-panel::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  .dark .search-panel::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
  }

  /* 限制摘要显示行数 */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* 搜索高亮样式优化 */
  :global(.search-panel mark) {
    background-color: rgba(var(--primary-rgb), 0.2);
    color: var(--primary);
    padding: 1px 2px;
    border-radius: 2px;
    font-weight: 500;
  }

  /* 面板动画优化 */
  .search-panel {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: top;
  }

  .float-panel-closed {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
    pointer-events: none;
  }
</style>
