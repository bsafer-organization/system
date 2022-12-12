import { Config } from 'tailwindcss'
import { defaultTailwindTheme } from "./theme"

export function tailwindCssResolver(tailwindConfig: Config) {
  if (tailwindConfig) {
    return Object.assign(defaultTailwindTheme, tailwindConfig)
  }

  return defaultTailwindTheme
}