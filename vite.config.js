/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH,
  build: {
    outDir: 'docs',
  },
  plugins: [react(), tailwindcss()],
})
