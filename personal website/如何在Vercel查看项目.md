# 如何在 Vercel 上查看项目

## 前提条件

项目必须先部署到 Vercel。如果还没有部署，请先查看 [VERCEL_部署教程.md](./VERCEL_部署教程.md)

## 方法 1：通过 Vercel Dashboard 查看（推荐）

### 步骤：

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用你的账号登录（GitHub/GitLab/Bitbucket/Email）

2. **找到你的项目**
   - 登录后会看到所有项目列表
   - 找到你的项目（如：`personal-portfolio`）
   - 点击项目卡片

3. **查看部署 URL**
   - 在项目页面顶部会显示部署状态
   - 看到类似这样的 URL：
     ```
     https://your-project-name.vercel.app
     ```
   - 点击 URL 或 "Visit" 按钮即可查看网站

4. **查看所有部署**
   - 点击 "Deployments" 标签
   - 可以看到所有的部署历史
   - 每个部署都有独立的预览 URL

### 部署 URL 格式

- **生产环境 URL**：`https://项目名.vercel.app`
- **预览环境 URL**：`https://项目名-分支名-用户名.vercel.app`

---

## 方法 2：通过 Git 提交记录查看

如果你通过 GitHub 部署：

1. **在 GitHub 仓库中**
   - 进入你的项目仓库
   - 查看最近的提交（Commits）

2. **查看部署状态**
   - 每个提交旁边会有一个状态图标
   - ✅ 绿色勾：部署成功
   - 🟡 黄色圆点：正在部署
   - ❌ 红色叉：部署失败

3. **点击状态图标**
   - 会显示部署详情
   - 点击 "View deployment" 查看网站

---

## 方法 3：通过 Vercel CLI 查看

如果你使用命令行部署：

### 查看项目列表

```bash
vercel ls
```

这会显示所有项目和最近的部署。

### 查看特定项目

```bash
# 在项目目录中运行
vercel inspect
```

这会显示：
- 项目名称
- 部署 URL
- 部署状态
- 构建时间
- 等信息

### 直接打开项目

```bash
# 在项目目录中运行
vercel open
```

这会在浏览器中打开项目的 Vercel Dashboard。

---

## 方法 4：通过邮件通知查看

Vercel 会在每次部署后发送邮件通知：

1. **检查邮箱**
   - 查找来自 Vercel 的邮件
   - 主题类似："Deployment ready for your-project"

2. **点击邮件中的链接**
   - 邮件中会包含部署 URL
   - 点击即可查看网站

---

## 快速查看指南

### 如果你刚刚部署完成

1. 部署成功后，Vercel 会显示一个成功页面
2. 页面上会显示你的部署 URL
3. 点击 URL 即可查看

### 如果你之前部署过

1. 登录 [vercel.com](https://vercel.com)
2. 在项目列表中找到你的项目
3. 点击项目名称
4. 点击顶部的 URL 或 "Visit" 按钮

---

## 常见问题

### Q1: 找不到我的项目

**可能原因：**
- 项目还没有部署
- 使用了不同的账号登录
- 项目在团队账号下

**解决方法：**
1. 确认使用正确的账号登录
2. 检查是否在团队账号下（切换账号）
3. 如果还没部署，先部署项目

### Q2: 部署 URL 打不开

**可能原因：**
- 部署失败
- 网络问题
- DNS 未生效（自定义域名）

**解决方法：**
1. 检查部署状态（在 Vercel Dashboard 中）
2. 查看构建日志是否有错误
3. 如果是自定义域名，等待 DNS 生效（可能需要几小时）

### Q3: 看到的是旧版本

**解决方法：**
1. 清除浏览器缓存（Ctrl + Shift + Delete）
2. 强制刷新（Ctrl + F5）
3. 检查是否部署了最新代码

### Q4: 部署成功但显示 404

**解决方法：**
1. 检查 `vercel.json` 配置是否正确
2. 确保路由重写规则已配置
3. 查看 [VERCEL_部署教程.md](./VERCEL_部署教程.md) 中的"常见问题"部分

---

## 分享你的网站

### 获取分享链接

1. 登录 Vercel Dashboard
2. 进入项目页面
3. 复制顶部的 URL
4. 分享给其他人

### URL 格式

- **生产环境**：`https://your-project.vercel.app`
- **自定义域名**：`https://www.yourdomain.com`（如果已配置）

### 分享预览部署

如果你想分享特定的预览部署：

1. 进入 "Deployments" 标签
2. 找到要分享的部署
3. 复制该部署的 URL
4. 分享给其他人

---

## 监控和分析

### 查看访问统计

1. 在项目 Dashboard 中
2. 点击 "Analytics" 标签
3. 查看：
   - 访问量
   - 页面浏览量
   - 访客来源
   - 等数据

### 查看性能指标

1. 在项目 Dashboard 中
2. 点击 "Speed Insights" 标签
3. 查看：
   - Core Web Vitals
   - 页面加载速度
   - 性能评分

---

## 快速命令参考

```bash
# 查看项目列表
vercel ls

# 查看项目详情
vercel inspect

# 在浏览器中打开项目
vercel open

# 查看部署日志
vercel logs
```

---

## 总结

### 最简单的方法：

1. 访问 [vercel.com](https://vercel.com)
2. 登录你的账号
3. 找到你的项目
4. 点击项目 URL

### 如果还没有部署：

请先查看 [VERCEL_部署教程.md](./VERCEL_部署教程.md) 完成部署。

---

## 相关文档

- [VERCEL_部署教程.md](./VERCEL_部署教程.md) - 如何部署到 Vercel
- [如何查看项目.md](./如何查看项目.md) - 如何在本地查看项目
- [README.md](./README.md) - 项目说明

现在就去 [vercel.com](https://vercel.com) 查看你的项目吧！🚀


