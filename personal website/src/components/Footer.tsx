/**
 * 网站底部组件
 */
const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} 个人作品集. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

