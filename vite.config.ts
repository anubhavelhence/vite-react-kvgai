import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),cloudflare()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/react-app'),
    },
  },
});
