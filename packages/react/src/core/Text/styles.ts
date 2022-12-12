import { W, w } from 'windstitch'
import { textColors } from '../../helpers'

export const TextElement = w.span('', {
  defaultVariants: {
    size: 'md',
    weight: 'regular',
    color: 'inherit'
  },
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md ',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl'
    },
    weight: {
      light: 'font-light',
      regular: 'font-regular',
      bold: 'font-bold'
    },
    color: textColors
  }
})

export type TextElementProps = W.Infer<typeof TextElement>
