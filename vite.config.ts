import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  base: '/',             // or '/MyWebsite/' if you deploy under a repo-subpath
  build: {
    outDir: 'docs',
    // The SSR bundle is only used by scripts/prerender.mjs and is not deployed.
    copyPublicDir: !isSsrBuild,
  },
  plugins: [react()]
}))
