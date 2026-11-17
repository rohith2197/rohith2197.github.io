import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const inferredPagesBase = repository && !repository.endsWith(".github.io") ? `/${repository}/` : "/";
const base = process.env.VITE_BASE_PATH || inferredPagesBase;

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    sourcemap: false,
    outDir: "dist",
  },
});
