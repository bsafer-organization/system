/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text-summary', 'lcov', 'html-spa'],
      all: true,
      exclude: [
        '**/styles.ts',
        'src/components/GuideMachineCreationWindow/index.tsx',
        'src/components/TableItem/*',
        'src/components/Padlock*/*',
        'src/pages/Padlocks/*'
      ],
      include: ['src/components/*', 'src/services/*'],
      enabled: true
    }
  }
})
