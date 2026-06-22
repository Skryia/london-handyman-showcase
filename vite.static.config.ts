// Pure static SPA build for GitHub Pages — independent of TanStack Start.
// Build:   bun run build:static
// Output:  dist-static/  (deploy this folder to GitHub Pages)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Use "./" so the build works under any GitHub Pages subpath
// (user/organization page OR project page like /<repo>/).
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
  },
});
