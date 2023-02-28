import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  external: ['react'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  minify: true,
  splitting: true,
  onSuccess: 'npx tailwindcss -o ./dist/index.css --minify'
})
