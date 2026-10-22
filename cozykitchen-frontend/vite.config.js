import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le proxy redirige /api vers le backend Express (port 5000 à adapter)
export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': 'http://localhost:5000' } },
})
