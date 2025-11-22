import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use the site root for custom domain deployments so bundled assets resolve correctly
  base: "/"
});
