/**
 * 项目数据
 * 存储所有项目信息
 */

export interface Project {
  id: number
  name: string
  description: string
  techStack: string[]
  image?: string // 项目截图路径
  link?: string
  githubLink?: string // GitHub 链接（可选）
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Markdown 编辑器',
    description: '一个功能强大的在线 Markdown 编辑器，支持实时预览、语法高亮和导出功能。提供简洁的用户界面和流畅的编辑体验。',
    techStack: ['React', 'TypeScript', 'Markdown', 'Vite'],
    image: '/markdown-editor.jpg', // 可以替换为实际截图
    link: 'https://markdown-4qesqx0pw-dizhengs-projects.vercel.app/',
    githubLink: 'https://github.com/dizheng/markdown-editor', // 替换为你的 GitHub 仓库地址
  },
  {
    id: 2,
    name: 'Markdown 编辑器',
    description: '另一个示例项目，使用了现代前端技术栈。该项目展示了全栈开发能力，包含前端界面和后端API。',
    techStack: ['Vue', 'Node.js', 'MongoDB', 'Express'],
    image: '/project2.jpg', // 可以替换为实际图片路径
    link: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 3,
    name: 'Markdown 编辑器',
    description: '第三个示例项目，展示了全栈开发能力。使用 Next.js 构建，实现了服务端渲染和静态生成功能。',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    image: '/project3.jpg', // 可以替换为实际图片路径
    link: 'https://example.com',
    githubLink: 'https://github.com',
  },
]
