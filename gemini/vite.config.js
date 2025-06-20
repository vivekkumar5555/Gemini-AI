import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", 
    emptyOutDir: true,
  },
  base: "https://github.com/vivekkumar5555/Gemin-clone",
});
