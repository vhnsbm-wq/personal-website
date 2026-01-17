import { motion } from 'framer-motion'

/**
 * 联系方式组件
 * 展示邮箱、GitHub、社交媒体链接
 */
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 container mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          联系我
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          如果您对我的作品感兴趣，或者想要合作，欢迎通过以下方式联系我。
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* 邮箱 */}
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-80 transition-opacity"
          >
            📧 邮箱
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-80 transition-opacity"
          >
            💻 GitHub
          </a>

          {/* 社交媒体占位 */}
          <a
            href="#"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-80 transition-opacity"
          >
            📱 社交媒体
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
