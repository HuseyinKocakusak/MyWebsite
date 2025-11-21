import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so the site works on the custom domain and GitHub Pages
  base: "./",
  build: {
    outDir: "docs",
  },
});
