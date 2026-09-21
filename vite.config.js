import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change 'base' to '/<your-repo-name>/' when you deploy to GitHub Pages,
// e.g. base: '/portfolio/'  ->  https://<username>.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: "/",
});
