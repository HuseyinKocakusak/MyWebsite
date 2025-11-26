import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',             // or '/MyWebsite/' if you deploy under a repo-subpath
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
})
