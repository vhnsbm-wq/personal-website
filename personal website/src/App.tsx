import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

// 懒加载组件以优化首屏加载
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

/**
 * 加载中占位组件
 */
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
)

/**
 * 主应用组件
 * 使用 React Router 进行路由管理
 * 优化：使用懒加载减少初始包大小
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
