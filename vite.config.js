import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MyWebsite/"   // must match my GitHub repo name
  // Serve assets from the site root for the custom domain and GitHub Pages
  base: "/",
  // Use relative asset paths so the site works on the custom domain and GitHub Pages
  base: "./",
  // Serve assets from the root so the custom domain (huseyinkocakusak.com) resolves correctly
  base: "/",
  base: "/MyWebsite/", // must match my GitHub repo name
  build: {
    outDir: "docs",
  },
});
