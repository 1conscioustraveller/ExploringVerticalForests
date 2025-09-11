import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/my-particle-text-effect/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": '/src',
    },
  },
});
