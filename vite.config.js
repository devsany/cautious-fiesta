import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global variables like `describe` and `it`
    environment: "jsdom", // Simulates a browser-like environment
    setupFiles: "./test/setup.js", // Optional: Add setup file for global configurations
  },
});
