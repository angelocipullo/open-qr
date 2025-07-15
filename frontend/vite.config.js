import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ _command, mode }) => {
  return {
    plugins: [react()],
    build: {
      outDir: resolve(__dirname, '../public/dist'),
      emptyOutDir: true,
    },
    server: {
      proxy: {
        '/generate': 'http://localhost:3000'
      }
    },
    // Assicurati che le risorse vengano caricate correttamente
    base: mode === 'production' ? '/' : '/'
  }
})
