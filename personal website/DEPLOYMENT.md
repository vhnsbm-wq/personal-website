# Vercel 部署问题排查指南

## 问题分析

### 404 错误原因

这是一个 **React SPA（单页应用）**，使用 React Router 进行客户端路由。当用户直接访问任何路由（如刷新页面或直接输入 URL）时，Vercel 会尝试查找对应的文件，但找不到，因此返回 404。

### 排查步骤

#### ✅ 1. 前端是否正确发送了请求？

**状态：正常**
- 这是一个纯前端应用，没有 API 请求
- React Router 在客户端处理路由
- 问题不在前端请求

#### ✅ 2. 后端是否收到了请求？

**状态：不适用**
- 这是静态网站，没有后端服务器
- 所有内容都在客户端渲染

#### ✅ 3. 数据库查询是否正确？

**状态：不适用**
- 没有数据库
- 数据存储在 TypeScript 文件中（`src/data/`）

#### ❌ 4. 返回的数据格式是否正确？

**问题所在：Vercel 路由配置缺失**

**根本原因：**
- Vercel 需要知道如何处理 SPA 路由
- 缺少 `vercel.json` 配置文件
- 所有路由都需要重写到 `index.html`

## 解决方案

### 已创建 `vercel.json` 配置文件

配置文件包含：
1. **构建命令**：`npm run build`
2. **输出目录**：`dist`（Vite 默认输出目录）
3. **路由重写**：所有路由都重写到 `index.html`，让 React Router 处理
4. **缓存优化**：静态资源（CSS、JS）设置长期缓存

### 部署步骤

1. **提交代码到 Git**
   ```bash
   git add .
   git commit -m "Add vercel.json for SPA routing"
   git push
   ```

2. **在 Vercel 中配置**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`（已自动检测）
   - Output Directory: `dist`（已自动检测）
   - Install Command: `npm install`

3. **重新部署**
   - Vercel 会自动检测 `vercel.json` 文件
   - 所有路由现在都会正确重写到 `index.html`

## 验证

部署后，测试以下场景：
- ✅ 访问首页：`https://your-domain.vercel.app/`
- ✅ 刷新页面：应该正常显示，不会 404
- ✅ 直接访问路由：应该正常显示，不会 404
- ✅ 浏览器前进/后退：应该正常工作

## 其他可能的问题

如果仍然遇到问题，检查：

1. **构建是否成功**
   - 检查 Vercel 构建日志
   - 确保没有 TypeScript 错误
   - 确保所有依赖都正确安装

2. **输出目录是否正确**
   - Vite 默认输出到 `dist` 目录
   - 如果修改了 `vite.config.ts` 中的 `build.outDir`，需要同步更新 `vercel.json`

3. **环境变量**
   - 如果有环境变量，在 Vercel 项目设置中配置

4. **Node.js 版本**
   - Vercel 会自动检测，但可以手动指定（推荐 Node.js 18+）

