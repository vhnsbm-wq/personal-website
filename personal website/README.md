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

