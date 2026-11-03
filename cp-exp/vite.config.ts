import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import browserslistToEsbuild from "browserslist-to-esbuild";

export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [autoprefixer()] } },
  // Keep the existing static deployment directory and browser support policy.
  base: process.env.PUBLIC_URL || "/",
  build: {
    outDir: "build",
    target: browserslistToEsbuild(),
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
  },
});
