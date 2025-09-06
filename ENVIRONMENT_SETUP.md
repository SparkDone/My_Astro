# 环境变量配置说明

## 本地开发环境

1. 复制 `env.example` 文件为 `.env`：
   ```bash
   cp env.example .env
   ```

2. 编辑 `.env` 文件，填入实际的API Token：
   ```
   STRAPI_URL=https://api.sparkdone.com
   STRAPI_API_TOKEN=你的实际API_Token
   STRAPI_PUBLIC_URL=https://api.sparkdone.com
   USE_STRAPI=true
   USE_HYBRID_MODE=true
   ```

## Cloudflare Pages 部署

在 Cloudflare Pages 的项目设置中添加以下环境变量：

### 生产环境变量
- `STRAPI_URL`: `https://api.sparkdone.com`
- `STRAPI_API_TOKEN`: `你的实际API_Token`
- `STRAPI_PUBLIC_URL`: `https://api.sparkdone.com`
- `USE_STRAPI`: `true`
- `USE_HYBRID_MODE`: `true`

### 预览环境变量
- 可以设置相同的值，或者使用不同的Strapi实例

## 获取 API Token

1. 登录 Strapi 后台管理界面
2. 进入 `Settings` > `API Tokens`
3. 创建新的 Token 或使用现有的 Token
4. 确保 Token 有适当的权限（至少需要 `find` 权限）

## 安全注意事项

- ✅ `.env` 文件已被 `.gitignore` 忽略，不会提交到 Git
- ✅ API Token 只存储在环境变量中
- ✅ 生产环境使用 Cloudflare Pages 的环境变量
- ❌ 不要在代码中硬编码敏感信息
- ❌ 不要将 `.env` 文件提交到版本控制

## 故障排除

如果遇到 API 连接问题：

1. 检查环境变量是否正确设置
2. 验证 API Token 是否有效
3. 确认 Strapi 服务器是否可访问
4. 检查网络连接和防火墙设置
