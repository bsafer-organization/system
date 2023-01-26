import { TextProps } from '@bsafer-system/react'
import { PropsToArray } from './propsToArray'

interface CommonArgsType {
  allColors: PropsToArray<TextProps['color']>
}

export const commonArgs: CommonArgsType = {
  allColors: [
    'inherit',
    'black',
    'white',
    'background',
    'transparent',
    'primary-main',
    'secondary-main',
    'assistant-blue-main',
    'assistant-blue-light',
    'assistant-blue-dark',
    'assistant-green-main',
    'assistant-green-light',
    'assistant-green-dark',
    'assistant-yellow-main',
    'assistant-yellow-light',
    'assistant-yellow-dark',
    'assistant-red-main',
    'assistant-red-light',
    'assistant-red-dark',
    'grey-900',
    'grey-800',
    'grey-700',
    'grey-600',
    'grey-500',
    'grey-400',
    'grey-300',
    'grey-200',
    'grey-100'
  ]
}
