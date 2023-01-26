import { w, W } from 'windstitch'
import { backgroundColors, textColors } from '../../helpers'
import { onlyBoxPaddingTokens } from './helper/onlyBoxPaddingTokens'

export const BoxContainer = w.div(
  `
  `,
  {
    defaultVariants: {
      padding: 'p-2'
    },
    variants: {
      padding: onlyBoxPaddingTokens,
      backgroundColor: backgroundColors,
      color: textColors,
      borderRadius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-md',
        xl: 'rounded-lg',
        '2xl': 'rounded-xl',
        '3xl': 'rounded-2xl',
        '4xl': 'rounded-3xl',
        full: 'rounded-full'
      }
    }
  }
)

export type BoxStyleProps = W.Infer<typeof BoxContainer>
