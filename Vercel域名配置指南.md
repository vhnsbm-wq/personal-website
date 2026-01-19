# Vercel 域名配置指南

## 问题：配置无效

当在 Vercel 添加域名 `outlook123.cn` 时显示"配置无效"，通常是 DNS 配置问题。

---

## 解决方案

### 步骤 1：在 Vercel 中添加域名

1. **登录 Vercel Dashboard**
   - 访问 [vercel.com](https://vercel.com)
   - 进入你的项目

2. **添加域名**
   - 点击 **Settings** → **Domains**
   - 点击 **Add Domain**
   - 输入：`outlook123.cn`
   - 点击 **Add**

3. **查看 DNS 配置要求**
   - Vercel 会显示需要配置的 DNS 记录
   - 通常有两种方式：
     - **A 记录**（推荐）
     - **CNAME 记录**

---

### 步骤 2：配置 DNS（在域名注册商处）

#### 方法 1：使用 A 记录（推荐）

1. **登录域名注册商**
   - 找到 `outlook123.cn` 的 DNS 管理页面

2. **添加 A 记录**
   
   **对于根域名（outlook123.cn）：**
   ```
   类型：A
   主机记录：@
   记录值：76.76.21.21
   TTL：600（或默认）
   ```

   **对于 www 子域名（www.outlook123.cn）：**
   ```
   类型：CNAME
   主机记录：www
   记录值：cname.vercel-dns.com
   TTL：600（或默认）
   ```

#### 方法 2：使用 CNAME 记录（仅适用于子域名）

如果你想使用 `www.outlook123.cn`：

```
类型：CNAME
主机记录：www
记录值：cname.vercel-dns.com
TTL：600（或默认）
```

> ⚠️ **注意**：根域名（`outlook123.cn`）不能使用 CNAME，必须使用 A 记录。

---

### 步骤 3：常见域名注册商配置示例

#### 阿里云（万网）

1. 登录 [阿里云控制台](https://dns.console.aliyun.com/)
2. 找到 `outlook123.cn`
3. 点击"解析设置"
4. 点击"添加记录"
5. 填写：
   - 记录类型：A
   - 主机记录：@
   - 记录值：76.76.21.21
   - TTL：10 分钟

#### 腾讯云 DNSPod

1. 登录 [DNSPod 控制台](https://console.dnspod.cn/)
2. 找到 `outlook123.cn`
3. 点击"添加记录"
4. 填写：
   - 主机记录：@
   - 记录类型：A
   - 记录值：76.76.21.21
   - TTL：600

#### Cloudflare

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择 `outlook123.cn`
3. 点击 DNS → Add record
4. 填写：
   - Type：A
   - Name：@
   - IPv4 address：76.76.21.21
   - Proxy status：DNS only（灰色云朵）

#### GoDaddy

1. 登录 GoDaddy 账号
2. 进入 DNS 管理
3. 添加记录：
   - Type：A
   - Host：@
   - Points to：76.76.21.21
   - TTL：600 seconds

---

### 步骤 4：验证 DNS 配置

#### 方法 1：使用在线工具

访问以下任一网站检查 DNS：
- [DNS Checker](https://dnschecker.org/)
- [What's My DNS](https://www.whatsmydns.net/)

输入 `outlook123.cn`，检查 A 记录是否指向 `76.76.21.21`

#### 方法 2：使用命令行

**Windows（PowerShell）：**
```powershell
nslookup outlook123.cn
```

**Mac/Linux：**
```bash
dig outlook123.cn
```

应该看到类似这样的结果：
```
outlook123.cn.  600  IN  A  76.76.21.21
```

---

### 步骤 5：在 Vercel 中验证

1. **返回 Vercel Dashboard**
   - 进入项目 → Settings → Domains

2. **等待验证**
   - DNS 生效通常需要几分钟到几小时
   - Vercel 会自动检测 DNS 配置
   - 配置正确后，状态会变为"Valid Configuration"

3. **强制刷新**
   - 如果 DNS 已生效但 Vercel 还显示无效
   - 点击域名旁边的"Refresh"按钮

---

## 常见问题

### Q1: 配置了 DNS 但还是显示无效

**可能原因：**
- DNS 还未生效（需要等待）
- DNS 配置错误
- 域名注册商有特殊限制

**解决方法：**
1. 等待 10-30 分钟后再检查
2. 使用 DNS 检查工具验证配置
3. 确保删除了旧的冲突记录

### Q2: 域名已经在其他地方使用

**错误信息：** "Domain is already in use"

**解决方法：**
1. 从其他平台移除该域名
2. 或使用子域名（如 `www.outlook123.cn`）

### Q3: 根域名无法添加

**解决方法：**
- 根域名必须使用 A 记录
- 不能使用 CNAME 记录
- 确保 A 记录指向 `76.76.21.21`

### Q4: DNS 生效时间太长

**原因：** TTL（生存时间）设置过长

**解决方法：**
1. 将 TTL 设置为较小的值（如 600 秒）
2. 等待旧的 TTL 过期
3. 使用 `ipconfig /flushdns`（Windows）清除本地 DNS 缓存

### Q5: Cloudflare 用户特别注意

如果使用 Cloudflare：
1. 确保代理状态为"DNS only"（灰色云朵）
2. 或者在 Vercel 中使用 Cloudflare 集成

---

## 完整配置检查清单

- [ ] 在 Vercel 中添加了域名
- [ ] 在域名注册商处添加了 A 记录
- [ ] A 记录指向 `76.76.21.21`
- [ ] 主机记录设置为 `@`（根域名）
- [ ] 删除了冲突的旧记录
- [ ] 等待 DNS 生效（10-30 分钟）
- [ ] 使用 DNS 检查工具验证
- [ ] 在 Vercel 中刷新验证状态

---

## 推荐配置

### 同时配置根域名和 www 子域名

```
# 根域名
类型：A
主机记录：@
记录值：76.76.21.21

# www 子域名
类型：CNAME
主机记录：www
记录值：cname.vercel-dns.com
```

这样 `outlook123.cn` 和 `www.outlook123.cn` 都可以访问。

---

## 验证成功的标志

在 Vercel Dashboard 中，域名状态应该显示：
- ✅ Valid Configuration
- 🔒 SSL Certificate: Active

访问 `https://outlook123.cn` 应该能看到你的网站。

---

## 获取帮助

如果按照以上步骤操作后仍然无法配置：

1. **检查 Vercel 状态页**
   - 访问 [Vercel Status](https://www.vercel-status.com/)
   - 查看是否有服务中断

2. **联系 Vercel 支持**
   - 在 Vercel Dashboard 中提交支持请求
   - 提供域名和错误信息

3. **检查域名注册商文档**
   - 不同注册商可能有特殊要求
   - 查看注册商的 DNS 配置文档

---

## 总结

**最常见的问题：**
1. DNS 记录配置错误
2. 使用了 CNAME 而不是 A 记录（根域名）
3. DNS 还未生效（需要等待）

**解决步骤：**
1. 添加 A 记录：`@ → 76.76.21.21`
2. 等待 10-30 分钟
3. 在 Vercel 中刷新验证

现在就去配置 DNS 吧！🚀


