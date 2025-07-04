import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pyb_portfolio/', // GitHub Pages 주소에 맞게

  plugins: [react()] // dist 폴더로 빌드할려면 이것만 남겨야됨.

  , build: {
    outDir: '../docs', // 루트에 docs 폴더 생성
  },
})
