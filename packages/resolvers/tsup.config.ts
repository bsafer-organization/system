import { defineConfig } from 'tsup';

const unixCommand = 'mkdir -p ./dist/styles && cp ./src/tailwindcss/main.css ./dist/styles/tailwindcss.css'

const windowsCommand = 'mkdir dist\\styles & copy src\\tailwindcss\\main.css dist\\styles\\tailwindcss.css'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  splitting: false,
  clean: true,
  onSuccess: process.platform === 'win32' ? windowsCommand : unixCommand
})