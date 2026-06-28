import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project is served from https://4thwithme.github.io/dropbox-prototype/ on GH Pages,
// so production assets need that base path. Dev stays at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/dropbox-prototype/' : '/',
  plugins: [react()],
  server: { port: 5173, open: true },
}))
