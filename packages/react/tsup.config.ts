import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  external: ['react'],
  format: ['esm', 'cjs'],
  splitting: false,
  onSuccess: 'npx tailwindcss -o ./dist/main.css --minify'
})
