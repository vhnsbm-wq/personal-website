# Vercel 部署指南

本项目已针对 Vercel 平台进行了优化，可以直接部署。

## 优化内容

### 1. 构建优化
- ✅ 代码分割：React、动画库等单独打包
- ✅ 资源优化：图片、字体等资源分类管理
- ✅ 压缩配置：使用 esbuild 进行快速压缩
- ✅ 懒加载：组件懒加载减少首屏加载时间

### 2. 缓存策略
- ✅ 静态资源长期缓存（1年）
- ✅ HTML 文件不缓存，确保更新及时
- ✅ 资源文件使用 hash 命名，支持长期缓存

### 3. 安全配置
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin

### 4. 路由配置
- ✅ SPA 路由重写配置
- ✅ 所有路由重定向到 index.html
- ✅ 支持浏览器前进/后退

## 部署步骤

### 方法一：通过 Vercel Dashboard

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的 Git 仓库
   - Vercel 会自动检测项目配置

3. **配置项目**（通常自动检测）
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 获得部署 URL

### 方法二：通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 环境变量配置

如果项目需要环境变量，在 Vercel Dashboard 中配置：

1. 进入项目设置
2. 选择 "Environment Variables"
3. 添加变量（如 `VITE_API_URL`）
4. 重新部署

## 性能优化建议

### 1. 图片优化
- 使用 WebP 格式
- 添加图片懒加载（已实现）
- 使用 CDN 加速图片

### 2. 代码优化
- 已启用代码分割
- 已启用组件懒加载
- 已配置资源压缩

### 3. 缓存优化
- 静态资源已配置长期缓存
- HTML 文件不缓存，确保更新及时

## 构建配置说明

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [...],  // SPA 路由重写
  "headers": [...]    // 缓存和安全头配置
}
```

### vite.config.ts
- 代码分割配置
- 资源文件命名规则
- 压缩配置
- CSS 代码分割

## 常见问题

### 1. 构建失败
- 检查 Node.js 版本（推荐 18+）
- 检查依赖安装是否成功
- 查看构建日志中的错误信息

### 2. 路由 404
- 确保 `vercel.json` 已正确配置
- 检查路由重写规则
- 清除缓存后重新部署

### 3. 静态资源加载失败
- 检查资源路径是否正确
- 确保资源文件在 `public` 目录
- 检查构建输出目录

### 4. 性能问题
- 检查图片大小和格式
- 使用 Vercel Analytics 分析性能
- 启用 Vercel Speed Insights

## 监控和分析

### Vercel Analytics
- 在项目设置中启用 Analytics
- 查看访问统计和性能指标

### Speed Insights
- 启用 Speed Insights
- 监控 Core Web Vitals
- 优化用户体验

## 持续部署

项目配置了自动部署：
- 推送到主分支自动部署到生产环境
- 推送到其他分支自动部署到预览环境
- 每个 Pull Request 自动创建预览部署

## 自定义域名

1. 在项目设置中选择 "Domains"
2. 添加你的域名
3. 按照提示配置 DNS
4. 等待 DNS 生效

## 回滚部署

如果新部署有问题：
1. 进入项目 Dashboard
2. 选择 "Deployments"
3. 找到之前的部署
4. 点击 "..." → "Promote to Production"

## 更多资源

- [Vercel 文档](https://vercel.com/docs)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [React Router 部署](https://reactrouter.com/en/main/start/overview#deployment)







