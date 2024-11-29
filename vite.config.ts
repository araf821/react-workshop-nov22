import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-workshop-nov22",
  plugins: [react()],
});
