import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Serve assets from the root so the custom domain (huseyinkocakusak.com) resolves correctly
  base: "/",
  base: "/MyWebsite/", // must match my GitHub repo name
  build: {
    outDir: "docs",
  },
});
