// ==========================================
// 轮播功能
// ==========================================
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        // 绑定控制按钮
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // 绑定指示器
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // 键盘控制
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // 触摸滑动支持
        this.setupTouchEvents();
        
        // 自动播放
        this.startAutoPlay();
        
        // 鼠标悬停时暂停
        const carouselEl = document.getElementById('carousel');
        carouselEl.addEventListener('mouseenter', () => this.stopAutoPlay());
        carouselEl.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    goToSlide(index) {
        // 移除当前活动状态
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // 设置新的活动状态
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
        
        // 重新触发 Ken Burns 动画
        const slideImage = this.slides[this.currentSlide].querySelector('.slide-image');
        slideImage.style.animation = 'none';
        setTimeout(() => {
            slideImage.style.animation = '';
        }, 10);
    }
    
    next() {
        const nextSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextSlide);
    }
    
    prev() {
        const prevSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevSlide);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), 6000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        const carouselEl = document.getElementById('carousel');
        
        carouselEl.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carouselEl.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) this.next();
            if (touchEndX > touchStartX + 50) this.prev();
        };
        
        this.handleSwipe = handleSwipe;
    }
}

// ==========================================
// 导航栏滚动效果
// ==========================================
class Header {
    constructor() {
        this.header = document.getElementById('header');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        });
    }
}

// ==========================================
// AI 对话功能
// ==========================================
class ChatBot {
    constructor() {
        this.chatContainer = document.getElementById('chatContainer');
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.chatSend = document.getElementById('chatSend');
        this.chatClose = document.getElementById('chatClose');
        this.floatingBtn = document.getElementById('floatingBtn');
        this.aiToggle = document.getElementById('aiToggle');
        this.typingIndicator = document.getElementById('typingIndicator');
        
        this.init();
    }
    
    init() {
        // 打开/关闭对话框
        this.floatingBtn.addEventListener('click', () => this.toggleChat());
        this.aiToggle.addEventListener('click', () => this.toggleChat());
        this.chatClose.addEventListener('click', () => this.closeChat());
        
        // 发送消息
        this.chatSend.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // 点击外部关闭
        document.addEventListener('click', (e) => {
            if (this.chatContainer.classList.contains('active') &&
                !this.chatContainer.contains(e.target) &&
                !this.floatingBtn.contains(e.target) &&
                !this.aiToggle.contains(e.target)) {
                this.closeChat();
            }
        });
    }
    
    toggleChat() {
        this.chatContainer.classList.toggle('active');
        if (this.chatContainer.classList.contains('active')) {
            this.chatInput.focus();
        }
    }
    
    closeChat() {
        this.chatContainer.classList.remove('active');
    }
    
    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
        
        // 添加用户消息
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        
        // 显示打字指示器
        this.showTyping();
        
        // 模拟 AI 回复（延迟 1-2 秒）
        setTimeout(() => {
            this.hideTyping();
            const aiResponse = this.generateAIResponse(message);
            this.addMessage(aiResponse, 'ai', true);
        }, 1000 + Math.random() * 1000);
    }
    
    addMessage(text, sender, typewriter = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        if (sender === 'ai') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <img src="https://ui-avatars.com/api/?name=Your+Name&background=d4af37&color=1a1a1a&size=32" alt="AI">
                </div>
                <div class="message-content">
                    <p></p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-avatar">U</div>
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
        
        // 打字机效果
        if (typewriter && sender === 'ai') {
            const contentP = messageDiv.querySelector('.message-content p');
            this.typeWriter(contentP, text, 30);
        } else if (sender === 'ai') {
            messageDiv.querySelector('.message-content p').textContent = text;
        }
    }
    
    typeWriter(element, text, speed) {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                this.scrollToBottom();
                setTimeout(type, speed);
            }
        };
        
        type();
    }
    
    showTyping() {
        this.typingIndicator.classList.add('active');
        this.scrollToBottom();
    }
    
    hideTyping() {
        this.typingIndicator.classList.remove('active');
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    generateAIResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // 简单的关键词匹配回复系统
        const responses = {
            greeting: [
                '你好！很高兴与你交流。有什么我可以帮助你的吗？',
                '嗨！欢迎来到我的个人空间。',
                '你好呀！今天想聊些什么？'
            ],
            photo: [
                '这些照片都是我在旅行中拍摄的。每一张都承载着独特的故事和情感。你对哪张照片感兴趣呢？',
                '摄影是我记录世界的方式。通过镜头，我试图捕捉那些转瞬即逝的美好瞬间。',
                '我热爱用相机讲述故事。每个地方都有它独特的光影和氛围。'
            ],
            contact: [
                '你可以通过页面底部的社交媒体链接联系我，或者直接发邮件到 your@email.com',
                '很高兴你想联系我！你可以在 GitHub、Twitter 或 Instagram 上找到我。',
                '欢迎通过任何社交平台与我交流！我的联系方式都在页面底部。'
            ],
            work: [
                '我是一名全栈开发者和摄影师，热衷于将技术与艺术结合。',
                '我的工作涉及 Web 开发、UI/UX 设计以及视觉创作。',
                '我喜欢创造既美观又实用的数字产品。'
            ],
            location: [
                '我目前在中国工作和生活，但经常旅行到世界各地寻找灵感。',
                '虽然我基于中国，但我的镜头遍布全球各个角落。'
            ],
            default: [
                '这是个有趣的问题！你想了解更多关于我的摄影作品、技术项目，还是其他方面？',
                '我很乐意和你聊这个话题。你还想知道些什么？',
                '感谢你的提问！如果你想了解我的作品或联系方式，随时告诉我。',
                '有趣的想法！我主要专注于摄影和 Web 开发。你对哪方面更感兴趣？'
            ]
        };
        
        // 关键词匹配
        if (lowerMessage.match(/你好|hi|hello|嗨|hey/)) {
            return this.randomResponse(responses.greeting);
        } else if (lowerMessage.match(/照片|摄影|拍摄|相机|图片|picture|photo/)) {
            return this.randomResponse(responses.photo);
        } else if (lowerMessage.match(/联系|邮箱|email|社交|微信|wechat|contact/)) {
            return this.randomResponse(responses.contact);
        } else if (lowerMessage.match(/工作|职业|做什么|开发|developer|work/)) {
            return this.randomResponse(responses.work);
        } else if (lowerMessage.match(/哪里|位置|地点|location|where/)) {
            return this.randomResponse(responses.location);
        } else {
            return this.randomResponse(responses.default);
        }
    }
    
    randomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// ==========================================
// 关于我模态框
// ==========================================
class AboutModal {
    constructor() {
        this.modal = document.getElementById('aboutModal');
        this.aboutBtn = document.getElementById('aboutBtn');
        this.modalClose = document.getElementById('modalClose');
        
        this.init();
    }
    
    init() {
        this.aboutBtn.addEventListener('click', () => this.openModal());
        this.modalClose.addEventListener('click', () => this.closeModal());
        
        // 点击背景关闭
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // ESC 键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openModal() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==========================================
// 页面加载动画
// ==========================================
class PageLoader {
    constructor() {
        this.init();
    }
    
    init() {
        // 页面加载完成后的淡入效果
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });
        
        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ==========================================
// 性能优化 - 图片懒加载
// ==========================================
class LazyLoader {
    constructor() {
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ==========================================
// 鼠标跟随效果（可选）
// ==========================================
class CursorEffect {
    constructor() {
        this.cursor = null;
        this.init();
    }
    
    init() {
        // 创建自定义光标（仅在桌面端）
        if (window.innerWidth > 768) {
            this.createCursor();
        }
    }
    
    createCursor() {
        // 可以添加自定义光标效果
        // 这里保持简单，不添加过于复杂的效果
    }
}

// ==========================================
// 初始化所有功能
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化各个模块
    const carousel = new Carousel();
    const header = new Header();
    const chatBot = new ChatBot();
    const aboutModal = new AboutModal();
    const pageLoader = new PageLoader();
    const lazyLoader = new LazyLoader();
    
    // 添加一些交互反馈
    console.log('%c光影与回响 | Visual & Echo', 'font-size: 20px; font-weight: bold; color: #d4af37;');
    console.log('%c欢迎来到我的个人空间 ✨', 'font-size: 14px; color: #b0b0b0;');
    
    // 性能监控（开发用）
    if (window.performance) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`页面加载时间: ${pageLoadTime}ms`);
        });
    }
});

// ==========================================
// 工具函数
// ==========================================

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 随机数生成
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 元素淡入动画
function fadeIn(element, duration = 400) {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    let start = null;
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 1);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// 元素淡出动画
function fadeOut(element, duration = 400) {
    let start = null;
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.max(1 - progress / duration, 0);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
        }
    }
    
    requestAnimationFrame(animate);
}

// 检测移动设备
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 平滑滚动到顶部
function scrollToTop(duration = 500) {
    const start = window.pageYOffset;
    const startTime = performance.now();
    
    function scroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        window.scrollTo(0, start * (1 - progress));
        
        if (progress < 1) {
            requestAnimationFrame(scroll);
        }
    }
    
    requestAnimationFrame(scroll);
}

