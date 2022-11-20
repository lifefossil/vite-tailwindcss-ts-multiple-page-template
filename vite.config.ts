import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const pages = resolve(root, 'pages')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(pages, 'index', 'index.html'),     
        keyword: resolve(pages, 'about', 'about.html'), 
    }
    }
  }
})