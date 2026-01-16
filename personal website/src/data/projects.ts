/**
 * 项目数据
 * 存储所有项目信息
 */

export interface Project {
  id: number
  name: string
  description: string
  techStack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: '项目示例 1',
    description: '这是一个示例项目，展示了我的开发能力。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://example.com',
  },
  {
    id: 2,
    name: '项目示例 2',
    description: '另一个示例项目，使用了现代前端技术栈。',
    techStack: ['Vue', 'Node.js', 'MongoDB'],
    link: 'https://example.com',
  },
  {
    id: 3,
    name: '项目示例 3',
    description: '第三个示例项目，展示了全栈开发能力。',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: 'https://example.com',
  },
]

