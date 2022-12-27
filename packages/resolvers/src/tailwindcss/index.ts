import { mergeDeepRight } from 'ramda'
import { Config } from 'tailwindcss'
import { defaultTailwindTheme } from "./theme"

type CustomConfig = Omit<Config, 'content' | 'plugins'> & {
  content?: string[],
  plugins?: string[],
}

export function tailwindCssResolver(tailwindConfig: CustomConfig) {
  if (tailwindConfig) {
    const configPlugins = tailwindConfig.plugins || []
    const configContent = tailwindConfig.content || []
    const configTheme = tailwindConfig.theme || {}

    return {
      ...tailwindConfig,
      content: [...defaultTailwindTheme.content, ...configContent],
      darkMode: tailwindConfig.darkMode,
      plugins: [...defaultTailwindTheme.plugins, ...configPlugins],
      theme: mergeDeepRight(defaultTailwindTheme.theme, configTheme),
    }
  }

  return defaultTailwindTheme
}