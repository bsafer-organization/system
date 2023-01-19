import { w, W } from 'windstitch'

export const BoxContainer = w.div(
  `
    flex flex-col justify-center items-start gap-2
  `,
  {
    variants: {
      size: {
        sm: 'p-1',
        md: 'p-2',
        lg: 'p-3',
        xl: 'p-4',
        '2xl': 'p-5',
        '3xl': 'p-6',
        '4xl': 'p-8'
      },
      backgroundColor: (color?: string) => {
        if (color) {
          if (color.slice(0, 3) === 'bg-') {
            return color
          } else {
            return `bg-[${color}]`
          }
        } else {
          return 'bg-black'
        }
      },
      fontColor: (color?: string) => {
        if (color) {
          if (color.slice(0, 5) === 'text-') {
            return color
          } else {
            return `text-[${color}]`
          }
        } else {
          return 'text-white'
        }
      },
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
