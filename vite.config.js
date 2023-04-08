import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/IOS-Clock-Clone-React",
  plugins: [react()],
})
