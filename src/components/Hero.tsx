import { motion } from 'framer-motion'

/**
 * 首页 Hero 区域组件
 * 包含大标题、简介和头像
 * 使用 Tailwind CSS 实现深色主题和渐变色效果
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 bg-background overflow-hidden"
    >
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* 头像 */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="relative">
            {/* 渐变边框 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-background"></div>
            </div>
            {/* 头像容器 */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-blue-500/30 flex items-center justify-center overflow-hidden">
              {/* 头像图片占位 - 可以替换为实际图片 */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/30 to-purple-600/30">
                <span className="text-6xl md:text-7xl">👨‍💻</span>
              </div>
              {/* 或者使用实际图片：
              <img 
                src="/avatar.jpg" 
                alt="头像" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              */}
            </div>
            {/* 装饰性光晕效果 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10"></div>
          </div>
        </motion.div>

        {/* 大标题 */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            你好，我是
          </span>
          <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            前端开发者
          </span>
        </motion.h1>

        {/* 简介 */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 leading-relaxed">
            专注于创建
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
              {' '}美观且功能强大{' '}
            </span>
            的 Web 应用
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            热爱编程，追求卓越的用户体验，致力于将创意转化为现实
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
