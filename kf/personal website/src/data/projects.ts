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
    name: '项目示例 1',
    description: '这是一个示例项目，展示了我的开发能力。项目采用现代化的技术栈，实现了流畅的用户体验和优秀的性能表现。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/project1.jpg', // 可以替换为实际图片路径
    link: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 2,
    name: '项目示例 2',
    description: '另一个示例项目，使用了现代前端技术栈。该项目展示了全栈开发能力，包含前端界面和后端API。',
    techStack: ['Vue', 'Node.js', 'MongoDB', 'Express'],
    image: '/project2.jpg', // 可以替换为实际图片路径
    link: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 3,
    name: '项目示例 3',
    description: '第三个示例项目，展示了全栈开发能力。使用 Next.js 构建，实现了服务端渲染和静态生成功能。',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    image: '/project3.jpg', // 可以替换为实际图片路径
    link: 'https://example.com',
    githubLink: 'https://github.com',
  },
]

