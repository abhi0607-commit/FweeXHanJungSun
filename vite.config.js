import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  // Image and video files can be locked by Windows while they are being copied into this folder,
  // which crashes the file watcher. They don't need live reload, so the watcher skips them.
  server: {
    watch: {
      ignored: ['**/*.{png,jpg,jpeg,webp,gif,mov,mp4,webm,pdf}', '**/dist/**'],
    },
  },
})
