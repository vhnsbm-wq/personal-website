# 个人作品集网站

基于 React + TypeScript + Vite 开发的个人作品集网站。

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion

## 安装依赖

```bash
npm install
```

## 开发

```bash
npm run dev
```

启动后，在浏览器中访问：**http://localhost:5173/**

> ⚠️ **重要提示**：不要直接双击打开 `index.html` 文件！必须通过开发服务器查看项目。详细说明请查看 [如何查看项目.md](./如何查看项目.md)

## 构建

```bash
npm run build
```

## 预览构建结果

```bash
npm run preview
```

## 项目结构

```
src/
  components/        # 组件目录
    Header.tsx      # 头部导航
    Hero.tsx        # 首页 Hero 区域
    About.tsx       # 关于我
    Projects.tsx    # 项目展示
    Contact.tsx     # 联系方式
    Footer.tsx      # 底部
  data/             # 数据目录
    projects.ts     # 项目数据
    skills.ts       # 技能数据
  App.tsx           # 主应用组件
  main.tsx          # 入口文件
  index.css         # 全局样式
```

## 设计规范

- 深色主题（背景 #0a0a0a，文字 #ffffff）
- 使用渐变色作为强调色
- 平滑的滚动动画
- 移动端适配

## 部署

项目已针对 Vercel 平台进行了全面优化，可以直接部署。

### 📚 详细部署教程

**强烈推荐阅读：** [VERCEL_部署教程.md](./VERCEL_部署教程.md)

这份教程包含：
- ✅ 详细的步骤说明（带截图位置说明）
- ✅ 两种部署方法（Dashboard 和 CLI）
- ✅ 常见问题解决方案
- ✅ 部署后验证步骤
- ✅ 后续优化建议

### 快速开始

1. **通过 Vercel Dashboard（推荐新手）**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "Add New Project"
   - 选择你的仓库并导入
   - 点击 "Deploy" 完成部署

2. **通过 Vercel CLI（推荐开发者）**
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

### 优化特性

- ✅ 代码分割和懒加载
- ✅ 静态资源长期缓存
- ✅ 安全头配置
- ✅ SPA 路由支持
- ✅ 构建性能优化

## 相关文档

- [如何查看项目.md](./如何查看项目.md) - 如何在本地查看项目
- [如何在Vercel查看项目.md](./如何在Vercel查看项目.md) - 如何在 Vercel 上查看已部署的项目
- [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md) - 技术配置说明
- [VERCEL_部署教程.md](./VERCEL_部署教程.md) - 详细部署教程

## 快速开始指南

### 第一次使用？

1. **安装 Node.js**（如果还没安装）
   - 访问 [nodejs.org](https://nodejs.org/)
   - 下载并安装 LTS 版本

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **在浏览器中打开**
   - 访问 http://localhost:5173/

### 准备部署？

查看 [VERCEL_部署教程.md](./VERCEL_部署教程.md) 获取详细的部署指南。

## 许可证

MIT License
