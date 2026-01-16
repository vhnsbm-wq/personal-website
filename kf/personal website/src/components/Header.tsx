import { useState, useEffect } from 'react'

/**
 * 网站头部导航组件
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            个人作品集
          </div>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-blue-400 transition-colors"
            >
              首页
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-400 transition-colors"
            >
              关于我
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-blue-400 transition-colors"
            >
              项目
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-blue-400 transition-colors"
            >
              联系
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

