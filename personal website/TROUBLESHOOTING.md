# Vercel 404 错误排查指南

## 问题诊断

### 步骤 1: 前端是否正确发送了请求？
**状态：✅ 正常**
- 这是纯前端 React SPA 应用
- 使用 React Router 进行客户端路由
- 没有 API 请求，所有路由在客户端处理

### 步骤 2: 后端是否收到了请求？
**状态：❌ 不适用**
- 这是静态网站，没有后端服务器
- Vercel 作为静态文件服务器

### 步骤 3: 数据库查询是否正确？
**状态：❌ 不适用**
- 没有数据库
- 数据存储在 `src/data/` 目录的 TypeScript 文件中

### 步骤 4: 返回的数据格式是否正确？
**状态：❌ 问题所在**

**根本原因：**
Vercel 在部署 SPA 时，当用户直接访问路由（如刷新页面）时，会尝试查找对应的文件。由于 SPA 只有一个 `index.html`，其他路由路径不存在，因此返回 404。

## 解决方案

### 已创建/更新 `vercel.json`

配置文件使用最简单的重写规则，将所有请求重定向到 `index.html`：

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Vercel 项目设置检查清单

在 Vercel 项目设置中，确保以下配置：

1. **Framework Preset**: `Vite` 或 `Other`
2. **Build Command**: `npm run build`（自动检测）
3. **Output Directory**: `dist`（自动检测）
4. **Install Command**: `npm install`（自动检测）
5. **Root Directory**: `.`（如果项目在子目录，需要设置）

### 部署步骤

1. **确保 vercel.json 已提交**
   ```bash
   git add vercel.json
   git commit -m "Fix: Add vercel.json for SPA routing"
   git push
   ```

2. **在 Vercel Dashboard 中**
   - 进入项目设置
   - 检查 "Build & Development Settings"
   - 确保 Framework Preset 是 `Vite`
   - 点击 "Redeploy" 或等待自动部署

3. **检查构建日志**
   - 在 Vercel Dashboard 中查看最新的部署
   - 确保构建成功（没有错误）
   - 检查输出目录是否正确

### 常见问题

#### 问题 1: 构建失败
**症状**: Vercel 构建日志显示错误
**解决**:
- 检查 TypeScript 错误：`npm run build` 本地测试
- 检查依赖安装：确保 `package.json` 正确
- 检查 Node.js 版本：Vercel 自动使用 Node.js 18+

#### 问题 2: 输出目录错误
**症状**: 构建成功但找不到文件
**解决**:
- Vite 默认输出到 `dist` 目录
- 如果修改了 `vite.config.ts` 的 `build.outDir`，需要更新 Vercel 设置

#### 问题 3: 路由仍然 404
**症状**: 首页正常，但其他路由 404
**解决**:
- 确保 `vercel.json` 已正确提交
- 清除 Vercel 缓存并重新部署
- 检查 `vercel.json` 语法是否正确（JSON 格式）

#### 问题 4: 静态资源 404
**症状**: CSS/JS 文件加载失败
**解决**:
- 检查 `index.html` 中的资源路径
- 确保 Vite 构建输出正确
- 检查 `vite.config.ts` 的 `base` 配置（应该是 `/`）

### 验证步骤

部署成功后，测试以下场景：

1. ✅ **访问首页**
   ```
   https://your-domain.vercel.app/
   ```
   应该正常显示

2. ✅ **刷新页面**
   在浏览器中刷新，应该不会 404

3. ✅ **直接访问路由**
   虽然你的应用只有一个路由 `/`，但刷新应该正常

4. ✅ **检查浏览器控制台**
   打开开发者工具，检查是否有 404 错误

### 如果问题仍然存在

1. **检查 Vercel 构建日志**
   - 登录 Vercel Dashboard
   - 查看最新的部署日志
   - 查找错误信息

2. **本地测试构建**
   ```bash
   npm run build
   npm run preview
   ```
   如果本地预览正常，问题可能在 Vercel 配置

3. **检查文件结构**
   确保 `vercel.json` 在项目根目录
   确保 `dist` 目录包含构建输出

4. **联系支持**
   如果以上都正常，可能是 Vercel 平台问题，可以联系 Vercel 支持

