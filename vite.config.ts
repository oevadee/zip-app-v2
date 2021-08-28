import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: `http://${process.env.VITE_API_HOST}/`,
        changeOrigin: true,
      },
    },
  },
});
