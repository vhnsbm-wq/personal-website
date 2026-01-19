import { motion } from 'framer-motion'
import { skills } from '../data/skills'

/**
 * 关于我组件
 * 展示详细介绍和技能列表
 */
const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 container mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          关于我！
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            我是一名充满热情的前端开发者，专注于使用现代技术栈构建优秀的用户体验。
            我喜欢将创意转化为现实，并不断学习新的技术和最佳实践。
          </p>

          <h3 className="text-2xl font-semibold mb-6">技能</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500 transition-colors text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
