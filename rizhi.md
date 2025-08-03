2025-08-03T07:37:03.533638Z	Cloning repository...
2025-08-03T07:37:04.219737Z	From https://github.com/SparkDone/My_Astro
2025-08-03T07:37:04.220284Z	 * branch            9a48542dd7cf33b25c66167b6f178e5835d7676d -> FETCH_HEAD
2025-08-03T07:37:04.220413Z	
2025-08-03T07:37:04.262304Z	HEAD is now at 9a48542  修复Cloudflare适配器配置和构建错误
2025-08-03T07:37:04.262761Z	
2025-08-03T07:37:04.344952Z	
2025-08-03T07:37:04.345432Z	Using v2 root directory strategy
2025-08-03T07:37:04.368065Z	Success: Finished cloning repository files
2025-08-03T07:37:06.053007Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-03T07:37:06.053736Z	
2025-08-03T07:37:07.158952Z	No wrangler.toml file found. Continuing.
2025-08-03T07:37:07.225827Z	Detected the following tools from environment: pnpm@9.14.4, nodejs@22.16.0
2025-08-03T07:37:07.535507Z	Preparing pnpm@9.14.4 for immediate activation...
2025-08-03T07:37:09.450359Z	Installing project dependencies: pnpm install
2025-08-03T07:37:10.097696Z	Lockfile is up to date, resolution step is skipped
2025-08-03T07:37:10.182056Z	Progress: resolved 1, reused 0, downloaded 0, added 0
2025-08-03T07:37:10.471888Z	Packages: +1135
2025-08-03T07:37:10.472279Z	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
2025-08-03T07:37:11.183365Z	Progress: resolved 1135, reused 0, downloaded 53, added 48
2025-08-03T07:37:12.182564Z	Progress: resolved 1135, reused 0, downloaded 218, added 213
2025-08-03T07:37:13.195616Z	Progress: resolved 1135, reused 0, downloaded 396, added 391
2025-08-03T07:37:14.196497Z	Progress: resolved 1135, reused 0, downloaded 542, added 541
2025-08-03T07:37:15.196756Z	Progress: resolved 1135, reused 0, downloaded 838, added 835
2025-08-03T07:37:16.197675Z	Progress: resolved 1135, reused 0, downloaded 1028, added 1028
2025-08-03T07:37:17.197921Z	Progress: resolved 1135, reused 0, downloaded 1134, added 1134
2025-08-03T07:37:17.559509Z	Progress: resolved 1135, reused 0, downloaded 1135, added 1135, done
2025-08-03T07:37:17.893343Z	.../node_modules/workerd postinstall$ node install.js
2025-08-03T07:37:17.894068Z	.../esbuild@0.25.8/node_modules/esbuild postinstall$ node install.js
2025-08-03T07:37:17.894891Z	.../sharp@0.33.5/node_modules/sharp install$ node install/check
2025-08-03T07:37:17.895399Z	.../.pnpm/swup@4.8.2/node_modules/swup postinstall$ opencollective-postinstall || true
2025-08-03T07:37:17.895916Z	.../esbuild@0.25.4/node_modules/esbuild postinstall$ node install.js
2025-08-03T07:37:18.004022Z	.../.pnpm/swup@4.8.2/node_modules/swup postinstall: Done
2025-08-03T07:37:18.036901Z	.../esbuild@0.25.8/node_modules/esbuild postinstall: Done
2025-08-03T07:37:18.047354Z	.../node_modules/workerd postinstall: Done
2025-08-03T07:37:18.124637Z	.../esbuild@0.25.4/node_modules/esbuild postinstall: Done
2025-08-03T07:37:18.126356Z	.../sharp@0.33.5/node_modules/sharp install: Done
2025-08-03T07:37:18.150904Z	.../sharp@0.34.3/node_modules/sharp install$ node install/check.js
2025-08-03T07:37:18.268197Z	.../sharp@0.34.3/node_modules/sharp install: Done
2025-08-03T07:37:18.717024Z	
2025-08-03T07:37:18.717307Z	dependencies:
2025-08-03T07:37:18.717438Z	+ @astrojs/check 0.9.4
2025-08-03T07:37:18.717654Z	+ @astrojs/cloudflare 12.6.2
2025-08-03T07:37:18.717843Z	+ @astrojs/node 9.3.3
2025-08-03T07:37:18.718027Z	+ @astrojs/rss 4.0.12
2025-08-03T07:37:18.718197Z	+ @astrojs/sitemap 3.4.2
2025-08-03T07:37:18.718359Z	+ @astrojs/svelte 7.1.0
2025-08-03T07:37:18.718473Z	+ @astrojs/tailwind 6.0.2
2025-08-03T07:37:18.718537Z	+ @expressive-code/core 0.41.3
2025-08-03T07:37:18.719016Z	+ @expressive-code/plugin-collapsible-sections 0.41.3
2025-08-03T07:37:18.71942Z	+ @expressive-code/plugin-line-numbers 0.41.3
2025-08-03T07:37:18.719619Z	+ @fontsource-variable/jetbrains-mono 5.2.6
2025-08-03T07:37:18.719886Z	+ @fontsource/roboto 5.2.6
2025-08-03T07:37:18.720058Z	+ @iconify-json/fa6-brands 1.2.6
2025-08-03T07:37:18.720267Z	+ @iconify-json/fa6-regular 1.2.4
2025-08-03T07:37:18.720486Z	+ @iconify-json/fa6-solid 1.2.4
2025-08-03T07:37:18.720846Z	+ @iconify-json/heroicons 1.2.2
2025-08-03T07:37:18.720959Z	+ @iconify-json/icon-park-outline 1.2.2
2025-08-03T07:37:18.721062Z	+ @iconify-json/lucide 1.2.60
2025-08-03T07:37:18.721228Z	+ @iconify-json/material-symbols 1.2.30
2025-08-03T07:37:18.721332Z	+ @iconify-json/tabler 1.2.20
2025-08-03T07:37:18.721427Z	+ @iconify/svelte 4.2.0
2025-08-03T07:37:18.721521Z	+ @swup/astro 1.7.0
2025-08-03T07:37:18.721623Z	+ @tailwindcss/typography 0.5.16
2025-08-03T07:37:18.721714Z	+ astro 5.11.0
2025-08-03T07:37:18.721807Z	+ astro-expressive-code 0.41.3
2025-08-03T07:37:18.721898Z	+ astro-icon 1.1.5
2025-08-03T07:37:18.722009Z	+ dotenv-cli 10.0.0
2025-08-03T07:37:18.722123Z	+ hastscript 9.0.1
2025-08-03T07:37:18.722434Z	+ katex 0.16.22
2025-08-03T07:37:18.7226Z	+ markdown-it 14.1.0
2025-08-03T07:37:18.722732Z	+ mdast-util-to-string 4.0.0
2025-08-03T07:37:18.722845Z	+ overlayscrollbars 2.11.4
2025-08-03T07:37:18.722962Z	+ pagefind 1.3.0
2025-08-03T07:37:18.723076Z	+ photoswipe 5.4.4
2025-08-03T07:37:18.723244Z	+ reading-time 1.5.0
2025-08-03T07:37:18.723366Z	+ rehype-autolink-headings 7.1.0
2025-08-03T07:37:18.723482Z	+ rehype-components 0.3.0
2025-08-03T07:37:18.723578Z	+ rehype-katex 7.0.1
2025-08-03T07:37:18.723678Z	+ rehype-slug 6.0.0
2025-08-03T07:37:18.723774Z	+ remark-directive 3.0.1
2025-08-03T07:37:18.723901Z	+ remark-directive-rehype 0.4.2
2025-08-03T07:37:18.724024Z	+ remark-github-admonitions-to-directives 1.0.5
2025-08-03T07:37:18.724146Z	+ remark-math 6.0.0
2025-08-03T07:37:18.724252Z	+ remark-sectionize 2.1.0
2025-08-03T07:37:18.724349Z	+ sanitize-html 2.17.0
2025-08-03T07:37:18.724448Z	+ sharp 0.34.3
2025-08-03T07:37:18.724589Z	+ svelte 5.37.3
2025-08-03T07:37:18.724816Z	+ tailwindcss 3.4.17
2025-08-03T07:37:18.725026Z	+ typescript 5.9.2
2025-08-03T07:37:18.725175Z	+ unist-util-visit 5.0.0
2025-08-03T07:37:18.725288Z	
2025-08-03T07:37:18.725394Z	devDependencies:
2025-08-03T07:37:18.725514Z	+ @astrojs/ts-plugin 1.10.4
2025-08-03T07:37:18.725652Z	+ @biomejs/biome 2.0.6
2025-08-03T07:37:18.725763Z	+ @rollup/plugin-yaml 4.1.2
2025-08-03T07:37:18.725904Z	+ @types/hast 3.0.4
2025-08-03T07:37:18.726048Z	+ @types/markdown-it 14.1.2
2025-08-03T07:37:18.726203Z	+ @types/mdast 4.0.4
2025-08-03T07:37:18.726318Z	+ @types/sanitize-html 2.16.0
2025-08-03T07:37:18.726384Z	+ dotenv 17.2.1
2025-08-03T07:37:18.726507Z	+ postcss-import 16.1.1
2025-08-03T07:37:18.726624Z	+ postcss-nesting 13.0.2
2025-08-03T07:37:18.726756Z	+ stylus 0.64.0
2025-08-03T07:37:18.726869Z	+ wrangler 4.27.0
2025-08-03T07:37:18.726986Z	
2025-08-03T07:37:18.738721Z	Done in 9s
2025-08-03T07:37:18.832248Z	Executing user command: pnpm build
2025-08-03T07:37:19.412928Z	
2025-08-03T07:37:19.413246Z	> AstroCMS@0.0.1 build /opt/buildhome/repo
2025-08-03T07:37:19.413416Z	> node scripts/download-strapi-images.js && astro build && pagefind --site dist/client && node scripts/post-build.js && node scripts/optimize-html.js
2025-08-03T07:37:19.413559Z	
2025-08-03T07:37:19.4644Z	🖼️ 开始下载Strapi图片...
2025-08-03T07:37:19.464739Z	📡 Strapi URL: https://api.sparkdone.com
2025-08-03T07:37:19.464907Z	📁 输出目录: /opt/buildhome/repo/public/images/strapi
2025-08-03T07:37:19.465061Z	📡 获取文章数据: https://api.sparkdone.com/api/articles?populate=*
2025-08-03T07:37:19.680193Z	✅ 获取到 0 篇文章
2025-08-03T07:37:19.680437Z	📡 获取配置数据: https://api.sparkdone.com/api/index?populate=*
2025-08-03T07:37:19.791659Z	📡 获取配置数据: https://api.sparkdone.com/api/site-config?populate=*
2025-08-03T07:37:19.86795Z	📡 获取配置数据: https://api.sparkdone.com/api/banners?populate=*
2025-08-03T07:37:19.897941Z	🖼️ 发现 10 个图片URL
2025-08-03T07:37:19.898285Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/logo1_2c27baca01.png
2025-08-03T07:37:20.001847Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/logo1_2c27baca01-1754206639897.png
2025-08-03T07:37:20.002101Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/large_logo1_2c27baca01.png
2025-08-03T07:37:20.087578Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/large_logo1_2c27baca01-1754206640001.png
2025-08-03T07:37:20.087902Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/small_logo1_2c27baca01.png
2025-08-03T07:37:20.121833Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/small_logo1_2c27baca01-1754206640087.png
2025-08-03T07:37:20.122197Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/medium_logo1_2c27baca01.png
2025-08-03T07:37:20.161259Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/medium_logo1_2c27baca01-1754206640121.png
2025-08-03T07:37:20.161504Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/thumbnail_logo1_2c27baca01.png
2025-08-03T07:37:20.193635Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/thumbnail_logo1_2c27baca01-1754206640161.png
2025-08-03T07:37:20.193869Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/LOGO_1c461133d8.png
2025-08-03T07:37:20.252635Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/LOGO_1c461133d8-1754206640193.png
2025-08-03T07:37:20.252862Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/large_LOGO_1c461133d8.png
2025-08-03T07:37:20.294831Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/large_LOGO_1c461133d8-1754206640252.png
2025-08-03T07:37:20.295155Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/small_LOGO_1c461133d8.png
2025-08-03T07:37:20.325976Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/small_LOGO_1c461133d8-1754206640294.png
2025-08-03T07:37:20.326345Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/medium_LOGO_1c461133d8.png
2025-08-03T07:37:20.362867Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/medium_LOGO_1c461133d8-1754206640325.png
2025-08-03T07:37:20.363135Z	⬇️ 下载图片: https://api.sparkdone.com/uploads/thumbnail_LOGO_1c461133d8.png
2025-08-03T07:37:20.392914Z	✅ 保存图片: /opt/buildhome/repo/public/images/strapi/thumbnail_LOGO_1c461133d8-1754206640362.png
2025-08-03T07:37:20.39327Z	✅ 保存映射文件: /opt/buildhome/repo/src/data/image-mapping.json
2025-08-03T07:37:20.393415Z	🎉 图片下载完成！成功: 10/10
2025-08-03T07:37:23.389266Z	07:37:23 [@astrojs/node] Enabling sessions with filesystem storage
2025-08-03T07:37:23.662204Z	07:37:23 [vite] Forced re-optimization of dependencies
2025-08-03T07:37:23.845901Z	07:37:23 [content] Syncing content
2025-08-03T07:37:23.850761Z	07:37:23 [content] Synced content
2025-08-03T07:37:23.851445Z	07:37:23 [types] Generated 254ms
2025-08-03T07:37:23.851851Z	07:37:23 [build] output: "server"
2025-08-03T07:37:23.851993Z	07:37:23 [build] mode: "server"
2025-08-03T07:37:23.852108Z	07:37:23 [build] directory: /opt/buildhome/repo/dist/
2025-08-03T07:37:23.852197Z	07:37:23 [build] adapter: @astrojs/node
2025-08-03T07:37:23.852322Z	07:37:23 [build] Collecting build info...
2025-08-03T07:37:23.852667Z	07:37:23 [build] ✓ Completed in 464ms.
2025-08-03T07:37:23.853934Z	07:37:23 [build] Building server entrypoints...
2025-08-03T07:37:31.288455Z	07:37:31 [vite] [32m✓ built in 7.38s[39m
2025-08-03T07:37:31.288981Z	07:37:31 [build] ✓ Completed in 7.43s.
2025-08-03T07:37:31.289815Z	
2025-08-03T07:37:31.29004Z	 building client (vite) 
2025-08-03T07:37:31.376305Z	07:37:31 [vite] transforming...
2025-08-03T07:37:32.025711Z	07:37:32 [WARN] [vite] [33m[plugin vite:resolve] Module "node:path" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/src/components/misc/ImageWrapper.astro". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:32.658021Z	07:37:32 [WARN] [vite] [33m[plugin vite:resolve] Module "node:path" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/src/components/PostCard.astro". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:32.662765Z	07:37:32 [WARN] [vite] [33m[plugin vite:resolve] Module "node:path" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/src/components/UniversalPostList.astro". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:32.698066Z	07:37:32 [WARN] [vite] [33m[plugin vite:resolve] Module "node:path" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/src/pages/posts/[...slug].astro". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:32.873319Z	07:37:32 [WARN] [vite] [33m[plugin vite:resolve] Module "stream" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/reading-time@1.5.0/node_modules/reading-time/lib/stream.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:32.873991Z	07:37:32 [WARN] [vite] [33m[plugin vite:resolve] Module "util" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/reading-time@1.5.0/node_modules/reading-time/lib/stream.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.341431Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "node:util" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/constructor.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.341748Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "node:stream" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/constructor.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.356454Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "node:events" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/utility.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.357867Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "node:os" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/utility.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.376341Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "node:path" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/output.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.713363Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "child_process" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/detect-libc@2.0.4/node_modules/detect-libc/lib/detect-libc.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.751104Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "node:child_process" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/libvips.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.751472Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "node:crypto" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/libvips.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:33.911483Z	07:37:33 [WARN] [vite] [33m[plugin vite:resolve] Module "fs" has been externalized for browser compatibility, imported by "/opt/buildhome/repo/node_modules/.pnpm/detect-libc@2.0.4/node_modules/detect-libc/lib/filesystem.js". See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.[39m
2025-08-03T07:37:36.639082Z	07:37:36 [vite] [32m✓[39m 917 modules transformed.
2025-08-03T07:37:36.968536Z	07:37:36 [WARN] [vite] [33mGenerated an empty chunk: "MainGridLayout.astro_astro_type_script_index_2_lang".[39m
2025-08-03T07:37:37.026388Z	07:37:36 [WARN] [vite] [33mGenerated an empty chunk: "ResourceHints.astro_astro_type_script_index_0_lang".[39m
2025-08-03T07:37:37.080586Z	07:37:37 [vite] rendering chunks...
2025-08-03T07:37:38.362641Z	07:37:38 [vite] computing gzip size...
2025-08-03T07:37:38.847261Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mec.g1fg5.js                                                      [39m[1m[2m     0.94 kB[22m[1m[22m
2025-08-03T07:37:38.847599Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size3-Regular.CTq5MqoE.woff                                [39m[1m[2m     4.42 kB[22m[1m[22m
2025-08-03T07:37:38.847763Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size4-Regular.Dl5lxZxV.woff2                               [39m[1m[2m     4.93 kB[22m[1m[22m
2025-08-03T07:37:38.847893Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size2-Regular.Dy4dx90m.woff2                               [39m[1m[2m     5.21 kB[22m[1m[22m
2025-08-03T07:37:38.848021Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-vietnamese-400-normal.BYP5tVVv.woff                       [39m[1m[2m     5.44 kB[22m[1m[22m
2025-08-03T07:37:38.848161Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-vietnamese-700-normal.7YosmkaU.woff                       [39m[1m[2m     5.44 kB[22m[1m[22m
2025-08-03T07:37:38.848283Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size1-Regular.mCD8mA8B.woff2                               [39m[1m[2m     5.47 kB[22m[1m[22m
2025-08-03T07:37:38.848409Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-vietnamese-500-normal.CUzdRVXb.woff                       [39m[1m[2m     5.48 kB[22m[1m[22m
2025-08-03T07:37:38.848519Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size4-Regular.BF-4gkZK.woff                                [39m[1m[2m     5.98 kB[22m[1m[22m
2025-08-03T07:37:38.848636Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size2-Regular.oD1tc_U0.woff                                [39m[1m[2m     6.19 kB[22m[1m[22m
2025-08-03T07:37:38.848781Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size1-Regular.C195tn64.woff                                [39m[1m[2m     6.50 kB[22m[1m[22m
2025-08-03T07:37:38.848905Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Caligraphic-Regular.Di6jR-x-.woff2                         [39m[1m[2m     6.91 kB[22m[1m[22m
2025-08-03T07:37:38.849024Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Caligraphic-Bold.Dq_IR9rO.woff2                            [39m[1m[2m     6.91 kB[22m[1m[22m
2025-08-03T07:37:38.849278Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-greek-400-normal.DwVopRQH.woff                            [39m[1m[2m     7.47 kB[22m[1m[22m
2025-08-03T07:37:38.84942Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-greek-700-normal.DXrPs8of.woff                            [39m[1m[2m     7.49 kB[22m[1m[22m
2025-08-03T07:37:38.849541Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-vietnamese-wght-normal.Bt-aOZkq.woff2             [39m[1m[2m     7.50 kB[22m[1m[22m
2025-08-03T07:37:38.849663Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-greek-500-normal.B0wzjI_J.woff                            [39m[1m[2m     7.51 kB[22m[1m[22m
2025-08-03T07:37:38.849782Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size3-Regular.DgpXs0kz.ttf                                 [39m[1m[2m     7.59 kB[22m[1m[22m
2025-08-03T07:37:38.849905Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Caligraphic-Regular.CTRA-rTL.woff                          [39m[1m[2m     7.66 kB[22m[1m[22m
2025-08-03T07:37:38.850025Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Caligraphic-Bold.BEiXGLvX.woff                             [39m[1m[2m     7.72 kB[22m[1m[22m
2025-08-03T07:37:38.850172Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-vietnamese-500-normal.HYpufUYk.woff2                      [39m[1m[2m     7.84 kB[22m[1m[22m
2025-08-03T07:37:38.850298Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-vietnamese-400-normal.CDDxGrUb.woff2                      [39m[1m[2m     7.86 kB[22m[1m[22m
2025-08-03T07:37:38.850417Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-vietnamese-700-normal.BFWtvCOj.woff2                      [39m[1m[2m     7.88 kB[22m[1m[22m
2025-08-03T07:37:38.850524Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-vietnamese-wght-italic.Dcombn6O.woff2             [39m[1m[2m     8.06 kB[22m[1m[22m
2025-08-03T07:37:38.850649Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-symbols-500-normal.B3xPS0M7.woff                          [39m[1m[2m     8.64 kB[22m[1m[22m
2025-08-03T07:37:38.850781Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-symbols-400-normal.B2LMqLB2.woff                          [39m[1m[2m     8.66 kB[22m[1m[22m
2025-08-03T07:37:38.850916Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-symbols-700-normal.D_8z4JZ9.woff                          [39m[1m[2m     8.68 kB[22m[1m[22m
2025-08-03T07:37:38.851038Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-greek-wght-normal.Bw9x6K1M.woff2                  [39m[1m[2m     9.00 kB[22m[1m[22m
2025-08-03T07:37:38.85117Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-greek-wght-italic.Dmq-fBVQ.woff2                  [39m[1m[2m     9.55 kB[22m[1m[22m
2025-08-03T07:37:38.85128Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-greek-500-normal.BJMS0heP.woff2                           [39m[1m[2m     9.64 kB[22m[1m[22m
2025-08-03T07:37:38.851401Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-greek-400-normal.jFM2czAU.woff2                           [39m[1m[2m     9.64 kB[22m[1m[22m
2025-08-03T07:37:38.85151Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Script-Regular.D3wIWfF6.woff2                              [39m[1m[2m     9.64 kB[22m[1m[22m
2025-08-03T07:37:38.851618Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-greek-700-normal.DpKAje7q.woff2                           [39m[1m[2m     9.68 kB[22m[1m[22m
2025-08-03T07:37:38.85173Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-400-normal.C5q4FMUG.woff                         [39m[1m[2m     9.73 kB[22m[1m[22m
2025-08-03T07:37:38.851849Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-700-normal.BmXeMSnZ.woff                         [39m[1m[2m     9.90 kB[22m[1m[22m
2025-08-03T07:37:38.851975Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-500-normal.DhPqGoNQ.woff                         [39m[1m[2m     9.90 kB[22m[1m[22m
2025-08-03T07:37:38.852117Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Regular.DDBCnlJ7.woff2                           [39m[1m[2m    10.34 kB[22m[1m[22m
2025-08-03T07:37:38.852245Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size4-Regular.DWFBv043.ttf                                 [39m[1m[2m    10.36 kB[22m[1m[22m
2025-08-03T07:37:38.852368Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-symbols-400-normal.fF1SLJBj.woff2                         [39m[1m[2m    10.58 kB[22m[1m[22m
2025-08-03T07:37:38.852477Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Script-Regular.D5yQViql.woff                               [39m[1m[2m    10.59 kB[22m[1m[22m
2025-08-03T07:37:38.852596Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-symbols-500-normal.BXFTxrNR.woff2                         [39m[1m[2m    10.73 kB[22m[1m[22m
2025-08-03T07:37:38.852728Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-symbols-700-normal.DKkQdRpM.woff2                         [39m[1m[2m    10.80 kB[22m[1m[22m
2025-08-03T07:37:38.85285Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Fraktur-Regular.CTYiF6lA.woff2                             [39m[1m[2m    11.32 kB[22m[1m[22m
2025-08-03T07:37:38.852976Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Fraktur-Bold.CL6g_b3V.woff2                                [39m[1m[2m    11.35 kB[22m[1m[22m
2025-08-03T07:37:38.853099Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size2-Regular.B7gKUWhC.ttf                                 [39m[1m[2m    11.51 kB[22m[1m[22m
2025-08-03T07:37:38.853213Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-400-normal.DAIM1_dR.woff2                        [39m[1m[2m    11.84 kB[22m[1m[22m
2025-08-03T07:37:38.853337Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-700-normal.CzEIZVQR.woff2                        [39m[1m[2m    11.97 kB[22m[1m[22m
2025-08-03T07:37:38.853458Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-500-normal.hCeO1jFL.woff2                        [39m[1m[2m    11.98 kB[22m[1m[22m
2025-08-03T07:37:38.853582Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Italic.C3H0VqGB.woff2                            [39m[1m[2m    12.03 kB[22m[1m[22m
2025-08-03T07:37:38.853693Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-cyrillic-wght-normal.D73BlboJ.woff2               [39m[1m[2m    12.11 kB[22m[1m[22m
2025-08-03T07:37:38.853802Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Bold.D1sUS0GD.woff2                              [39m[1m[2m    12.22 kB[22m[1m[22m
2025-08-03T07:37:38.853928Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Size1-Regular.Dbsnue_I.ttf                                 [39m[1m[2m    12.23 kB[22m[1m[22m
2025-08-03T07:37:38.854054Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Regular.CS6fqUqJ.woff                            [39m[1m[2m    12.32 kB[22m[1m[22m
2025-08-03T07:37:38.854197Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Caligraphic-Regular.wX97UBjC.ttf                           [39m[1m[2m    12.34 kB[22m[1m[22m
2025-08-03T07:37:38.854328Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Caligraphic-Bold.ATXxdsX0.ttf                              [39m[1m[2m    12.37 kB[22m[1m[22m
2025-08-03T07:37:38.854449Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-ext-400-normal.BG57dRWO.woff                        [39m[1m[2m    12.47 kB[22m[1m[22m
2025-08-03T07:37:38.8546Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-ext-700-normal.DGcaX69F.woff                        [39m[1m[2m    12.48 kB[22m[1m[22m
2025-08-03T07:37:38.854725Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-ext-500-normal.EUd9mLnZ.woff                        [39m[1m[2m    12.52 kB[22m[1m[22m
2025-08-03T07:37:38.854843Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Fraktur-Regular.Dxdc4cR9.woff                              [39m[1m[2m    13.21 kB[22m[1m[22m
2025-08-03T07:37:38.854969Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Fraktur-Bold.BsDP51OF.woff                                 [39m[1m[2m    13.30 kB[22m[1m[22m
2025-08-03T07:37:38.855108Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-cyrillic-wght-italic.CfQkWpeR.woff2               [39m[1m[2m    13.35 kB[22m[1m[22m
2025-08-03T07:37:38.855235Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Typewriter-Regular.CO6r4hn1.woff2                          [39m[1m[2m    13.57 kB[22m[1m[22m
2025-08-03T07:37:38.855369Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-ext-400-normal.ZYmyxeOy.woff2                       [39m[1m[2m    13.74 kB[22m[1m[22m
2025-08-03T07:37:38.855486Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-ext-700-normal.BNPgmEQS.woff2                       [39m[1m[2m    13.96 kB[22m[1m[22m
2025-08-03T07:37:38.855602Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-ext-500-normal.C_ARlJGk.woff2                       [39m[1m[2m    13.98 kB[22m[1m[22m
2025-08-03T07:37:38.855708Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Italic.DN2j7dab.woff                             [39m[1m[2m    14.11 kB[22m[1m[22m
2025-08-03T07:37:38.855811Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Bold.DbIhKOiC.woff                               [39m[1m[2m    14.41 kB[22m[1m[22m
2025-08-03T07:37:38.855918Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-latin-ext-wght-normal.DBQx-q_a.woff2              [39m[1m[2m    15.20 kB[22m[1m[22m
2025-08-03T07:37:38.856022Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-ext-400-normal.5IDvadIC.woff                     [39m[1m[2m    15.40 kB[22m[1m[22m
2025-08-03T07:37:38.85615Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-ext-700-normal.y_8Eg3F3.woff                     [39m[1m[2m    15.51 kB[22m[1m[22m
2025-08-03T07:37:38.856256Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-ext-500-normal.aAFKCR76.woff                     [39m[1m[2m    15.52 kB[22m[1m[22m
2025-08-03T07:37:38.856379Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Typewriter-Regular.C0xS9mPB.woff                           [39m[1m[2m    16.03 kB[22m[1m[22m
2025-08-03T07:37:38.85649Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Math-BoldItalic.CZnvNsCZ.woff2                             [39m[1m[2m    16.40 kB[22m[1m[22m
2025-08-03T07:37:38.856592Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Math-Italic.t53AETM-.woff2                                 [39m[1m[2m    16.44 kB[22m[1m[22m
2025-08-03T07:37:38.856714Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-latin-ext-wght-italic.BrDczivE.woff2              [39m[1m[2m    16.52 kB[22m[1m[22m
2025-08-03T07:37:38.856821Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Script-Regular.C5JkGWo-.ttf                                [39m[1m[2m    16.65 kB[22m[1m[22m
2025-08-03T07:37:38.85694Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-BoldItalic.DxDJ3AOS.woff2                             [39m[1m[2m    16.78 kB[22m[1m[22m
2025-08-03T07:37:38.857045Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-ext-400-normal.DzMWdK87.woff2                    [39m[1m[2m    16.85 kB[22m[1m[22m
2025-08-03T07:37:38.857175Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Italic.NWA7e6Wa.woff2                                 [39m[1m[2m    16.99 kB[22m[1m[22m
2025-08-03T07:37:38.85732Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-ext-700-normal.D_fA0fHY.woff2                    [39m[1m[2m    17.11 kB[22m[1m[22m
2025-08-03T07:37:38.857503Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-cyrillic-ext-500-normal.B7rQpwPu.woff2                    [39m[1m[2m    17.16 kB[22m[1m[22m
2025-08-03T07:37:38.857639Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-math-400-normal.BRMeFL5Z.woff                             [39m[1m[2m    18.28 kB[22m[1m[22m
2025-08-03T07:37:38.857943Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-math-500-normal.nGmytUgK.woff                             [39m[1m[2m    18.36 kB[22m[1m[22m
2025-08-03T07:37:38.858145Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-math-700-normal.yuY-ZMbs.woff                             [39m[1m[2m    18.42 kB[22m[1m[22m
2025-08-03T07:37:38.858279Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Math-BoldItalic.iY-2wyZ7.woff                              [39m[1m[2m    18.67 kB[22m[1m[22m
2025-08-03T07:37:38.85839Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Math-Italic.DA0__PXp.woff                                  [39m[1m[2m    18.75 kB[22m[1m[22m
2025-08-03T07:37:38.858485Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-BoldItalic.SpSLRI95.woff                              [39m[1m[2m    19.41 kB[22m[1m[22m
2025-08-03T07:37:38.85861Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Regular.BNo7hRIc.ttf                             [39m[1m[2m    19.44 kB[22m[1m[22m
2025-08-03T07:37:38.858732Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-400-normal.BX2H0A0_.woff                            [39m[1m[2m    19.57 kB[22m[1m[22m
2025-08-03T07:37:38.858839Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Fraktur-Regular.CB_wures.ttf                               [39m[1m[2m    19.57 kB[22m[1m[22m
2025-08-03T07:37:38.858972Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Fraktur-Bold.BdnERNNW.ttf                                  [39m[1m[2m    19.58 kB[22m[1m[22m
2025-08-03T07:37:38.859083Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-math-400-normal.B3wgz80t.woff2                            [39m[1m[2m    19.66 kB[22m[1m[22m
2025-08-03T07:37:38.859226Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-500-normal.CoDN7ZW2.woff                            [39m[1m[2m    19.67 kB[22m[1m[22m
2025-08-03T07:37:38.859524Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Italic.BMLOBm91.woff                                  [39m[1m[2m    19.68 kB[22m[1m[22m
2025-08-03T07:37:38.859663Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-700-normal.D74k8Kh_.woff                            [39m[1m[2m    19.72 kB[22m[1m[22m
2025-08-03T07:37:38.859781Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-math-500-normal.CFNaIMFC.woff2                            [39m[1m[2m    19.98 kB[22m[1m[22m
2025-08-03T07:37:38.859892Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-math-700-normal.xbpggnJp.woff2                            [39m[1m[2m    19.98 kB[22m[1m[22m
2025-08-03T07:37:38.860006Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-400-normal.CNwBRw8h.woff2                           [39m[1m[2m    20.61 kB[22m[1m[22m
2025-08-03T07:37:38.860132Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-500-normal.CkrA1NAy.woff2                           [39m[1m[2m    20.93 kB[22m[1m[22m
2025-08-03T07:37:38.860242Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mroboto-latin-700-normal.DZr4b_KL.woff2                           [39m[1m[2m    21.00 kB[22m[1m[22m
2025-08-03T07:37:38.860357Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Italic.YYjJ1zSn.ttf                              [39m[1m[2m    22.36 kB[22m[1m[22m
2025-08-03T07:37:38.860473Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_SansSerif-Bold.CFMepnvq.ttf                                [39m[1m[2m    24.50 kB[22m[1m[22m
2025-08-03T07:37:38.860611Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Bold.Cx986IdX.woff2                                   [39m[1m[2m    25.32 kB[22m[1m[22m
2025-08-03T07:37:38.860736Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Regular.B22Nviop.woff2                                [39m[1m[2m    26.27 kB[22m[1m[22m
2025-08-03T07:37:38.860866Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Typewriter-Regular.D3Ib7_Hf.ttf                            [39m[1m[2m    27.56 kB[22m[1m[22m
2025-08-03T07:37:38.860986Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_AMS-Regular.BQhdFMY1.woff2                                 [39m[1m[2m    28.08 kB[22m[1m[22m
2025-08-03T07:37:38.861128Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Bold.Jm3AIy58.woff                                    [39m[1m[2m    29.91 kB[22m[1m[22m
2025-08-03T07:37:38.861254Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Regular.Dr94JaBh.woff                                 [39m[1m[2m    30.77 kB[22m[1m[22m
2025-08-03T07:37:38.861365Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Math-BoldItalic.B3XSjfu4.ttf                               [39m[1m[2m    31.20 kB[22m[1m[22m
2025-08-03T07:37:38.86148Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Math-Italic.flOr_0UB.ttf                                   [39m[1m[2m    31.31 kB[22m[1m[22m
2025-08-03T07:37:38.86172Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-BoldItalic.DzxPMmG6.ttf                               [39m[1m[2m    32.97 kB[22m[1m[22m
2025-08-03T07:37:38.861835Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_AMS-Regular.DMm9YOAa.woff                                  [39m[1m[2m    33.52 kB[22m[1m[22m
2025-08-03T07:37:38.861952Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Italic.3WenGoN9.ttf                                   [39m[1m[2m    33.58 kB[22m[1m[22m
2025-08-03T07:37:38.862057Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-latin-wght-normal.B9CIFXIH.woff2                  [39m[1m[2m    40.40 kB[22m[1m[22m
2025-08-03T07:37:38.862374Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mjetbrains-mono-latin-wght-italic.B2M6KQje.woff2                  [39m[1m[2m    42.96 kB[22m[1m[22m
2025-08-03T07:37:38.862559Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Bold.waoOVXN0.ttf                                     [39m[1m[2m    51.34 kB[22m[1m[22m
2025-08-03T07:37:38.862692Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_Main-Regular.ypZvNtVU.ttf                                  [39m[1m[2m    53.58 kB[22m[1m[22m
2025-08-03T07:37:38.862887Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mKaTeX_AMS-Regular.DRggAlZN.ttf                                   [39m[1m[2m    63.63 kB[22m[1m[22m
2025-08-03T07:37:38.863015Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mlogo1.Bc-qrwah.png                                               [39m[1m[2m   386.60 kB[22m[1m[22m
2025-08-03T07:37:38.863199Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mdemo-avatar.CxcI0ivM.png                                         [39m[1m[2m   416.18 kB[22m[1m[22m
2025-08-03T07:37:38.863388Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[32mLOGO.NZTBEBKn.png                                                [39m[1m[2m   464.68 kB[22m[1m[22m
2025-08-03T07:37:38.863551Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[35mLayout.DSulWsr7.css                                              [39m[1m[2m     4.42 kB[22m[1m[22m[2m │ gzip:     1.43 kB[22m
2025-08-03T07:37:38.863704Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[35m_slug_.BtniRLn_.css                                              [39m[1m[2m     9.40 kB[22m[1m[22m[2m │ gzip:     4.94 kB[22m
2025-08-03T07:37:38.863931Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[35m_category_.dOoORm-i.css                                          [39m[1m[2m    12.18 kB[22m[1m[22m[2m │ gzip:     2.21 kB[22m
2025-08-03T07:37:38.864123Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[35mLayout.CFwGdNXj.css                                              [39m[1m[2m    13.82 kB[22m[1m[22m[2m │ gzip:     2.60 kB[22m
2025-08-03T07:37:38.864334Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[35mec.d1dr8.css                                                     [39m[1m[2m    19.55 kB[22m[1m[22m[2m │ gzip:     4.37 kB[22m
2025-08-03T07:37:38.864489Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[35m_category_.DETFcC6c.css                                          [39m[1m[2m   118.15 kB[22m[1m[22m[2m │ gzip:    33.41 kB[22m
2025-08-03T07:37:38.864654Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[35m_category_.N3ClDrXz.css                                          [39m[1m[2m   174.69 kB[22m[1m[22m[2m │ gzip:    27.43 kB[22m
2025-08-03T07:37:38.864826Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mdate-utils.Cz1_5Gjb.js                                           [39m[1m[2m     0.09 kB[22m[1m[22m[2m │ gzip:     0.10 kB[22m
2025-08-03T07:37:38.864995Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLayoutSwitcher.astro_astro_type_script_index_0_lang.KnN0sprn.js  [39m[1m[2m     0.10 kB[22m[1m[22m[2m │ gzip:     0.11 kB[22m
2025-08-03T07:37:38.865215Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLOGO.Ci6zvs1K.js                                                 [39m[1m[2m     0.10 kB[22m[1m[22m[2m │ gzip:     0.12 kB[22m
2025-08-03T07:37:38.865378Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mlogo1.CpLML_t1.js                                                [39m[1m[2m     0.10 kB[22m[1m[22m[2m │ gzip:     0.12 kB[22m
2025-08-03T07:37:38.865484Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mdemo-avatar.8a9Q8uQE.js                                          [39m[1m[2m     0.11 kB[22m[1m[22m[2m │ gzip:     0.12 kB[22m
2025-08-03T07:37:38.865651Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mconfig.DcgJ2Nqr.js                                               [39m[1m[2m     0.11 kB[22m[1m[22m[2m │ gzip:     0.11 kB[22m
2025-08-03T07:37:38.865799Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mtranslation.DCfSCUdZ.js                                          [39m[1m[2m     0.13 kB[22m[1m[22m[2m │ gzip:     0.13 kB[22m
2025-08-03T07:37:38.86602Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mconstants.Cicic_jr.js                                            [39m[1m[2m     0.16 kB[22m[1m[22m[2m │ gzip:     0.15 kB[22m
2025-08-03T07:37:38.866158Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mremark-excerpt.i8V8Ue6k.js                                       [39m[1m[2m     0.21 kB[22m[1m[22m[2m │ gzip:     0.18 kB[22m
2025-08-03T07:37:38.866266Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mrobots.txt.D8fq98Zy.js                                           [39m[1m[2m     0.22 kB[22m[1m[22m[2m │ gzip:     0.20 kB[22m
2025-08-03T07:37:38.866369Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mGlobalStyles.XHvvwUuN.js                                         [39m[1m[2m     0.27 kB[22m[1m[22m[2m │ gzip:     0.20 kB[22m
2025-08-03T07:37:38.866469Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mcontent.Dh3HKss_.js                                              [39m[1m[2m     0.32 kB[22m[1m[22m[2m │ gzip:     0.17 kB[22m
2025-08-03T07:37:38.866597Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mlink-presets.zkqONX3n.js                                         [39m[1m[2m     0.32 kB[22m[1m[22m[2m │ gzip:     0.23 kB[22m
2025-08-03T07:37:38.866714Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mArchivePanel.B4qIGLM6.js                                         [39m[1m[2m     0.34 kB[22m[1m[22m[2m │ gzip:     0.23 kB[22m
2025-08-03T07:37:38.866815Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLightDarkSwitch.Du3uMQDR.js                                      [39m[1m[2m     0.37 kB[22m[1m[22m[2m │ gzip:     0.24 kB[22m
2025-08-03T07:37:38.866935Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mclsx.B-dksMZM.js                                                 [39m[1m[2m     0.37 kB[22m[1m[22m[2m │ gzip:     0.24 kB[22m
2025-08-03T07:37:38.867041Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mscript.Ddket5BE.js                                               [39m[1m[2m     0.41 kB[22m[1m[22m[2m │ gzip:     0.27 kB[22m
2025-08-03T07:37:38.867162Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mSearch.6dbebVUr.js                                               [39m[1m[2m     0.43 kB[22m[1m[22m[2m │ gzip:     0.27 kB[22m
2025-08-03T07:37:38.867243Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mConfigCarrier.DaTjgfCI.js                                        [39m[1m[2m     0.44 kB[22m[1m[22m[2m │ gzip:     0.29 kB[22m
2025-08-03T07:37:38.867873Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mremark-reading-time.DUigA1A0.js                                  [39m[1m[2m     0.46 kB[22m[1m[22m[2m │ gzip:     0.31 kB[22m
2025-08-03T07:37:38.868056Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mrehype-component-admonition.DxpUQCK2.js                          [39m[1m[2m     0.46 kB[22m[1m[22m[2m │ gzip:     0.34 kB[22m
2025-08-03T07:37:38.86819Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36msitemap-index.xml.Dl-bMzch.js                                    [39m[1m[2m     0.48 kB[22m[1m[22m[2m │ gzip:     0.35 kB[22m
2025-08-03T07:37:38.868261Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mDisplaySettings.B-JrC38_.js                                      [39m[1m[2m     0.51 kB[22m[1m[22m[2m │ gzip:     0.30 kB[22m
2025-08-03T07:37:38.868327Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.C_aolqmU.js                                                [39m[1m[2m     0.51 kB[22m[1m[22m[2m │ gzip:     0.31 kB[22m
2025-08-03T07:37:38.868388Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m_category_.174bdc69.CR8piwjA.js                                  [39m[1m[2m     0.52 kB[22m[1m[22m[2m │ gzip:     0.15 kB[22m
2025-08-03T07:37:38.868456Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36micon.CFdKaOBg.js                                                 [39m[1m[2m     0.58 kB[22m[1m[22m[2m │ gzip:     0.19 kB[22m
2025-08-03T07:37:38.868522Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mi18nKey.B4fsdd7L.js                                              [39m[1m[2m     0.63 kB[22m[1m[22m[2m │ gzip:     0.29 kB[22m
2025-08-03T07:37:38.868589Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mzh_CN.Do71a4f-.js                                                [39m[1m[2m     0.68 kB[22m[1m[22m[2m │ gzip:     0.44 kB[22m
2025-08-03T07:37:38.868647Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36minput.D1I6NMu5.js                                                [39m[1m[2m     0.73 kB[22m[1m[22m[2m │ gzip:     0.42 kB[22m
2025-08-03T07:37:38.868717Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mcategory-slugs.DGgjCaPq.js                                       [39m[1m[2m     0.75 kB[22m[1m[22m[2m │ gzip:     0.50 kB[22m
2025-08-03T07:37:38.868797Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m___vite-browser-external_commonjs-proxy.ONCy0gsc.js              [39m[1m[2m     0.79 kB[22m[1m[22m[2m │ gzip:     0.43 kB[22m
2025-08-03T07:37:38.868869Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mMarkdown.CLn2SZAo.js                                             [39m[1m[2m     0.82 kB[22m[1m[22m[2m │ gzip:     0.44 kB[22m
2025-08-03T07:37:38.868934Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mconfig.CZVdjOEh.js                                               [39m[1m[2m     0.85 kB[22m[1m[22m[2m │ gzip:     0.50 kB[22m
2025-08-03T07:37:38.869Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mButtonTag.JFIGvUCX.js                                            [39m[1m[2m     0.87 kB[22m[1m[22m[2m │ gzip:     0.51 kB[22m
2025-08-03T07:37:38.869066Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36murl-utils.DA5f2zOr.js                                            [39m[1m[2m     0.91 kB[22m[1m[22m[2m │ gzip:     0.46 kB[22m
2025-08-03T07:37:38.869161Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mimage-mapping.BMq7laJl.js                                        [39m[1m[2m     0.98 kB[22m[1m[22m[2m │ gzip:     0.24 kB[22m
2025-08-03T07:37:38.869227Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m_...path_.DEfP5VJC.js                                            [39m[1m[2m     1.09 kB[22m[1m[22m[2m │ gzip:     0.61 kB[22m
2025-08-03T07:37:38.869286Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mSwupScriptsPlugin.CRD5-C2F.js                                    [39m[1m[2m     1.10 kB[22m[1m[22m[2m │ gzip:     0.61 kB[22m
2025-08-03T07:37:38.869344Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mcustom-navigation.4dDLIkbT.js                                    [39m[1m[2m     1.10 kB[22m[1m[22m[2m │ gzip:     0.69 kB[22m
2025-08-03T07:37:38.869402Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.astro_astro_type_script_index_0_lang.5HASSskQ.js           [39m[1m[2m     1.11 kB[22m[1m[22m[2m │ gzip:     0.68 kB[22m
2025-08-03T07:37:38.869459Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mpreload-helper.BlTxHScW.js                                       [39m[1m[2m     1.11 kB[22m[1m[22m[2m │ gzip:     0.65 kB[22m
2025-08-03T07:37:38.869516Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mstrapi-pages.CZ6zEntP.js                                         [39m[1m[2m     1.13 kB[22m[1m[22m[2m │ gzip:     0.57 kB[22m
2025-08-03T07:37:38.869584Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mclear.CHFy2GBC.js                                                [39m[1m[2m     1.16 kB[22m[1m[22m[2m │ gzip:     0.44 kB[22m
2025-08-03T07:37:38.869656Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mclient.svelte.DW5k7Kk9.js                                        [39m[1m[2m     1.16 kB[22m[1m[22m[2m │ gzip:     0.65 kB[22m
2025-08-03T07:37:38.869719Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mtheme-manager.CSlCCZLi.js                                        [39m[1m[2m     1.18 kB[22m[1m[22m[2m │ gzip:     0.50 kB[22m
2025-08-03T07:37:38.86978Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36merror-handler.lmhWzt6X.js                                        [39m[1m[2m     1.18 kB[22m[1m[22m[2m │ gzip:     0.61 kB[22m
2025-08-03T07:37:38.870019Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mPostPage.I5oZ5oSJ.js                                             [39m[1m[2m     1.28 kB[22m[1m[22m[2m │ gzip:     0.74 kB[22m
2025-08-03T07:37:38.870149Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36msitemap-categories.xml.DPecODei.js                               [39m[1m[2m     1.28 kB[22m[1m[22m[2m │ gzip:     0.70 kB[22m
2025-08-03T07:37:38.87031Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mlogger.BvQXyG3u.js                                               [39m[1m[2m     1.31 kB[22m[1m[22m[2m │ gzip:     0.66 kB[22m
2025-08-03T07:37:38.870435Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mStaticLogo.Da9c7uW-.js                                           [39m[1m[2m     1.32 kB[22m[1m[22m[2m │ gzip:     0.65 kB[22m
2025-08-03T07:37:38.870552Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36msitemap-posts.xml.BC8xaEWB.js                                    [39m[1m[2m     1.36 kB[22m[1m[22m[2m │ gzip:     0.73 kB[22m
2025-08-03T07:37:38.870661Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mlanguage-badge.DIldiI2h.js                                       [39m[1m[2m     1.36 kB[22m[1m[22m[2m │ gzip:     0.59 kB[22m
2025-08-03T07:37:38.870767Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mfont-loader.DCvLFrWk.js                                          [39m[1m[2m     1.36 kB[22m[1m[22m[2m │ gzip:     0.53 kB[22m
2025-08-03T07:37:38.870913Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36msetting-utils.CZvbBiY2.js                                        [39m[1m[2m     1.37 kB[22m[1m[22m[2m │ gzip:     0.65 kB[22m
2025-08-03T07:37:38.871051Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.1FB8_vAn.js                                                [39m[1m[2m     1.40 kB[22m[1m[22m[2m │ gzip:     0.55 kB[22m
2025-08-03T07:37:38.871187Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mdebug-strapi.vHhcRU46.js                                         [39m[1m[2m     1.43 kB[22m[1m[22m[2m │ gzip:     0.74 kB[22m
2025-08-03T07:37:38.871374Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mTags.D7liPp7U.js                                                 [39m[1m[2m     1.49 kB[22m[1m[22m[2m │ gzip:     0.83 kB[22m
2025-08-03T07:37:38.87157Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mrender.ClLWy2DR.js                                               [39m[1m[2m     1.55 kB[22m[1m[22m[2m │ gzip:     0.89 kB[22m
2025-08-03T07:37:38.871742Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mNavMenuPanel.C2YLkHCU.js                                         [39m[1m[2m     1.56 kB[22m[1m[22m[2m │ gzip:     0.84 kB[22m
2025-08-03T07:37:38.871941Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mResourceHints.Bovyk4IB.js                                        [39m[1m[2m     1.57 kB[22m[1m[22m[2m │ gzip:     0.86 kB[22m
2025-08-03T07:37:38.872135Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mBackToTop.CkNGTLWc.js                                            [39m[1m[2m     1.58 kB[22m[1m[22m[2m │ gzip:     0.71 kB[22m
2025-08-03T07:37:38.872299Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m_page_.p7Uh4FEd.js                                               [39m[1m[2m     1.60 kB[22m[1m[22m[2m │ gzip:     0.82 kB[22m
2025-08-03T07:37:38.87247Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mFooter.CogyHtSw.js                                               [39m[1m[2m     1.61 kB[22m[1m[22m[2m │ gzip:     0.89 kB[22m
2025-08-03T07:37:38.872635Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLayoutSwitcher.DFrSzlR2.js                                       [39m[1m[2m     1.66 kB[22m[1m[22m[2m │ gzip:     0.74 kB[22m
2025-08-03T07:37:38.872814Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mbanner-adapter.DM4sYW9Y.js                                       [39m[1m[2m     1.67 kB[22m[1m[22m[2m │ gzip:     0.83 kB[22m
2025-08-03T07:37:38.872972Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mapi.E1_LGI3W.js                                                  [39m[1m[2m     1.67 kB[22m[1m[22m[2m │ gzip:     0.96 kB[22m
2025-08-03T07:37:38.873158Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mCategories.CudLGlzx.js                                           [39m[1m[2m     1.68 kB[22m[1m[22m[2m │ gzip:     0.94 kB[22m
2025-08-03T07:37:38.873475Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mButtonLink.7oENu45C.js                                           [39m[1m[2m     1.69 kB[22m[1m[22m[2m │ gzip:     0.78 kB[22m
2025-08-03T07:37:38.873637Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mWidgetLayout.DlN9YMxB.js                                         [39m[1m[2m     1.70 kB[22m[1m[22m[2m │ gzip:     0.92 kB[22m
2025-08-03T07:37:38.873736Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mcache.BpiwiMQC.js                                                [39m[1m[2m     1.76 kB[22m[1m[22m[2m │ gzip:     0.81 kB[22m
2025-08-03T07:37:38.87381Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.modern.BC8Oj8jT.js                                         [39m[1m[2m     1.76 kB[22m[1m[22m[2m │ gzip:     0.91 kB[22m
2025-08-03T07:37:38.873874Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36merrors.DEmqdOpm.js                                               [39m[1m[2m     1.78 kB[22m[1m[22m[2m │ gzip:     0.95 kB[22m
2025-08-03T07:37:38.873934Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mSideBar.HRnlqdNP.js                                              [39m[1m[2m     1.78 kB[22m[1m[22m[2m │ gzip:     0.88 kB[22m
2025-08-03T07:37:38.873993Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mposts.json.CmtPp_GE.js                                           [39m[1m[2m     1.80 kB[22m[1m[22m[2m │ gzip:     0.99 kB[22m
2025-08-03T07:37:38.874051Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.CekZ371P.js                                                [39m[1m[2m     1.87 kB[22m[1m[22m[2m │ gzip:     0.99 kB[22m
2025-08-03T07:37:38.874145Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mpage.qK6kRvNr.js                                                 [39m[1m[2m     1.88 kB[22m[1m[22m[2m │ gzip:     0.97 kB[22m
2025-08-03T07:37:38.874213Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mcategory-preloader.Bggn22aH.js                                   [39m[1m[2m     1.95 kB[22m[1m[22m[2m │ gzip:     1.08 kB[22m
2025-08-03T07:37:38.87441Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36msharp.699y_5j4.js                                                [39m[1m[2m     1.97 kB[22m[1m[22m[2m │ gzip:     0.99 kB[22m
2025-08-03T07:37:38.874664Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLicense.CSKU2LGQ.js                                              [39m[1m[2m     1.99 kB[22m[1m[22m[2m │ gzip:     0.94 kB[22m
2025-08-03T07:37:38.875599Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36marticle-sorter.jMG7wuMc.js                                       [39m[1m[2m     2.04 kB[22m[1m[22m[2m │ gzip:     0.86 kB[22m
2025-08-03T07:37:38.875722Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mcustom-copy-button.DkCHtLPX.js                                   [39m[1m[2m     2.06 kB[22m[1m[22m[2m │ gzip:     0.89 kB[22m
2025-08-03T07:37:38.875835Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mResponsiveImage.D-g9CzZq.js                                      [39m[1m[2m     2.07 kB[22m[1m[22m[2m │ gzip:     1.11 kB[22m
2025-08-03T07:37:38.875969Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36marchive.BhQ_JLVZ.js                                              [39m[1m[2m     2.10 kB[22m[1m[22m[2m │ gzip:     1.05 kB[22m
2025-08-03T07:37:38.876082Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mFontPreloader.F2NixAJl.js                                        [39m[1m[2m     2.11 kB[22m[1m[22m[2m │ gzip:     1.01 kB[22m
2025-08-03T07:37:38.876211Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mfast-category-loader.i86rX37H.js                                 [39m[1m[2m     2.11 kB[22m[1m[22m[2m │ gzip:     1.08 kB[22m
2025-08-03T07:37:38.876414Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mconfig-integration.y6B_LWZW.js                                   [39m[1m[2m     2.14 kB[22m[1m[22m[2m │ gzip:     0.98 kB[22m
2025-08-03T07:37:38.876551Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mhealth.D4u9vEh1.js                                               [39m[1m[2m     2.15 kB[22m[1m[22m[2m │ gzip:     0.95 kB[22m
2025-08-03T07:37:38.876625Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mProfile.Dy9mDYuZ.js                                              [39m[1m[2m     2.17 kB[22m[1m[22m[2m │ gzip:     1.02 kB[22m
2025-08-03T07:37:38.876697Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mremark-directive-rehype.xTvRW7wt.js                              [39m[1m[2m     2.25 kB[22m[1m[22m[2m │ gzip:     1.03 kB[22m
2025-08-03T07:37:38.876813Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mPagination.DRsaIgQT.js                                           [39m[1m[2m     2.29 kB[22m[1m[22m[2m │ gzip:     1.08 kB[22m
2025-08-03T07:37:38.876906Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mFriendLinks.XmgucYSs.js                                          [39m[1m[2m     2.30 kB[22m[1m[22m[2m │ gzip:     1.28 kB[22m
2025-08-03T07:37:38.877006Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mstrapi-content-utils.vZvUK8XT.js                                 [39m[1m[2m     2.34 kB[22m[1m[22m[2m │ gzip:     0.80 kB[22m
2025-08-03T07:37:38.87717Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mtest-image.D-5OMsRJ.js                                           [39m[1m[2m     2.36 kB[22m[1m[22m[2m │ gzip:     0.89 kB[22m
2025-08-03T07:37:38.877284Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mResponsiveImage.DUCK33Ec.js                                      [39m[1m[2m     2.37 kB[22m[1m[22m[2m │ gzip:     1.23 kB[22m
2025-08-03T07:37:38.877376Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mDisplaySettings.CkSW4-lY.js                                      [39m[1m[2m     2.37 kB[22m[1m[22m[2m │ gzip:     1.27 kB[22m
2025-08-03T07:37:38.877548Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLoadingSpinner.DN6ATiPR.js                                       [39m[1m[2m     2.42 kB[22m[1m[22m[2m │ gzip:     1.07 kB[22m
2025-08-03T07:37:38.877673Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mSwupHeadPlugin.d6nb3Z__.js                                       [39m[1m[2m     2.57 kB[22m[1m[22m[2m │ gzip:     1.28 kB[22m
2025-08-03T07:37:38.877778Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mhtml-optimizer.BVKvSiHY.js                                       [39m[1m[2m     2.58 kB[22m[1m[22m[2m │ gzip:     1.24 kB[22m
2025-08-03T07:37:38.877887Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mSEOHead.DyySbKzV.js                                              [39m[1m[2m     2.61 kB[22m[1m[22m[2m │ gzip:     1.21 kB[22m
2025-08-03T07:37:38.877988Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mPostMeta.BQLdt62P.js                                             [39m[1m[2m     2.63 kB[22m[1m[22m[2m │ gzip:     1.09 kB[22m
2025-08-03T07:37:38.878121Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mlazy-loader.D7RMx9hW.js                                          [39m[1m[2m     2.65 kB[22m[1m[22m[2m │ gzip:     1.10 kB[22m
2025-08-03T07:37:38.878296Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mrehype-component-github-card.ejwH5wqk.js                         [39m[1m[2m     2.65 kB[22m[1m[22m[2m │ gzip:     1.11 kB[22m
2025-08-03T07:37:38.878374Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m_category_.adee8cd9.B6fbbmUh.js                                  [39m[1m[2m     2.72 kB[22m[1m[22m[2m │ gzip:     0.28 kB[22m
2025-08-03T07:37:38.878503Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLightDarkSwitch.CozkqRAS.js                                      [39m[1m[2m     2.72 kB[22m[1m[22m[2m │ gzip:     1.39 kB[22m
2025-08-03T07:37:38.878697Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mseo-optimizer.DeaQUN75.js                                        [39m[1m[2m     2.81 kB[22m[1m[22m[2m │ gzip:     1.51 kB[22m
2025-08-03T07:37:38.878787Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m_slug_.DviUYBhy.js                                               [39m[1m[2m     3.02 kB[22m[1m[22m[2m │ gzip:     1.57 kB[22m
2025-08-03T07:37:38.878849Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mcontent-manager.kmoELEfq.js                                      [39m[1m[2m     3.11 kB[22m[1m[22m[2m │ gzip:     1.28 kB[22m
2025-08-03T07:37:38.879002Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mDynamicProfile.CG1xDcyy.js                                       [39m[1m[2m     3.16 kB[22m[1m[22m[2m │ gzip:     1.53 kB[22m
2025-08-03T07:37:38.879138Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36msearch.BaClmFmW.js                                               [39m[1m[2m     3.18 kB[22m[1m[22m[2m │ gzip:     1.66 kB[22m
2025-08-03T07:37:38.879393Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mstrapi-adapter.Cc1hmUGQ.js                                       [39m[1m[2m     3.24 kB[22m[1m[22m[2m │ gzip:     1.47 kB[22m
2025-08-03T07:37:38.879482Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36msearch.CaoQkrUh.js                                               [39m[1m[2m     3.47 kB[22m[1m[22m[2m │ gzip:     1.74 kB[22m
2025-08-03T07:37:38.879658Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mabout.CNRSo60B.js                                                [39m[1m[2m     3.48 kB[22m[1m[22m[2m │ gzip:     2.13 kB[22m
2025-08-03T07:37:38.87975Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mbundle-optimizer.Cu0Ul67M.js                                     [39m[1m[2m     3.49 kB[22m[1m[22m[2m │ gzip:     1.53 kB[22m
2025-08-03T07:37:38.879847Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36meach.Czejncrg.js                                                 [39m[1m[2m     3.75 kB[22m[1m[22m[2m │ gzip:     1.88 kB[22m
2025-08-03T07:37:38.879968Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mArchivePanel.Y-VIXJJ2.js                                         [39m[1m[2m     3.79 kB[22m[1m[22m[2m │ gzip:     1.69 kB[22m
2025-08-03T07:37:38.880138Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mErrorBoundary.D7IYSxU-.js                                        [39m[1m[2m     4.02 kB[22m[1m[22m[2m │ gzip:     1.81 kB[22m
2025-08-03T07:37:38.880254Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.BI8Lce-g.js                                                [39m[1m[2m     4.04 kB[22m[1m[22m[2m │ gzip:     2.12 kB[22m
2025-08-03T07:37:38.880364Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mBannerCarousel.JEX3ae2N.js                                       [39m[1m[2m     4.09 kB[22m[1m[22m[2m │ gzip:     1.45 kB[22m
2025-08-03T07:37:38.880605Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLayout.astro_astro_type_script_index_1_lang.DNNjKhTd.js          [39m[1m[2m     4.10 kB[22m[1m[22m[2m │ gzip:     1.45 kB[22m
2025-08-03T07:37:38.880686Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mNavbar.1SaZnHDY.js                                               [39m[1m[2m     4.20 kB[22m[1m[22m[2m │ gzip:     1.97 kB[22m
2025-08-03T07:37:38.88082Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mBannerCarousel.astro_astro_type_script_index_0_lang.DYjBHZ6m.js  [39m[1m[2m     4.27 kB[22m[1m[22m[2m │ gzip:     1.26 kB[22m
2025-08-03T07:37:38.880958Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36munified-data-fetcher.kdxE7-HP.js                                 [39m[1m[2m     4.42 kB[22m[1m[22m[2m │ gzip:     1.85 kB[22m
2025-08-03T07:37:38.881133Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mPostCard.M9Zs7S3Z.js                                             [39m[1m[2m     4.61 kB[22m[1m[22m[2m │ gzip:     1.97 kB[22m
2025-08-03T07:37:38.881298Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mMainGridLayout.ztLe0KCX.js                                       [39m[1m[2m     4.63 kB[22m[1m[22m[2m │ gzip:     2.09 kB[22m
2025-08-03T07:37:38.881491Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mUniversalPostList.ByHSfMwu.js                                    [39m[1m[2m     4.74 kB[22m[1m[22m[2m │ gzip:     2.21 kB[22m
2025-08-03T07:37:38.881626Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m404.V7d2Xsi8.js                                                  [39m[1m[2m     4.81 kB[22m[1m[22m[2m │ gzip:     2.22 kB[22m
2025-08-03T07:37:38.881734Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mSwupA11yPlugin.CD1FIEJN.js                                       [39m[1m[2m     5.24 kB[22m[1m[22m[2m │ gzip:     2.12 kB[22m
2025-08-03T07:37:38.881946Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mstrapi.CHL8-_rj.js                                               [39m[1m[2m     5.37 kB[22m[1m[22m[2m │ gzip:     2.05 kB[22m
2025-08-03T07:37:38.88211Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36msearch.astro_astro_type_script_index_0_lang.DntKHN2e.js          [39m[1m[2m     5.45 kB[22m[1m[22m[2m │ gzip:     2.35 kB[22m
2025-08-03T07:37:38.882233Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mhybrid-content-utils.CEhlwF3Z.js                                 [39m[1m[2m     5.55 kB[22m[1m[22m[2m │ gzip:     2.07 kB[22m
2025-08-03T07:37:38.882491Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mmodule-manager.DVC0Wdm7.js                                       [39m[1m[2m     5.75 kB[22m[1m[22m[2m │ gzip:     2.11 kB[22m
2025-08-03T07:37:38.882663Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mMainGridLayout.astro_astro_type_script_index_0_lang.X2QOXYuy.js  [39m[1m[2m     6.18 kB[22m[1m[22m[2m │ gzip:     1.75 kB[22m
2025-08-03T07:37:38.882755Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mbanners.KTjJ9sOj.js                                              [39m[1m[2m     6.46 kB[22m[1m[22m[2m │ gzip:     1.97 kB[22m
2025-08-03T07:37:38.882871Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLayout.D3Qj65ZE.js                                               [39m[1m[2m     6.74 kB[22m[1m[22m[2m │ gzip:     3.02 kB[22m
2025-08-03T07:37:38.883012Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mtags.Cj2tFSy6.js                                                 [39m[1m[2m     6.78 kB[22m[1m[22m[2m │ gzip:     2.51 kB[22m
2025-08-03T07:37:38.883156Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mdebug-images.Cz9PEn94.js                                         [39m[1m[2m     7.66 kB[22m[1m[22m[2m │ gzip:     2.36 kB[22m
2025-08-03T07:37:38.883272Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mfriends.CLsxOQLc.js                                              [39m[1m[2m     7.82 kB[22m[1m[22m[2m │ gzip:     3.34 kB[22m
2025-08-03T07:37:38.88336Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mMobileNavigation.CFC_BFBe.js                                     [39m[1m[2m     7.91 kB[22m[1m[22m[2m │ gzip:     3.01 kB[22m
2025-08-03T07:37:38.883454Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mlayout-switcher.Sk3BRS4h.js                                      [39m[1m[2m     8.09 kB[22m[1m[22m[2m │ gzip:     2.10 kB[22m
2025-08-03T07:37:38.883556Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mprops.Cr6z4CVY.js                                                [39m[1m[2m     8.68 kB[22m[1m[22m[2m │ gzip:     4.01 kB[22m
2025-08-03T07:37:38.883666Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m_category_.CJ2g37L-.js                                           [39m[1m[2m     9.32 kB[22m[1m[22m[2m │ gzip:     3.84 kB[22m
2025-08-03T07:37:38.883745Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36m_...slug_.D1S2IVAJ.js                                            [39m[1m[2m     9.41 kB[22m[1m[22m[2m │ gzip:     4.04 kB[22m
2025-08-03T07:37:38.88381Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mSearch.C2R4jfZl.js                                               [39m[1m[2m    13.12 kB[22m[1m[22m[2m │ gzip:     4.61 kB[22m
2025-08-03T07:37:38.883868Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mLayout.astro_astro_type_script_index_0_lang.DAHrxWCB.js          [39m[1m[2m    16.69 kB[22m[1m[22m[2m │ gzip:     5.41 kB[22m
2025-08-03T07:37:38.883926Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mIcon.jM7pJ1UY.js                                                 [39m[1m[2m    20.42 kB[22m[1m[22m[2m │ gzip:     8.24 kB[22m
2025-08-03T07:37:38.883999Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.B44HtDPe.js                                                [39m[1m[2m    20.84 kB[22m[1m[22m[2m │ gzip:     7.18 kB[22m
2025-08-03T07:37:38.884104Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mSwup.BJsODpJG.js                                                 [39m[1m[2m    21.60 kB[22m[1m[22m[2m │ gzip:     7.40 kB[22m
2025-08-03T07:37:38.884211Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mutils.2JfKnrUw.js                                                [39m[1m[2m    23.37 kB[22m[1m[22m[2m │ gzip:     9.45 kB[22m
2025-08-03T07:37:38.884313Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mREADME-BannerCarousel._uHr9Wcz.js                                [39m[1m[2m    42.39 kB[22m[1m[22m[2m │ gzip:     5.59 kB[22m
2025-08-03T07:37:38.884424Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mpostcss.CvletBqX.js                                              [39m[1m[2m    51.69 kB[22m[1m[22m[2m │ gzip:    16.96 kB[22m
2025-08-03T07:37:38.884536Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mphotoswipe.esm.CKV1Bsxh.js                                       [39m[1m[2m    60.41 kB[22m[1m[22m[2m │ gzip:    17.48 kB[22m
2025-08-03T07:37:38.884609Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mImageWrapper.CrIQTj60.js                                         [39m[1m[2m    72.83 kB[22m[1m[22m[2m │ gzip:    23.39 kB[22m
2025-08-03T07:37:38.884718Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mtransition.uUFCmrj5.js                                           [39m[1m[2m    88.30 kB[22m[1m[22m[2m │ gzip:    25.39 kB[22m
2025-08-03T07:37:38.884808Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.D5gZa4y5.js                                                [39m[1m[2m   103.88 kB[22m[1m[22m[2m │ gzip:    29.11 kB[22m
2025-08-03T07:37:38.884894Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mindex.BvuBr0lR.js                                                [39m[1m[2m   105.86 kB[22m[1m[22m[2m │ gzip:    31.34 kB[22m
2025-08-03T07:37:38.88497Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mrss.xml.D__w5JV8.js                                              [39m[1m[2m   272.64 kB[22m[1m[22m[2m │ gzip:   107.70 kB[22m
2025-08-03T07:37:38.885028Z	07:37:38 [vite] [2mdist/client/[22m[2m_astro/[22m[36mIcon.Czr9rs7X.js                                                 [39m[1m[33m12,373.17 kB[39m[22m[2m │ gzip: 2,303.93 kB[22m
2025-08-03T07:37:38.885102Z	07:37:38 [WARN] [vite] [33m
2025-08-03T07:37:38.885226Z	(!) Some chunks are larger than 500 kB after minification. Consider:
2025-08-03T07:37:38.885332Z	- Using dynamic import() to code-split the application
2025-08-03T07:37:38.885484Z	- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
2025-08-03T07:37:38.885646Z	- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
2025-08-03T07:37:38.885758Z	07:37:38 [vite] [32m✓ built in 7.49s[39m
2025-08-03T07:37:38.889362Z	
2025-08-03T07:37:38.889547Z	 prerendering static routes 
2025-08-03T07:37:39.043491Z	07:37:39 ▶ src/pages/404.astro
2025-08-03T07:37:40.075331Z	07:37:39   └─ /404.html🏷️ Index Settings: {
2025-08-03T07:37:40.075622Z	  data: {
2025-08-03T07:37:40.075724Z	    id: 1,
2025-08-03T07:37:40.075922Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:40.076263Z	    site_title: 'SparkDone',
2025-08-03T07:37:40.076387Z	    site_subtitle: 'Power',
2025-08-03T07:37:40.076458Z	    site_description: null,
2025-08-03T07:37:40.07656Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:40.076731Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:40.076897Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:40.077028Z	    show_author_section: false,
2025-08-03T07:37:40.077196Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:40.077305Z	    enable_home_banner: true,
2025-08-03T07:37:40.077403Z	    logo_light: {
2025-08-03T07:37:40.077519Z	      id: 5,
2025-08-03T07:37:40.077628Z	      name: 'logo1.png',
2025-08-03T07:37:40.077724Z	      alternativeText: null,
2025-08-03T07:37:40.07782Z	      caption: null,
2025-08-03T07:37:40.077911Z	      width: 3401,
2025-08-03T07:37:40.078006Z	      height: 697,
2025-08-03T07:37:40.07815Z	      formats: [Object],
2025-08-03T07:37:40.078258Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:40.078401Z	      ext: '.png',
2025-08-03T07:37:40.078511Z	      mime: 'image/png',
2025-08-03T07:37:40.078683Z	      size: 129.52,
2025-08-03T07:37:40.078803Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:40.078916Z	      previewUrl: null,
2025-08-03T07:37:40.079066Z	      provider: 'local',
2025-08-03T07:37:40.079197Z	      provider_metadata: null,
2025-08-03T07:37:40.079313Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:40.079418Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:40.079516Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:40.079625Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:40.079701Z	    },
2025-08-03T07:37:40.07976Z	    logo_dark: {
2025-08-03T07:37:40.079962Z	      id: 6,
2025-08-03T07:37:40.080037Z	      name: 'LOGO.png',
2025-08-03T07:37:40.080179Z	      alternativeText: null,
2025-08-03T07:37:40.080415Z	      caption: null,
2025-08-03T07:37:40.080519Z	      width: 3401,
2025-08-03T07:37:40.080594Z	      height: 697,
2025-08-03T07:37:40.08068Z	      formats: [Object],
2025-08-03T07:37:40.080759Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:40.080831Z	      ext: '.png',
2025-08-03T07:37:40.080894Z	      mime: 'image/png',
2025-08-03T07:37:40.080953Z	      size: 162.14,
2025-08-03T07:37:40.081013Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:40.081073Z	      previewUrl: null,
2025-08-03T07:37:40.081163Z	      provider: 'local',
2025-08-03T07:37:40.081233Z	      provider_metadata: null,
2025-08-03T07:37:40.081309Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:40.081376Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:40.081437Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:40.081502Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:40.081567Z	    },
2025-08-03T07:37:40.081635Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:40.081711Z	  },
2025-08-03T07:37:40.081788Z	  meta: {}
2025-08-03T07:37:40.081864Z	}
2025-08-03T07:37:40.081931Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:40.279909Z	 (+1.24s) 
2025-08-03T07:37:40.281762Z	07:37:40 ▶ src/pages/about.astro
2025-08-03T07:37:40.988873Z	07:37:40   └─ /about/index.html🏷️ Index Settings: {
2025-08-03T07:37:40.98916Z	  data: {
2025-08-03T07:37:40.9893Z	    id: 1,
2025-08-03T07:37:40.989409Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:40.989514Z	    site_title: 'SparkDone',
2025-08-03T07:37:40.989653Z	    site_subtitle: 'Power',
2025-08-03T07:37:40.989753Z	    site_description: null,
2025-08-03T07:37:40.989867Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:40.989975Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:40.99008Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:40.990209Z	    show_author_section: false,
2025-08-03T07:37:40.990324Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:40.990399Z	    enable_home_banner: true,
2025-08-03T07:37:40.990495Z	    logo_light: {
2025-08-03T07:37:40.99058Z	      id: 5,
2025-08-03T07:37:40.990642Z	      name: 'logo1.png',
2025-08-03T07:37:40.990708Z	      alternativeText: null,
2025-08-03T07:37:40.990778Z	      caption: null,
2025-08-03T07:37:40.990867Z	      width: 3401,
2025-08-03T07:37:40.990933Z	      height: 697,
2025-08-03T07:37:40.990996Z	      formats: [Object],
2025-08-03T07:37:40.991051Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:40.991126Z	      ext: '.png',
2025-08-03T07:37:40.991188Z	      mime: 'image/png',
2025-08-03T07:37:40.99125Z	      size: 129.52,
2025-08-03T07:37:40.991312Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:40.991375Z	      previewUrl: null,
2025-08-03T07:37:40.991438Z	      provider: 'local',
2025-08-03T07:37:40.991498Z	      provider_metadata: null,
2025-08-03T07:37:40.991566Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:40.991633Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:40.991689Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:40.991748Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:40.991815Z	    },
2025-08-03T07:37:40.991876Z	    logo_dark: {
2025-08-03T07:37:40.991931Z	      id: 6,
2025-08-03T07:37:40.991985Z	      name: 'LOGO.png',
2025-08-03T07:37:40.99204Z	      alternativeText: null,
2025-08-03T07:37:40.992112Z	      caption: null,
2025-08-03T07:37:40.992176Z	      width: 3401,
2025-08-03T07:37:40.992244Z	      height: 697,
2025-08-03T07:37:40.992307Z	      formats: [Object],
2025-08-03T07:37:40.992363Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:40.992424Z	      ext: '.png',
2025-08-03T07:37:40.992481Z	      mime: 'image/png',
2025-08-03T07:37:40.99254Z	      size: 162.14,
2025-08-03T07:37:40.992604Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:40.992683Z	      previewUrl: null,
2025-08-03T07:37:40.992745Z	      provider: 'local',
2025-08-03T07:37:40.992805Z	      provider_metadata: null,
2025-08-03T07:37:40.992861Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:40.992915Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:40.992968Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:40.99302Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:40.993077Z	    },
2025-08-03T07:37:40.993149Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:40.993206Z	  },
2025-08-03T07:37:40.99326Z	  meta: {}
2025-08-03T07:37:40.993314Z	}
2025-08-03T07:37:40.993374Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:41.094965Z	 (+813ms) 
2025-08-03T07:37:41.0968Z	07:37:41 ▶ src/pages/archive.astro
2025-08-03T07:37:41.367164Z	07:37:41   └─ /archive/index.html🏷️ Index Settings: {
2025-08-03T07:37:41.367409Z	  data: {
2025-08-03T07:37:41.367667Z	    id: 1,
2025-08-03T07:37:41.367828Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:41.36791Z	    site_title: 'SparkDone',
2025-08-03T07:37:41.36797Z	    site_subtitle: 'Power',
2025-08-03T07:37:41.36803Z	    site_description: null,
2025-08-03T07:37:41.368102Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:41.368177Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:41.368238Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:41.368302Z	    show_author_section: false,
2025-08-03T07:37:41.368361Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:41.36842Z	    enable_home_banner: true,
2025-08-03T07:37:41.368474Z	    logo_light: {
2025-08-03T07:37:41.368536Z	      id: 5,
2025-08-03T07:37:41.368599Z	      name: 'logo1.png',
2025-08-03T07:37:41.368656Z	      alternativeText: null,
2025-08-03T07:37:41.368718Z	      caption: null,
2025-08-03T07:37:41.368785Z	      width: 3401,
2025-08-03T07:37:41.368843Z	      height: 697,
2025-08-03T07:37:41.368899Z	      formats: [Object],
2025-08-03T07:37:41.368955Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:41.369017Z	      ext: '.png',
2025-08-03T07:37:41.36908Z	      mime: 'image/png',
2025-08-03T07:37:41.369159Z	      size: 129.52,
2025-08-03T07:37:41.369222Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:41.369284Z	      previewUrl: null,
2025-08-03T07:37:41.369351Z	      provider: 'local',
2025-08-03T07:37:41.369413Z	      provider_metadata: null,
2025-08-03T07:37:41.369476Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:41.369566Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:41.369628Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:41.369687Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:41.369743Z	    },
2025-08-03T07:37:41.369818Z	    logo_dark: {
2025-08-03T07:37:41.369888Z	      id: 6,
2025-08-03T07:37:41.369953Z	      name: 'LOGO.png',
2025-08-03T07:37:41.370011Z	      alternativeText: null,
2025-08-03T07:37:41.370082Z	      caption: null,
2025-08-03T07:37:41.370162Z	      width: 3401,
2025-08-03T07:37:41.370227Z	      height: 697,
2025-08-03T07:37:41.370285Z	      formats: [Object],
2025-08-03T07:37:41.370353Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:41.370415Z	      ext: '.png',
2025-08-03T07:37:41.37047Z	      mime: 'image/png',
2025-08-03T07:37:41.370547Z	      size: 162.14,
2025-08-03T07:37:41.370622Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:41.37068Z	      previewUrl: null,
2025-08-03T07:37:41.370745Z	      provider: 'local',
2025-08-03T07:37:41.370804Z	      provider_metadata: null,
2025-08-03T07:37:41.370861Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:41.370918Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:41.370982Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:41.37104Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:41.371123Z	    },
2025-08-03T07:37:41.371189Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:41.371244Z	  },
2025-08-03T07:37:41.371306Z	  meta: {}
2025-08-03T07:37:41.371363Z	}
2025-08-03T07:37:41.371428Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:41.48538Z	 (+389ms) 
2025-08-03T07:37:41.490708Z	07:37:41 ▶ src/pages/categories/[category].astro
2025-08-03T07:37:41.491082Z	🏗️ 生产模式：开始生成分类页面静态路径...
2025-08-03T07:37:41.49151Z	🏗️ 找到 3 个分类（包括没有文章的分类）: [ 'Github项目(0篇)', '网赚项目(0篇)', '资源共享(0篇)' ]
2025-08-03T07:37:41.491671Z	🔗 分类路径映射: "Github项目" -> "Github项目" (0篇文章)
2025-08-03T07:37:41.491878Z	🔗 分类路径映射: "网赚项目" -> "网赚项目" (0篇文章)
2025-08-03T07:37:41.491963Z	🔗 分类路径映射: "资源共享" -> "资源共享" (0篇文章)
2025-08-03T07:37:41.492034Z	🏗️ 将生成 3 个静态分类页面（包括 3 个空分类）
2025-08-03T07:37:41.493478Z	07:37:41   ├─ /categories/Github项目/index.html🏗️ 分类页面：强制静态预渲染模式
2025-08-03T07:37:41.574837Z	🔍 getCategoryByName 被调用，name: Github项目
2025-08-03T07:37:41.575108Z	📡 请求URL: /categories?filters[name][$eq]=Github%E9%A1%B9%E7%9B%AE
2025-08-03T07:37:41.614483Z	✅ getCategoryByName 响应: {
2025-08-03T07:37:41.614813Z	  data: [
2025-08-03T07:37:41.614985Z	    {
2025-08-03T07:37:41.615147Z	      id: 85,
2025-08-03T07:37:41.615267Z	      name: 'Github项目',
2025-08-03T07:37:41.615377Z	      slug: 'github-projects',
2025-08-03T07:37:41.615481Z	      description: null,
2025-08-03T07:37:41.615591Z	      color: null,
2025-08-03T07:37:41.615734Z	      icon: null,
2025-08-03T07:37:41.615867Z	      sortOrder: 7,
2025-08-03T07:37:41.615983Z	      createdAt: '2025-07-13T04:22:11.457Z',
2025-08-03T07:37:41.616114Z	      updatedAt: '2025-08-03T03:46:11.780Z',
2025-08-03T07:37:41.616244Z	      publishedAt: '2025-08-03T03:46:11.861Z',
2025-08-03T07:37:41.616355Z	      documentId: 'y829o6ymtkviqiv9o5zolcgf',
2025-08-03T07:37:41.616466Z	      layout_type: 'grid',
2025-08-03T07:37:41.616583Z	      enable_banner: false
2025-08-03T07:37:41.616694Z	    }
2025-08-03T07:37:41.616813Z	  ],
2025-08-03T07:37:41.616948Z	  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } }
2025-08-03T07:37:41.617106Z	}
2025-08-03T07:37:41.874444Z	🏷️ Index Settings: {
2025-08-03T07:37:41.874733Z	  data: {
2025-08-03T07:37:41.874826Z	    id: 1,
2025-08-03T07:37:41.874892Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:41.87498Z	    site_title: 'SparkDone',
2025-08-03T07:37:41.875108Z	    site_subtitle: 'Power',
2025-08-03T07:37:41.875229Z	    site_description: null,
2025-08-03T07:37:41.875333Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:41.875433Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:41.87553Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:41.875603Z	    show_author_section: false,
2025-08-03T07:37:41.875669Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:41.875734Z	    enable_home_banner: true,
2025-08-03T07:37:41.875791Z	    logo_light: {
2025-08-03T07:37:41.875844Z	      id: 5,
2025-08-03T07:37:41.876065Z	      name: 'logo1.png',
2025-08-03T07:37:41.876203Z	      alternativeText: null,
2025-08-03T07:37:41.876405Z	      caption: null,
2025-08-03T07:37:41.876515Z	      width: 3401,
2025-08-03T07:37:41.876604Z	      height: 697,
2025-08-03T07:37:41.876671Z	      formats: [Object],
2025-08-03T07:37:41.876743Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:41.876808Z	      ext: '.png',
2025-08-03T07:37:41.876864Z	      mime: 'image/png',
2025-08-03T07:37:41.876929Z	      size: 129.52,
2025-08-03T07:37:41.876989Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:41.877052Z	      previewUrl: null,
2025-08-03T07:37:41.877143Z	      provider: 'local',
2025-08-03T07:37:41.877207Z	      provider_metadata: null,
2025-08-03T07:37:41.877271Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:41.877384Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:41.877463Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:41.877523Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:41.877584Z	    },
2025-08-03T07:37:41.877649Z	    logo_dark: {
2025-08-03T07:37:41.877713Z	      id: 6,
2025-08-03T07:37:41.877783Z	      name: 'LOGO.png',
2025-08-03T07:37:41.877843Z	      alternativeText: null,
2025-08-03T07:37:41.877918Z	      caption: null,
2025-08-03T07:37:41.877989Z	      width: 3401,
2025-08-03T07:37:41.878052Z	      height: 697,
2025-08-03T07:37:41.878162Z	      formats: [Object],
2025-08-03T07:37:41.878257Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:41.87832Z	      ext: '.png',
2025-08-03T07:37:41.878383Z	      mime: 'image/png',
2025-08-03T07:37:41.878451Z	      size: 162.14,
2025-08-03T07:37:41.87851Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:41.878574Z	      previewUrl: null,
2025-08-03T07:37:41.878633Z	      provider: 'local',
2025-08-03T07:37:41.878696Z	      provider_metadata: null,
2025-08-03T07:37:41.878759Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:41.878819Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:41.878882Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:41.878947Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:41.87901Z	    },
2025-08-03T07:37:41.87907Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:41.879147Z	  },
2025-08-03T07:37:41.879216Z	  meta: {}
2025-08-03T07:37:41.87928Z	}
2025-08-03T07:37:41.879352Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:41.98722Z	 (+495ms) 
2025-08-03T07:37:41.98799Z	07:37:41   ├─ /categories/网赚项目/index.html🏗️ 分类页面：强制静态预渲染模式
2025-08-03T07:37:42.070098Z	🔍 getCategoryByName 被调用，name: 网赚项目
2025-08-03T07:37:42.070382Z	📡 请求URL: /categories?filters[name][$eq]=%E7%BD%91%E8%B5%9A%E9%A1%B9%E7%9B%AE
2025-08-03T07:37:42.108308Z	✅ getCategoryByName 响应: {
2025-08-03T07:37:42.108585Z	  data: [
2025-08-03T07:37:42.10873Z	    {
2025-08-03T07:37:42.108829Z	      id: 50,
2025-08-03T07:37:42.108919Z	      name: '网赚项目',
2025-08-03T07:37:42.109029Z	      slug: 'moneyonline',
2025-08-03T07:37:42.109123Z	      description: null,
2025-08-03T07:37:42.109221Z	      color: null,
2025-08-03T07:37:42.109313Z	      icon: 'icon-park-outline:arrow-right-up',
2025-08-03T07:37:42.109421Z	      sortOrder: 1,
2025-08-03T07:37:42.10952Z	      createdAt: '2025-07-13T04:22:35.514Z',
2025-08-03T07:37:42.109602Z	      updatedAt: '2025-07-24T12:35:03.551Z',
2025-08-03T07:37:42.109667Z	      publishedAt: '2025-07-24T12:35:03.563Z',
2025-08-03T07:37:42.110059Z	      documentId: 'krdf2bmnf13ipmgzcfws4ji0',
2025-08-03T07:37:42.110369Z	      layout_type: 'masonry',
2025-08-03T07:37:42.11062Z	      enable_banner: null
2025-08-03T07:37:42.110725Z	    }
2025-08-03T07:37:42.11079Z	  ],
2025-08-03T07:37:42.110861Z	  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } }
2025-08-03T07:37:42.110991Z	}
2025-08-03T07:37:42.302024Z	🏷️ Index Settings: {
2025-08-03T07:37:42.302285Z	  data: {
2025-08-03T07:37:42.302374Z	    id: 1,
2025-08-03T07:37:42.302435Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:42.302493Z	    site_title: 'SparkDone',
2025-08-03T07:37:42.302568Z	    site_subtitle: 'Power',
2025-08-03T07:37:42.302636Z	    site_description: null,
2025-08-03T07:37:42.302719Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:42.302803Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:42.302866Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:42.302922Z	    show_author_section: false,
2025-08-03T07:37:42.302985Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:42.303049Z	    enable_home_banner: true,
2025-08-03T07:37:42.303123Z	    logo_light: {
2025-08-03T07:37:42.303181Z	      id: 5,
2025-08-03T07:37:42.303238Z	      name: 'logo1.png',
2025-08-03T07:37:42.3033Z	      alternativeText: null,
2025-08-03T07:37:42.303367Z	      caption: null,
2025-08-03T07:37:42.303431Z	      width: 3401,
2025-08-03T07:37:42.303486Z	      height: 697,
2025-08-03T07:37:42.303545Z	      formats: [Object],
2025-08-03T07:37:42.303606Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:42.303661Z	      ext: '.png',
2025-08-03T07:37:42.303738Z	      mime: 'image/png',
2025-08-03T07:37:42.303812Z	      size: 129.52,
2025-08-03T07:37:42.303869Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:42.303925Z	      previewUrl: null,
2025-08-03T07:37:42.303988Z	      provider: 'local',
2025-08-03T07:37:42.304053Z	      provider_metadata: null,
2025-08-03T07:37:42.304124Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:42.304188Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:42.304253Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:42.304324Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:42.304379Z	    },
2025-08-03T07:37:42.304434Z	    logo_dark: {
2025-08-03T07:37:42.304489Z	      id: 6,
2025-08-03T07:37:42.304568Z	      name: 'LOGO.png',
2025-08-03T07:37:42.304633Z	      alternativeText: null,
2025-08-03T07:37:42.30469Z	      caption: null,
2025-08-03T07:37:42.304751Z	      width: 3401,
2025-08-03T07:37:42.304815Z	      height: 697,
2025-08-03T07:37:42.304875Z	      formats: [Object],
2025-08-03T07:37:42.304931Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:42.304993Z	      ext: '.png',
2025-08-03T07:37:42.305053Z	      mime: 'image/png',
2025-08-03T07:37:42.30513Z	      size: 162.14,
2025-08-03T07:37:42.305195Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:42.305251Z	      previewUrl: null,
2025-08-03T07:37:42.305307Z	      provider: 'local',
2025-08-03T07:37:42.305361Z	      provider_metadata: null,
2025-08-03T07:37:42.305421Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:42.305481Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:42.30554Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:42.305609Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:42.305688Z	    },
2025-08-03T07:37:42.305748Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:42.305818Z	  },
2025-08-03T07:37:42.305877Z	  meta: {}
2025-08-03T07:37:42.305938Z	}
2025-08-03T07:37:42.306004Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:42.388618Z	 (+401ms) 
2025-08-03T07:37:42.389337Z	07:37:42   └─ /categories/资源共享/index.html🏗️ 分类页面：强制静态预渲染模式
2025-08-03T07:37:42.427082Z	🔍 getCategoryByName 被调用，name: 资源共享
2025-08-03T07:37:42.427346Z	📡 请求URL: /categories?filters[name][$eq]=%E8%B5%84%E6%BA%90%E5%85%B1%E4%BA%AB
2025-08-03T07:37:42.469291Z	✅ getCategoryByName 响应: {
2025-08-03T07:37:42.469563Z	  data: [
2025-08-03T07:37:42.469686Z	    {
2025-08-03T07:37:42.469783Z	      id: 87,
2025-08-03T07:37:42.469886Z	      name: '资源共享',
2025-08-03T07:37:42.469987Z	      slug: 'ziyuan',
2025-08-03T07:37:42.470096Z	      description: '资源共享',
2025-08-03T07:37:42.470201Z	      color: '#6366f1',
2025-08-03T07:37:42.470293Z	      icon: null,
2025-08-03T07:37:42.470378Z	      sortOrder: 0,
2025-08-03T07:37:42.47047Z	      createdAt: '2025-08-03T05:29:36.391Z',
2025-08-03T07:37:42.470536Z	      updatedAt: '2025-08-03T05:29:38.469Z',
2025-08-03T07:37:42.470592Z	      publishedAt: '2025-08-03T05:29:38.496Z',
2025-08-03T07:37:42.470682Z	      documentId: 'gqit49chuzfawxkmjm1vkou8',
2025-08-03T07:37:42.470769Z	      layout_type: 'grid',
2025-08-03T07:37:42.470836Z	      enable_banner: true
2025-08-03T07:37:42.470904Z	    }
2025-08-03T07:37:42.470961Z	  ],
2025-08-03T07:37:42.471022Z	  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } }
2025-08-03T07:37:42.47108Z	}
2025-08-03T07:37:42.7763Z	🏷️ Index Settings: {
2025-08-03T07:37:42.77656Z	  data: {
2025-08-03T07:37:42.776682Z	    id: 1,
2025-08-03T07:37:42.776781Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:42.776865Z	    site_title: 'SparkDone',
2025-08-03T07:37:42.776931Z	    site_subtitle: 'Power',
2025-08-03T07:37:42.776995Z	    site_description: null,
2025-08-03T07:37:42.777052Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:42.777126Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:42.777193Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:42.777249Z	    show_author_section: false,
2025-08-03T07:37:42.777306Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:42.777377Z	    enable_home_banner: true,
2025-08-03T07:37:42.777434Z	    logo_light: {
2025-08-03T07:37:42.777494Z	      id: 5,
2025-08-03T07:37:42.77755Z	      name: 'logo1.png',
2025-08-03T07:37:42.777616Z	      alternativeText: null,
2025-08-03T07:37:42.777675Z	      caption: null,
2025-08-03T07:37:42.777733Z	      width: 3401,
2025-08-03T07:37:42.777788Z	      height: 697,
2025-08-03T07:37:42.777845Z	      formats: [Object],
2025-08-03T07:37:42.7779Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:42.777962Z	      ext: '.png',
2025-08-03T07:37:42.77802Z	      mime: 'image/png',
2025-08-03T07:37:42.778077Z	      size: 129.52,
2025-08-03T07:37:42.778149Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:42.778219Z	      previewUrl: null,
2025-08-03T07:37:42.778277Z	      provider: 'local',
2025-08-03T07:37:42.778352Z	      provider_metadata: null,
2025-08-03T07:37:42.778412Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:42.778477Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:42.77854Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:42.778611Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:42.778696Z	    },
2025-08-03T07:37:42.778755Z	    logo_dark: {
2025-08-03T07:37:42.778818Z	      id: 6,
2025-08-03T07:37:42.778873Z	      name: 'LOGO.png',
2025-08-03T07:37:42.77893Z	      alternativeText: null,
2025-08-03T07:37:42.778993Z	      caption: null,
2025-08-03T07:37:42.779054Z	      width: 3401,
2025-08-03T07:37:42.77912Z	      height: 697,
2025-08-03T07:37:42.779178Z	      formats: [Object],
2025-08-03T07:37:42.779234Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:42.77929Z	      ext: '.png',
2025-08-03T07:37:42.779345Z	      mime: 'image/png',
2025-08-03T07:37:42.779408Z	      size: 162.14,
2025-08-03T07:37:42.779475Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:42.779544Z	      previewUrl: null,
2025-08-03T07:37:42.779614Z	      provider: 'local',
2025-08-03T07:37:42.77967Z	      provider_metadata: null,
2025-08-03T07:37:42.779724Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:42.779788Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:42.779847Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:42.779911Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:42.779966Z	    },
2025-08-03T07:37:42.78002Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:42.780075Z	  },
2025-08-03T07:37:42.780148Z	  meta: {}
2025-08-03T07:37:42.780208Z	}
2025-08-03T07:37:42.780273Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:42.881463Z	 (+493ms) 
2025-08-03T07:37:42.883296Z	07:37:42 ▶ src/pages/friends.astro
2025-08-03T07:37:43.166481Z	07:37:42   └─ /friends/index.html🏷️ Index Settings: {
2025-08-03T07:37:43.166721Z	  data: {
2025-08-03T07:37:43.166803Z	    id: 1,
2025-08-03T07:37:43.167007Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:43.167258Z	    site_title: 'SparkDone',
2025-08-03T07:37:43.167353Z	    site_subtitle: 'Power',
2025-08-03T07:37:43.167607Z	    site_description: null,
2025-08-03T07:37:43.167723Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:43.167804Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:43.167864Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:43.167931Z	    show_author_section: false,
2025-08-03T07:37:43.167989Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:43.168044Z	    enable_home_banner: true,
2025-08-03T07:37:43.168113Z	    logo_light: {
2025-08-03T07:37:43.168171Z	      id: 5,
2025-08-03T07:37:43.168239Z	      name: 'logo1.png',
2025-08-03T07:37:43.168297Z	      alternativeText: null,
2025-08-03T07:37:43.168381Z	      caption: null,
2025-08-03T07:37:43.168464Z	      width: 3401,
2025-08-03T07:37:43.168526Z	      height: 697,
2025-08-03T07:37:43.16859Z	      formats: [Object],
2025-08-03T07:37:43.16865Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:43.168713Z	      ext: '.png',
2025-08-03T07:37:43.168782Z	      mime: 'image/png',
2025-08-03T07:37:43.168844Z	      size: 129.52,
2025-08-03T07:37:43.168904Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:43.16896Z	      previewUrl: null,
2025-08-03T07:37:43.169022Z	      provider: 'local',
2025-08-03T07:37:43.169097Z	      provider_metadata: null,
2025-08-03T07:37:43.169168Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:43.169233Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:43.169293Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:43.169354Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:43.169409Z	    },
2025-08-03T07:37:43.169474Z	    logo_dark: {
2025-08-03T07:37:43.169533Z	      id: 6,
2025-08-03T07:37:43.169591Z	      name: 'LOGO.png',
2025-08-03T07:37:43.169648Z	      alternativeText: null,
2025-08-03T07:37:43.169712Z	      caption: null,
2025-08-03T07:37:43.169783Z	      width: 3401,
2025-08-03T07:37:43.169842Z	      height: 697,
2025-08-03T07:37:43.169911Z	      formats: [Object],
2025-08-03T07:37:43.169976Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:43.17004Z	      ext: '.png',
2025-08-03T07:37:43.17011Z	      mime: 'image/png',
2025-08-03T07:37:43.17017Z	      size: 162.14,
2025-08-03T07:37:43.170228Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:43.170291Z	      previewUrl: null,
2025-08-03T07:37:43.170828Z	      provider: 'local',
2025-08-03T07:37:43.170958Z	      provider_metadata: null,
2025-08-03T07:37:43.171186Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:43.17139Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:43.171489Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:43.171567Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:43.171634Z	    },
2025-08-03T07:37:43.171695Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:43.171752Z	  },
2025-08-03T07:37:43.171816Z	  meta: {}
2025-08-03T07:37:43.171883Z	}
2025-08-03T07:37:43.171957Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:43.198831Z	 (+315ms) 
2025-08-03T07:37:43.201586Z	07:37:43 ▶ src/pages/page/[slug].astro
2025-08-03T07:37:43.242017Z	07:37:43 ▶ src/pages/posts/[...slug].astro
2025-08-03T07:37:43.243591Z	07:37:43 ▶ src/pages/search.astro
2025-08-03T07:37:43.68313Z	07:37:43   └─ /search/index.html🏷️ Index Settings: {
2025-08-03T07:37:43.683379Z	  data: {
2025-08-03T07:37:43.683549Z	    id: 1,
2025-08-03T07:37:43.683675Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:43.683745Z	    site_title: 'SparkDone',
2025-08-03T07:37:43.683816Z	    site_subtitle: 'Power',
2025-08-03T07:37:43.683912Z	    site_description: null,
2025-08-03T07:37:43.683993Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:43.684063Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:43.68416Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:43.684224Z	    show_author_section: false,
2025-08-03T07:37:43.68428Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:43.684336Z	    enable_home_banner: true,
2025-08-03T07:37:43.684391Z	    logo_light: {
2025-08-03T07:37:43.684448Z	      id: 5,
2025-08-03T07:37:43.684509Z	      name: 'logo1.png',
2025-08-03T07:37:43.684572Z	      alternativeText: null,
2025-08-03T07:37:43.684644Z	      caption: null,
2025-08-03T07:37:43.684708Z	      width: 3401,
2025-08-03T07:37:43.684763Z	      height: 697,
2025-08-03T07:37:43.68523Z	      formats: [Object],
2025-08-03T07:37:43.685351Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:43.685636Z	      ext: '.png',
2025-08-03T07:37:43.685757Z	      mime: 'image/png',
2025-08-03T07:37:43.685873Z	      size: 129.52,
2025-08-03T07:37:43.686012Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:43.686223Z	      previewUrl: null,
2025-08-03T07:37:43.686311Z	      provider: 'local',
2025-08-03T07:37:43.686373Z	      provider_metadata: null,
2025-08-03T07:37:43.686456Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:43.68653Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:43.686588Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:43.686657Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:43.686714Z	    },
2025-08-03T07:37:43.686811Z	    logo_dark: {
2025-08-03T07:37:43.686914Z	      id: 6,
2025-08-03T07:37:43.687014Z	      name: 'LOGO.png',
2025-08-03T07:37:43.687127Z	      alternativeText: null,
2025-08-03T07:37:43.687222Z	      caption: null,
2025-08-03T07:37:43.6873Z	      width: 3401,
2025-08-03T07:37:43.687356Z	      height: 697,
2025-08-03T07:37:43.687441Z	      formats: [Object],
2025-08-03T07:37:43.687533Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:43.687631Z	      ext: '.png',
2025-08-03T07:37:43.687745Z	      mime: 'image/png',
2025-08-03T07:37:43.687843Z	      size: 162.14,
2025-08-03T07:37:43.687913Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:43.687976Z	      previewUrl: null,
2025-08-03T07:37:43.688043Z	      provider: 'local',
2025-08-03T07:37:43.688128Z	      provider_metadata: null,
2025-08-03T07:37:43.688191Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:43.688246Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:43.688319Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:43.688418Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:43.688521Z	    },
2025-08-03T07:37:43.688624Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:43.688722Z	  },
2025-08-03T07:37:43.688819Z	  meta: {}
2025-08-03T07:37:43.688925Z	}
2025-08-03T07:37:43.689069Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:43.7139Z	 (+470ms) 
2025-08-03T07:37:43.716184Z	07:37:43 ▶ src/pages/tags.astro
2025-08-03T07:37:43.991976Z	07:37:43   └─ /tags/index.html🏷️ Index Settings: {
2025-08-03T07:37:43.992234Z	  data: {
2025-08-03T07:37:43.992326Z	    id: 1,
2025-08-03T07:37:43.992389Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:43.992458Z	    site_title: 'SparkDone',
2025-08-03T07:37:43.992552Z	    site_subtitle: 'Power',
2025-08-03T07:37:43.992614Z	    site_description: null,
2025-08-03T07:37:43.992679Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:43.99274Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:43.992799Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:43.992863Z	    show_author_section: false,
2025-08-03T07:37:43.992928Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:43.99302Z	    enable_home_banner: true,
2025-08-03T07:37:43.993105Z	    logo_light: {
2025-08-03T07:37:43.993181Z	      id: 5,
2025-08-03T07:37:43.993239Z	      name: 'logo1.png',
2025-08-03T07:37:43.993294Z	      alternativeText: null,
2025-08-03T07:37:43.993353Z	      caption: null,
2025-08-03T07:37:43.993408Z	      width: 3401,
2025-08-03T07:37:43.993464Z	      height: 697,
2025-08-03T07:37:43.993523Z	      formats: [Object],
2025-08-03T07:37:43.993577Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:43.993643Z	      ext: '.png',
2025-08-03T07:37:43.993709Z	      mime: 'image/png',
2025-08-03T07:37:43.993768Z	      size: 129.52,
2025-08-03T07:37:43.993831Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:43.993894Z	      previewUrl: null,
2025-08-03T07:37:43.993951Z	      provider: 'local',
2025-08-03T07:37:43.994017Z	      provider_metadata: null,
2025-08-03T07:37:43.994079Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:43.99417Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:43.994238Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:43.994301Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:43.994358Z	    },
2025-08-03T07:37:43.994423Z	    logo_dark: {
2025-08-03T07:37:43.994486Z	      id: 6,
2025-08-03T07:37:43.994557Z	      name: 'LOGO.png',
2025-08-03T07:37:43.994615Z	      alternativeText: null,
2025-08-03T07:37:43.994672Z	      caption: null,
2025-08-03T07:37:43.994737Z	      width: 3401,
2025-08-03T07:37:43.9948Z	      height: 697,
2025-08-03T07:37:43.994864Z	      formats: [Object],
2025-08-03T07:37:43.99493Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:43.995013Z	      ext: '.png',
2025-08-03T07:37:43.995075Z	      mime: 'image/png',
2025-08-03T07:37:43.995158Z	      size: 162.14,
2025-08-03T07:37:43.995215Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:43.995273Z	      previewUrl: null,
2025-08-03T07:37:43.995328Z	      provider: 'local',
2025-08-03T07:37:43.995383Z	      provider_metadata: null,
2025-08-03T07:37:43.995458Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:43.995534Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:43.995595Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:43.995657Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:43.995712Z	    },
2025-08-03T07:37:43.995769Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:43.99583Z	  },
2025-08-03T07:37:43.995894Z	  meta: {}
2025-08-03T07:37:43.995949Z	}
2025-08-03T07:37:43.996017Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:44.081499Z	 (+365ms) 
2025-08-03T07:37:44.084671Z	07:37:44 ▶ src/pages/index.astro
2025-08-03T07:37:44.489432Z	07:37:44   └─ /index.html🏷️ Index Settings: {
2025-08-03T07:37:44.489709Z	  data: {
2025-08-03T07:37:44.489812Z	    id: 1,
2025-08-03T07:37:44.489873Z	    documentId: 'ec1mkojdxory2v78f4pjgj2n',
2025-08-03T07:37:44.489928Z	    site_title: 'SparkDone',
2025-08-03T07:37:44.489985Z	    site_subtitle: 'Power',
2025-08-03T07:37:44.490058Z	    site_description: null,
2025-08-03T07:37:44.490136Z	    createdAt: '2025-07-15T15:21:40.896Z',
2025-08-03T07:37:44.490195Z	    updatedAt: '2025-08-03T06:52:28.868Z',
2025-08-03T07:37:44.490251Z	    publishedAt: '2025-08-03T06:52:28.755Z',
2025-08-03T07:37:44.490304Z	    show_author_section: false,
2025-08-03T07:37:44.49037Z	    default_homepage_layout: 'grid',
2025-08-03T07:37:44.490425Z	    enable_home_banner: true,
2025-08-03T07:37:44.490479Z	    logo_light: {
2025-08-03T07:37:44.490548Z	      id: 5,
2025-08-03T07:37:44.490616Z	      name: 'logo1.png',
2025-08-03T07:37:44.490671Z	      alternativeText: null,
2025-08-03T07:37:44.490732Z	      caption: null,
2025-08-03T07:37:44.490793Z	      width: 3401,
2025-08-03T07:37:44.490853Z	      height: 697,
2025-08-03T07:37:44.490915Z	      formats: [Object],
2025-08-03T07:37:44.490975Z	      hash: 'logo1_2c27baca01',
2025-08-03T07:37:44.491029Z	      ext: '.png',
2025-08-03T07:37:44.491081Z	      mime: 'image/png',
2025-08-03T07:37:44.49115Z	      size: 129.52,
2025-08-03T07:37:44.491205Z	      url: '/uploads/logo1_2c27baca01.png',
2025-08-03T07:37:44.491259Z	      previewUrl: null,
2025-08-03T07:37:44.491312Z	      provider: 'local',
2025-08-03T07:37:44.491364Z	      provider_metadata: null,
2025-08-03T07:37:44.491416Z	      createdAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:44.491468Z	      updatedAt: '2025-07-19T16:28:05.285Z',
2025-08-03T07:37:44.491526Z	      documentId: 'f2h78t7tcgn6pax4ee75zwtr',
2025-08-03T07:37:44.491596Z	      publishedAt: '2025-07-19T16:28:05.287Z'
2025-08-03T07:37:44.491649Z	    },
2025-08-03T07:37:44.491706Z	    logo_dark: {
2025-08-03T07:37:44.49176Z	      id: 6,
2025-08-03T07:37:44.491812Z	      name: 'LOGO.png',
2025-08-03T07:37:44.491864Z	      alternativeText: null,
2025-08-03T07:37:44.491919Z	      caption: null,
2025-08-03T07:37:44.491971Z	      width: 3401,
2025-08-03T07:37:44.49204Z	      height: 697,
2025-08-03T07:37:44.492116Z	      formats: [Object],
2025-08-03T07:37:44.492181Z	      hash: 'LOGO_1c461133d8',
2025-08-03T07:37:44.492242Z	      ext: '.png',
2025-08-03T07:37:44.492304Z	      mime: 'image/png',
2025-08-03T07:37:44.492358Z	      size: 162.14,
2025-08-03T07:37:44.492416Z	      url: '/uploads/LOGO_1c461133d8.png',
2025-08-03T07:37:44.492477Z	      previewUrl: null,
2025-08-03T07:37:44.492542Z	      provider: 'local',
2025-08-03T07:37:44.492598Z	      provider_metadata: null,
2025-08-03T07:37:44.49266Z	      createdAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:44.49272Z	      updatedAt: '2025-07-19T16:28:05.335Z',
2025-08-03T07:37:44.492781Z	      documentId: 'yuzljep3d6ppab8upa200de5',
2025-08-03T07:37:44.492836Z	      publishedAt: '2025-07-19T16:28:05.336Z'
2025-08-03T07:37:44.492898Z	    },
2025-08-03T07:37:44.492953Z	    home_banners: [ [Object], [Object] ]
2025-08-03T07:37:44.493008Z	  },
2025-08-03T07:37:44.493068Z	  meta: {}
2025-08-03T07:37:44.493139Z	}
2025-08-03T07:37:44.493214Z	🏷️ Site Title: SparkDone
2025-08-03T07:37:44.596799Z	 (+512ms) 
2025-08-03T07:37:44.597049Z	07:37:44 ✓ Completed in 5.73s.
2025-08-03T07:37:44.597198Z	
2025-08-03T07:37:44.603232Z	07:37:44 [build] Rearranging server assets...
2025-08-03T07:37:44.638843Z	07:37:44 [@astrojs/sitemap] `sitemap-index.xml` created at `dist/client`
2025-08-03T07:37:44.639068Z	07:37:44 [build] Server built in 21.25s
2025-08-03T07:37:44.639184Z	07:37:44 [build] Complete!
2025-08-03T07:37:44.800022Z	
2025-08-03T07:37:44.800274Z	Running Pagefind v1.3.0 (Extended)
2025-08-03T07:37:44.800359Z	Running from: "/opt/buildhome/repo"
2025-08-03T07:37:44.800419Z	Source:       "dist/client"
2025-08-03T07:37:44.80055Z	Output:       "dist/client/pagefind"
2025-08-03T07:37:44.800648Z	
2025-08-03T07:37:44.800862Z	[Walking source directory]
2025-08-03T07:37:44.80237Z	Found 10 files matching **/*.{html}
2025-08-03T07:37:44.802519Z	
2025-08-03T07:37:44.802714Z	[Parsing files]
2025-08-03T07:37:45.011173Z	Did not find a data-pagefind-body element on the site.
2025-08-03T07:37:45.011441Z	↳ Indexing all <body> elements on the site.
2025-08-03T07:37:45.011623Z	
2025-08-03T07:37:45.011699Z	[Reading languages]
2025-08-03T07:37:45.011774Z	Discovered 1 language: zh-cn
2025-08-03T07:37:45.011922Z	
2025-08-03T07:37:45.012119Z	[Building search indexes]
2025-08-03T07:37:45.013124Z	Total: 
2025-08-03T07:37:45.013341Z	  Indexed 1 language
2025-08-03T07:37:45.013622Z	  Indexed 10 pages
2025-08-03T07:37:45.013911Z	  Indexed 231 words
2025-08-03T07:37:45.014136Z	  Indexed 0 filters
2025-08-03T07:37:45.014278Z	  Indexed 0 sorts
2025-08-03T07:37:45.015027Z	Note: Pagefind doesn't support stemming for the language zh-cn. 
2025-08-03T07:37:45.015264Z	Search will still work, but will not match across root words.
2025-08-03T07:37:45.015401Z	Note: Pagefind doesn't support stemming for the language zh-cn. 
2025-08-03T07:37:45.015525Z	Search will still work, but will not match across root words.
2025-08-03T07:37:45.023669Z	
2025-08-03T07:37:45.023833Z	Finished in 0.224 seconds
2025-08-03T07:37:45.075704Z	🔧 开始构建后处理...
2025-08-03T07:37:45.076545Z	🎨 检查 CSS 文件路径...
2025-08-03T07:37:45.07683Z	✅ CSS 文件已正确打包到 _astro 目录
2025-08-03T07:37:45.076966Z	⚙️ 生成服务器配置...
2025-08-03T07:37:45.077075Z	⚠️ Pagefind 源目录不存在: /opt/buildhome/repo/dist/pagefind
2025-08-03T07:37:45.077228Z	✅ 服务器配置已生成: /opt/buildhome/repo/dist/server-config.json
2025-08-03T07:37:45.077564Z	🔍 验证构建结果...
2025-08-03T07:37:45.077721Z	✅ dist/client/pagefind/pagefind.js
2025-08-03T07:37:45.07787Z	✅ dist/server/entry.mjs
2025-08-03T07:37:45.078184Z	🎉 构建验证通过！
2025-08-03T07:37:45.078365Z	📋 生成部署信息...
2025-08-03T07:37:45.078942Z	✅ 部署信息已生成: /opt/buildhome/repo/dist/deploy-info.json
2025-08-03T07:37:45.07908Z	🎉 构建后处理完成！
2025-08-03T07:37:45.079177Z	
2025-08-03T07:37:45.079245Z	📦 部署准备就绪:
2025-08-03T07:37:45.079306Z	  - 静态资源: dist/client/
2025-08-03T07:37:45.079366Z	  - 服务器代码: dist/server/
2025-08-03T07:37:45.079435Z	  - Pagefind 搜索: dist/client/pagefind/
2025-08-03T07:37:45.079495Z	
2025-08-03T07:37:45.079562Z	🚀 可以开始部署了！
2025-08-03T07:37:45.125863Z	🚀 开始HTML优化...
2025-08-03T07:37:45.126239Z	🌍 环境信息:
2025-08-03T07:37:45.126777Z	   NODE_ENV: 未设置
2025-08-03T07:37:45.127078Z	   STRAPI_URL: https://api.sparkdone.com
2025-08-03T07:37:45.127246Z	   STRAPI_PUBLIC_URL: https://api.sparkdone.com
2025-08-03T07:37:45.138886Z	📁 找到 10 个HTML文件
2025-08-03T07:37:45.139195Z	
2025-08-03T07:37:45.139355Z	🔧 优化文件: /opt/buildhome/repo/dist/client/404.html
2025-08-03T07:37:45.13981Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.140273Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.140572Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.1408Z	✅ 合并了 4 个内联样式块为 1 个
2025-08-03T07:37:45.140893Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.141126Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.142601Z	📊 优化结果:
2025-08-03T07:37:45.143222Z	   原始大小: 41794 字节
2025-08-03T07:37:45.143331Z	   优化后大小: 37112 字节
2025-08-03T07:37:45.143498Z	   节省: 4682 字节 (11.20%)
2025-08-03T07:37:45.143679Z	
2025-08-03T07:37:45.143856Z	🔧 优化文件: /opt/buildhome/repo/dist/client/about/index.html
2025-08-03T07:37:45.14407Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.144266Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.144413Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.14454Z	✅ 合并了 5 个内联样式块为 1 个
2025-08-03T07:37:45.144652Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.144749Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.145693Z	📊 优化结果:
2025-08-03T07:37:45.145887Z	   原始大小: 40045 字节
2025-08-03T07:37:45.146003Z	   优化后大小: 35476 字节
2025-08-03T07:37:45.146131Z	   节省: 4569 字节 (11.41%)
2025-08-03T07:37:45.146248Z	
2025-08-03T07:37:45.146362Z	🔧 优化文件: /opt/buildhome/repo/dist/client/archive/index.html
2025-08-03T07:37:45.146509Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.146633Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.146763Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.146905Z	✅ 合并了 5 个内联样式块为 1 个
2025-08-03T07:37:45.147026Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.147158Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.147578Z	📊 优化结果:
2025-08-03T07:37:45.166761Z	   原始大小: 39404 字节
2025-08-03T07:37:45.16703Z	   优化后大小: 34920 字节
2025-08-03T07:37:45.167215Z	   节省: 4484 字节 (11.38%)
2025-08-03T07:37:45.167338Z	
2025-08-03T07:37:45.167527Z	🔧 优化文件: /opt/buildhome/repo/dist/client/categories/Github项目/index.html
2025-08-03T07:37:45.167829Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.167973Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.168131Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.16826Z	✅ 合并了 4 个内联样式块为 1 个
2025-08-03T07:37:45.168373Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.168479Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.168688Z	📊 优化结果:
2025-08-03T07:37:45.168833Z	   原始大小: 40805 字节
2025-08-03T07:37:45.168961Z	   优化后大小: 35855 字节
2025-08-03T07:37:45.169073Z	   节省: 4950 字节 (12.13%)
2025-08-03T07:37:45.169199Z	
2025-08-03T07:37:45.169318Z	🔧 优化文件: /opt/buildhome/repo/dist/client/categories/网赚项目/index.html
2025-08-03T07:37:45.169694Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.169826Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.170286Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.171042Z	✅ 合并了 4 个内联样式块为 1 个
2025-08-03T07:37:45.171378Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.171477Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.171631Z	📊 优化结果:
2025-08-03T07:37:45.171789Z	   原始大小: 40817 字节
2025-08-03T07:37:45.171899Z	   优化后大小: 35863 字节
2025-08-03T07:37:45.171962Z	   节省: 4954 字节 (12.14%)
2025-08-03T07:37:45.172026Z	
2025-08-03T07:37:45.172134Z	🔧 优化文件: /opt/buildhome/repo/dist/client/categories/资源共享/index.html
2025-08-03T07:37:45.172313Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.172412Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.172481Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.172592Z	✅ 合并了 4 个内联样式块为 1 个
2025-08-03T07:37:45.172679Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.172783Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.173072Z	📊 优化结果:
2025-08-03T07:37:45.173399Z	   原始大小: 40817 字节
2025-08-03T07:37:45.173509Z	   优化后大小: 35863 字节
2025-08-03T07:37:45.173678Z	   节省: 4954 字节 (12.14%)
2025-08-03T07:37:45.173777Z	
2025-08-03T07:37:45.173857Z	🔧 优化文件: /opt/buildhome/repo/dist/client/friends/index.html
2025-08-03T07:37:45.173932Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.174003Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.174066Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.174372Z	✅ 合并了 6 个内联样式块为 1 个
2025-08-03T07:37:45.174461Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.174677Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.175264Z	📊 优化结果:
2025-08-03T07:37:45.17575Z	   原始大小: 44122 字节
2025-08-03T07:37:45.175945Z	   优化后大小: 39211 字节
2025-08-03T07:37:45.17604Z	   节省: 4911 字节 (11.13%)
2025-08-03T07:37:45.176142Z	
2025-08-03T07:37:45.176333Z	🔧 优化文件: /opt/buildhome/repo/dist/client/index.html
2025-08-03T07:37:45.176431Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.176523Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.176757Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.176881Z	✅ 合并了 5 个内联样式块为 1 个
2025-08-03T07:37:45.177032Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.177181Z	✅ 优化了 4 个图片标签
2025-08-03T07:37:45.177607Z	📊 优化结果:
2025-08-03T07:37:45.178016Z	   原始大小: 44340 字节
2025-08-03T07:37:45.178182Z	   优化后大小: 39899 字节
2025-08-03T07:37:45.178312Z	   节省: 4441 字节 (10.02%)
2025-08-03T07:37:45.178424Z	
2025-08-03T07:37:45.178536Z	🔧 优化文件: /opt/buildhome/repo/dist/client/search/index.html
2025-08-03T07:37:45.178632Z	✅ 移除了 1 个重复的CSS样式块
2025-08-03T07:37:45.178694Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.178829Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.179097Z	✅ 合并了 5 个内联样式块为 1 个
2025-08-03T07:37:45.179195Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.179258Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.180033Z	📊 优化结果:
2025-08-03T07:37:45.180259Z	   原始大小: 47529 字节
2025-08-03T07:37:45.180393Z	   优化后大小: 41538 字节
2025-08-03T07:37:45.180553Z	   节省: 5991 字节 (12.60%)
2025-08-03T07:37:45.180642Z	
2025-08-03T07:37:45.180839Z	🔧 优化文件: /opt/buildhome/repo/dist/client/tags/index.html
2025-08-03T07:37:45.180967Z	✅ 移除了 0 个重复的CSS样式块
2025-08-03T07:37:45.181152Z	✅ 移除了 1 个调试相关的CSS块
2025-08-03T07:37:45.181231Z	✅ 移除了 1 个空的样式块
2025-08-03T07:37:45.181785Z	✅ 合并了 6 个内联样式块为 1 个
2025-08-03T07:37:45.181961Z	✅ 添加了资源预加载提示
2025-08-03T07:37:45.182062Z	✅ 优化了 2 个图片标签
2025-08-03T07:37:45.182226Z	📊 优化结果:
2025-08-03T07:37:45.182308Z	   原始大小: 42223 字节
2025-08-03T07:37:45.182444Z	   优化后大小: 37572 字节
2025-08-03T07:37:45.182565Z	   节省: 4651 字节 (11.02%)
2025-08-03T07:37:45.182673Z	
2025-08-03T07:37:45.182775Z	🎉 HTML优化完成！
2025-08-03T07:37:45.182881Z	📊 总体优化结果:
2025-08-03T07:37:45.182976Z	   处理文件: 10 个
2025-08-03T07:37:45.183075Z	   原始总大小: 437496 字节
2025-08-03T07:37:45.183188Z	   优化后总大小: 383887 字节
2025-08-03T07:37:45.183287Z	   总节省: 53609 字节 (12.25%)
2025-08-03T07:37:45.209867Z	Finished
2025-08-03T07:37:46.058263Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-03T07:37:46.059012Z	
2025-08-03T07:37:47.158971Z	No wrangler.toml file found. Continuing.
2025-08-03T07:37:47.159879Z	Note: No functions dir at /functions found. Skipping.
2025-08-03T07:37:47.160041Z	Validating asset output directory
2025-08-03T07:37:50.566881Z	Deploying your site to Cloudflare's global network...
2025-08-03T07:37:51.343172Z	Parsed 14 valid header rules.
2025-08-03T07:37:52.718694Z	Uploading... (277/353)
2025-08-03T07:37:53.571069Z	Uploading... (302/353)
2025-08-03T07:37:53.696835Z	Uploading... (327/353)
2025-08-03T07:37:56.042794Z	Uploading... (353/353)
2025-08-03T07:37:56.043184Z	✨ Success! Uploaded 76 files (277 already uploaded) (3.62 sec)
2025-08-03T07:37:56.043395Z	
2025-08-03T07:37:56.445761Z	✨ Upload complete!
2025-08-03T07:38:00.172522Z	Success: Assets published!
2025-08-03T07:38:01.606111Z	Success: Your site was deployed!