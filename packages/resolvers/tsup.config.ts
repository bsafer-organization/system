import { defineConfig } from 'tsup';

function onSuccessCommands(commands: string[]): string {
  return commands.join(' && ')
}

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm', 'cjs'],
  splitting: false,
  clean: true,
  onSuccess: onSuccessCommands([
    'mkdir -p ./dist/styles',
    'cp ./src/tailwindcss/main.css ./dist/styles/tailwindcss.css'
  ])
})