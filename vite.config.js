import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Serve assets from the site root for the custom domain and GitHub Pages
  base: "/",
  build: {
    outDir: "docs",
  },
});
