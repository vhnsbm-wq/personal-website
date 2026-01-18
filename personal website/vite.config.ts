import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 输出目录
    outDir: 'dist',
    // 生成 source map（生产环境可关闭以减小体积）
    sourcemap: false,
    // 代码分割配置
    rollupOptions: {
      output: {
        // 手动代码分割
        manualChunks: {
          // React 相关库单独打包
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // 动画库单独打包
          'animation-vendor': ['framer-motion'],
        },
        // 文件命名规则
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
      },
    },
    // 压缩配置
    minify: 'esbuild',
    // 压缩后的大小警告阈值（KB）
    chunkSizeWarningLimit: 1000,
    // 启用 CSS 代码分割
    cssCodeSplit: true,
  },
  // 预览服务器配置
  preview: {
    port: 4173,
    strictPort: true,
  },
  // 开发服务器配置
  server: {
    port: 5173,
    strictPort: true,
  },
})
