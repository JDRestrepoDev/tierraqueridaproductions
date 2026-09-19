import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uppercase extensions are not in Vite's default asset list
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
})
