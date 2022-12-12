import { W, w } from 'windstitch'
import { textColors } from '../../helpers'

export const HeadingElement = w.h2('', {
  defaultVariants: {
    weight: 'bold',
    color: 'inherit'
  },
  variants: {
    weight: {
      black: 'font-black',
      bold: 'font-bold',
      regular: 'font-regular'
    },
    color: textColors
  }
})

export type HeadingElementProps = W.Infer<typeof HeadingElement>
