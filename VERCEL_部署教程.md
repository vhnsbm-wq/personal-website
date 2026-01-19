# Vercel 部署详细教程

本教程将带你从零开始，将个人作品集网站部署到 Vercel 平台。

## 📋 目录

1. [准备工作](#准备工作)
2. [方法一：通过 Vercel Dashboard 部署（推荐）](#方法一通过-vercel-dashboard-部署推荐)
3. [方法二：通过 Vercel CLI 部署](#方法二通过-vercel-cli-部署)
4. [部署后验证](#部署后验证)
5. [常见问题解决](#常见问题解决)
6. [后续优化](#后续优化)

---

## 准备工作

### 1. 确保项目已推送到 Git 仓库

在开始部署之前，确保你的项目已经推送到 GitHub、GitLab 或 Bitbucket。

#### 如果还没有 Git 仓库：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Personal portfolio website"

# 在 GitHub/GitLab/Bitbucket 创建新仓库，然后推送
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

#### 如果已有 Git 仓库：

```bash
# 确保所有更改已提交
git add .
git commit -m "准备部署到 Vercel"
git push
```

### 2. 检查项目配置

确保以下文件存在且配置正确：

- ✅ `package.json` - 包含构建脚本
- ✅ `vercel.json` - Vercel 部署配置
- ✅ `vite.config.ts` - Vite 构建配置
- ✅ `tsconfig.json` - TypeScript 配置

### 3. 本地测试构建

在部署前，建议先在本地测试构建：

```bash
# 安装依赖
npm install

# 运行构建命令
npm run build

# 预览构建结果
npm run preview
```

如果本地构建成功，说明项目配置正确，可以部署。

---

## 方法一：通过 Vercel Dashboard 部署（推荐）

这是最简单的方法，适合初学者。

### 步骤 1：注册/登录 Vercel 账号

1. 访问 [vercel.com](https://vercel.com)
2. 点击右上角的 **"Sign Up"** 或 **"Log In"**
3. 选择使用以下方式之一登录：
   - **GitHub**（推荐）
   - **GitLab**
   - **Bitbucket**
   - **Email**（邮箱注册）

> 💡 **提示**：使用 GitHub 账号登录最方便，因为可以直接导入 GitHub 仓库。

### 步骤 2：导入项目

1. 登录后，进入 Vercel Dashboard
2. 点击 **"Add New..."** 按钮（通常在右上角或中间）
3. 选择 **"Project"** 或 **"Import Project"**
4. 在仓库列表中，找到你的项目仓库
   - 如果看不到，点击 **"Adjust GitHub App Permissions"** 授权访问
5. 点击项目旁边的 **"Import"** 按钮

### 步骤 3：配置项目设置

Vercel 会自动检测项目类型，但你可以检查并调整以下设置：

#### 3.1 项目名称
- **Project Name**: 可以修改为自定义名称（如：`my-portfolio`）
- 这将影响部署 URL：`https://项目名.vercel.app`

#### 3.2 框架预设
- **Framework Preset**: 应该自动检测为 **"Vite"**
- 如果没有自动检测，手动选择 **"Vite"**

#### 3.3 构建和输出设置
- **Root Directory**: 保持默认（`.`）或设置为项目根目录
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### 3.4 环境变量（可选）
如果你的项目需要环境变量：
- 点击 **"Environment Variables"**
- 添加变量，例如：
  - `VITE_API_URL` = `https://api.example.com`
  - `VITE_APP_NAME` = `My Portfolio`

> 💡 **注意**：Vite 的环境变量必须以 `VITE_` 开头才能在客户端使用。

### 步骤 4：部署

1. 检查所有配置无误后，点击 **"Deploy"** 按钮
2. 等待构建过程完成（通常需要 1-3 分钟）
3. 构建过程中可以看到实时日志：
   - ✅ Installing dependencies
   - ✅ Building project
   - ✅ Uploading build outputs
   - ✅ Deploying to production

### 步骤 5：获取部署 URL

构建完成后：

1. 你会看到一个成功页面
2. 显示你的部署 URL，格式为：`https://项目名.vercel.app`
3. 点击 URL 即可访问你的网站

---

## 方法二：通过 Vercel CLI 部署

适合喜欢使用命令行的开发者。

### 步骤 1：安装 Vercel CLI

```bash
# 全局安装 Vercel CLI
npm install -g vercel

# 或者使用 yarn
yarn global add vercel

# 或者使用 pnpm
pnpm add -g vercel
```

### 步骤 2：登录 Vercel

```bash
vercel login
```

这会打开浏览器，让你选择登录方式：
- GitHub
- GitLab
- Bitbucket
- Email

选择后完成登录。

### 步骤 3：在项目目录中部署

```bash
# 进入项目目录
cd "d:\kf\personal website"

# 运行部署命令
vercel
```

### 步骤 4：回答配置问题

CLI 会询问几个问题：

1. **Set up and deploy?** → 输入 `Y`
2. **Which scope?** → 选择你的账号或团队
3. **Link to existing project?** → 首次部署选择 `N`，后续可以选择 `Y`
4. **What's your project's name?** → 输入项目名称（或按回车使用默认）
5. **In which directory is your code located?** → 按回车使用当前目录（`.`）
6. **Want to override the settings?** → 首次部署选择 `N`

### 步骤 5：部署到生产环境

预览部署成功后，部署到生产环境：

```bash
vercel --prod
```

或者：

```bash
vercel --production
```

### 步骤 6：查看部署信息

```bash
# 查看部署列表
vercel ls

# 查看特定部署的详细信息
vercel inspect [部署URL]
```

---

## 部署后验证

### 1. 检查网站是否正常访问

1. 打开部署 URL（如：`https://your-project.vercel.app`）
2. 检查页面是否正常加载
3. 检查所有功能是否正常：
   - ✅ 导航菜单
   - ✅ 滚动动画
   - ✅ 项目卡片
   - ✅ 响应式设计

### 2. 检查路由是否正常

1. 刷新页面，不应该出现 404
2. 使用浏览器前进/后退按钮，应该正常工作
3. 直接访问路由（虽然只有一个路由），应该正常显示

### 3. 检查控制台错误

1. 打开浏览器开发者工具（F12）
2. 查看 Console 标签，不应该有错误
3. 查看 Network 标签，检查资源是否正常加载

### 4. 检查移动端适配

1. 使用浏览器开发者工具的设备模拟器
2. 或直接在手机上访问
3. 检查响应式设计是否正常

---

## 常见问题解决

### 问题 1：构建失败

**错误信息示例：**
```
Error: Build failed
Command "npm run build" exited with 1
```

**解决方法：**

1. **检查构建日志**
   - 在 Vercel Dashboard 中查看详细的构建日志
   - 找到具体的错误信息

2. **常见原因和解决：**
   - **TypeScript 错误**：
     ```bash
     # 本地运行检查
     npm run build
     # 修复所有 TypeScript 错误
     ```
   
   - **依赖安装失败**：
     - 检查 `package.json` 中的依赖版本
     - 确保所有依赖都是有效的
   
   - **Node.js 版本不兼容**：
     - 在 Vercel 项目设置中指定 Node.js 版本
     - 推荐使用 Node.js 18 或 20

3. **在项目设置中指定 Node.js 版本：**
   - 进入项目 Settings
   - 找到 "Node.js Version"
   - 设置为 `18.x` 或 `20.x`

### 问题 2：路由 404 错误

**症状：** 刷新页面或直接访问路由时出现 404

**解决方法：**

1. **检查 vercel.json 配置**
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

2. **确保 vercel.json 在项目根目录**

3. **清除缓存并重新部署**
   - 在 Vercel Dashboard 中
   - 进入项目 → Settings → General
   - 点击 "Clear Build Cache"
   - 重新部署

### 问题 3：静态资源加载失败

**症状：** 图片、CSS、JS 文件无法加载

**解决方法：**

1. **检查资源路径**
   - 确保图片在 `public` 目录
   - 使用相对路径：`/image.jpg` 而不是 `./image.jpg`

2. **检查构建输出**
   ```bash
   # 本地构建后检查 dist 目录
   npm run build
   ls dist/assets
   ```

3. **检查 vercel.json 中的缓存配置**

### 问题 4：环境变量未生效

**解决方法：**

1. **确保变量名以 VITE_ 开头**
   ```bash
   # ✅ 正确
   VITE_API_URL=https://api.example.com
   
   # ❌ 错误（不会暴露到客户端）
   API_URL=https://api.example.com
   ```

2. **在 Vercel 中重新配置**
   - 进入项目 Settings → Environment Variables
   - 添加或修改变量
   - 重新部署

3. **在代码中使用**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

### 问题 5：部署速度慢

**优化方法：**

1. **使用 .vercelignore**
   - 排除不必要的文件
   - 减少上传时间

2. **优化依赖**
   - 检查 `package.json` 中的依赖
   - 移除未使用的依赖

3. **使用 Vercel 缓存**
   - Vercel 会自动缓存 `node_modules`
   - 确保 `package-lock.json` 已提交

---

## 后续优化

### 1. 配置自定义域名

1. 在 Vercel Dashboard 中进入项目
2. 点击 **Settings** → **Domains**
3. 点击 **Add Domain**
4. 输入你的域名（如：`www.example.com`）
5. 按照提示配置 DNS：
   - 添加 CNAME 记录指向 Vercel
   - 或添加 A 记录指向 Vercel IP
6. 等待 DNS 生效（通常几分钟到几小时）

### 2. 启用 Analytics（分析）

1. 进入项目 Settings → **Analytics**
2. 启用 **Web Analytics**
3. 查看访问统计、页面浏览量等数据

### 3. 启用 Speed Insights（性能监控）

1. 进入项目 Settings → **Speed Insights**
2. 启用 Speed Insights
3. 监控 Core Web Vitals：
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

### 4. 配置自动部署

Vercel 默认已启用自动部署：

- ✅ 推送到 `main` 分支 → 自动部署到生产环境
- ✅ 推送到其他分支 → 自动创建预览部署
- ✅ 创建 Pull Request → 自动创建预览部署

### 5. 设置部署通知

1. 进入项目 Settings → **Notifications**
2. 配置通知方式：
   - Email（邮箱）
   - Slack
   - Discord
   - 等

### 6. 回滚部署

如果新部署有问题，可以回滚：

1. 进入项目 Dashboard
2. 点击 **Deployments** 标签
3. 找到之前的成功部署
4. 点击部署右侧的 **"..."** 菜单
5. 选择 **"Promote to Production"**

---

## 快速参考命令

### Vercel CLI 常用命令

```bash
# 登录
vercel login

# 部署（预览环境）
vercel

# 部署（生产环境）
vercel --prod

# 查看部署列表
vercel ls

# 查看项目信息
vercel inspect

# 移除部署
vercel remove

# 查看日志
vercel logs

# 打开项目 Dashboard
vercel open
```

### 本地开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

---

## 部署检查清单

部署前检查：

- [ ] 代码已推送到 Git 仓库
- [ ] 本地构建成功（`npm run build`）
- [ ] `vercel.json` 配置正确
- [ ] 所有依赖已添加到 `package.json`
- [ ] 环境变量已配置（如需要）
- [ ] 图片等静态资源在 `public` 目录
- [ ] 没有硬编码的 API 地址
- [ ] 测试了所有功能

部署后检查：

- [ ] 网站可以正常访问
- [ ] 所有页面正常显示
- [ ] 路由正常工作（刷新不 404）
- [ ] 静态资源正常加载
- [ ] 移动端适配正常
- [ ] 控制台没有错误
- [ ] 性能指标正常

---

## 获取帮助

如果遇到问题：

1. **查看 Vercel 文档**
   - [Vercel 官方文档](https://vercel.com/docs)
   - [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)

2. **查看构建日志**
   - 在 Vercel Dashboard 中查看详细的构建日志
   - 找到具体的错误信息

3. **社区支持**
   - [Vercel Community](https://github.com/vercel/vercel/discussions)
   - [Vercel Discord](https://vercel.com/discord)

4. **联系支持**
   - 在 Vercel Dashboard 中提交支持请求

---

## 总结

恭喜！你已经成功将项目部署到 Vercel。

**主要步骤回顾：**
1. ✅ 准备 Git 仓库
2. ✅ 登录 Vercel
3. ✅ 导入项目
4. ✅ 配置设置
5. ✅ 部署
6. ✅ 验证

**下一步建议：**
- 配置自定义域名
- 启用 Analytics 和 Speed Insights
- 持续优化性能
- 定期更新依赖

祝你部署顺利！🎉







