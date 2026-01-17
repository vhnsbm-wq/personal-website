# 光影与回响 | Visual & Echo

一个现代化的个人展示网站，融合了视觉艺术与智能交互。

## ✨ 特性

- 🎨 **影院级暗色主题** - 沉浸式的视觉体验
- 🖼️ **全屏轮播画廊** - Ken Burns 动效，让照片"活"起来
- 💬 **AI 对话界面** - ChatGPT 风格的智能助手
- 🔗 **社交媒体集成** - 优雅的图标悬停效果
- 📱 **完全响应式** - 完美适配桌面和移动设备
- ⚡ **纯前端实现** - 无需后端，所有资源通过 CDN 加载

## 🎯 设计理念

### 视觉风格
- **配色方案**: 影院暗色模式（#0a0a0a 背景 + 香槟金强调色）
- **字体选择**: 
  - 标题: Cormorant Garamond（优雅衬线体）
  - 正文: Outfit（现代无衬线体）
- **动效**: 毛玻璃效果、Ken Burns 缩放、打字机效果

### 功能模块
1. **极简导航栏** - 滚动时自动添加毛玻璃背景
2. **沉浸式轮播** - 支持键盘、鼠标、触摸控制
3. **社交媒体栏** - 统一线条风格图标，悬停显示账号
4. **AI 对话** - 侧边抽屉式界面，智能关键词匹配

## 🚀 快速开始

### 直接使用
1. 下载所有文件到本地目录
2. 用浏览器打开 `index.html`
3. 开始自定义你的内容！

### 自定义内容

#### 1. 修改个人信息
在 `index.html` 中修改：
```html
<!-- 修改名字 -->
<h1 class="logo-text">Your Name</h1>

<!-- 修改头像 -->
<img src="你的头像URL" alt="AI Avatar">
```

#### 2. 更换轮播图片
在 `index.html` 中找到 `.carousel-slide` 部分：
```html
<div class="slide-image" style="background-image: url('你的图片URL');">
```

推荐图片来源：
- [Unsplash](https://unsplash.com/) - 高质量免费图片
- [Pexels](https://www.pexels.com/) - 免费素材库

#### 3. 更新社交媒体链接
在 `index.html` 的 `.social-footer` 部分修改链接：
```html
<a href="你的GitHub链接" class="social-link">
    <i class="fab fa-github"></i>
    <span class="social-label">@YourGithub</span>
</a>
```

#### 4. 自定义 AI 回复
在 `script.js` 的 `generateAIResponse` 方法中修改回复内容：
```javascript
const responses = {
    greeting: ['你的欢迎语'],
    photo: ['关于摄影的回复'],
    // ... 添加更多
};
```

## 🎨 颜色主题自定义

在 `style.css` 的 `:root` 部分修改颜色变量：

```css
:root {
    --color-bg: #0a0a0a;              /* 主背景色 */
    --color-accent: #d4af37;          /* 强调色（香槟金）*/
    --font-display: 'Your Font';      /* 标题字体 */
    --font-body: 'Your Font';         /* 正文字体 */
}
```

### 推荐配色方案

**方案一：冰川蓝**
```css
--color-accent: #4fc3f7;
--color-accent-glow: rgba(79, 195, 247, 0.3);
```

**方案二：玫瑰金**
```css
--color-accent: #e91e63;
--color-accent-glow: rgba(233, 30, 99, 0.3);
```

**方案三：翡翠绿**
```css
--color-accent: #00bfa5;
--color-accent-glow: rgba(0, 191, 165, 0.3);
```

## 📱 浏览器支持

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 移动端浏览器

## 🛠️ 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代动画和效果
  - Flexbox 布局
  - CSS Grid
  - Backdrop Filter（毛玻璃）
  - CSS Animations
- **Vanilla JavaScript** - 无框架依赖
  - ES6+ 语法
  - 面向对象设计
  - 事件驱动架构

### CDN 资源
- [Google Fonts](https://fonts.google.com/) - 字体
- [Font Awesome 6.4.0](https://fontawesome.com/) - 图标库

## 📂 文件结构

```
.
├── index.html          # 主 HTML 文件
├── style.css           # 样式表
├── script.js           # JavaScript 功能
└── README.md           # 说明文档
```

## 🎯 功能清单

- [x] 响应式导航栏（毛玻璃效果）
- [x] 全屏图片轮播（Ken Burns 动效）
- [x] 自动播放 + 手动控制
- [x] 键盘快捷键支持
- [x] 触摸滑动支持
- [x] 社交媒体链接（悬停动画）
- [x] AI 对话界面（打字机效果）
- [x] 关于我模态框
- [x] 移动端适配
- [x] 性能优化（懒加载）

## 🔧 高级自定义

### 添加更多轮播图片
复制一个 `.carousel-slide` 块并修改内容，然后在 `.carousel-indicators` 中添加对应的指示器：

```html
<!-- 添加新幻灯片 -->
<div class="carousel-slide">
    <div class="slide-image" style="background-image: url('新图片URL');">
    </div>
    <div class="slide-caption">
        <p class="caption-text">标题</p>
        <span class="caption-date">日期</span>
    </div>
</div>

<!-- 添加新指示器 -->
<button class="indicator" data-slide="4"></button>
```

### 集成真实 AI API
如果你想接入真实的 AI 服务（如 OpenAI），在 `script.js` 的 `sendMessage` 方法中添加 API 调用：

```javascript
async sendMessage() {
    const message = this.chatInput.value.trim();
    if (!message) return;
    
    this.addMessage(message, 'user');
    this.chatInput.value = '';
    this.showTyping();
    
    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        
        this.hideTyping();
        this.addMessage(data.reply, 'ai', true);
    } catch (error) {
        this.hideTyping();
        this.addMessage('抱歉，我现在无法回复。', 'ai');
    }
}
```

## 💡 使用建议

1. **图片优化**: 使用 WebP 格式可以减少 30-50% 的文件大小
2. **性能**: 建议轮播图片不超过 8 张，保持页面流畅
3. **内容**: 每张图片的标题保持简短（10-15 字）
4. **SEO**: 修改 `<title>` 和添加 `<meta>` 标签提升搜索排名

## 📄 许可证

MIT License - 自由使用和修改

## 🤝 贡献

欢迎提出建议和改进！

## 📮 联系方式

- 邮箱: your@email.com
- GitHub: @yourusername
- Twitter: @yourtwitter

---

**Made with ❤️ and ☕**

*让每一个像素都充满艺术感*

