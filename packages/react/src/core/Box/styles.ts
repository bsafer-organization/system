import { w, W } from 'windstitch'
import { PaddingProps, PaddingAll, PaddingOnly } from './index'

export const BoxContainer = w.div(
  `
    flex flex-col justify-center items-start gap-2
  `,
  {
    variants: {
      padding: (padding: PaddingProps) => {
        if ((<PaddingAll>padding).all) {
          const value = (<PaddingAll>padding).all

          return value.slice(0, 2) === 'p-' ? value : `p-[${value}]`
        } else {
          console.log((<PaddingOnly>padding).only.top)

          const top =
            (<PaddingOnly>padding).only.top.slice(0, 3) === 'pt-'
              ? (<PaddingOnly>padding).only.top
              : `pt-[${(<PaddingOnly>padding).only.top}]`
          const right =
            (<PaddingOnly>padding).only.right.slice(0, 3) === 'pr-'
              ? (<PaddingOnly>padding).only.right
              : `pr-[${(<PaddingOnly>padding).only.right}]`
          const bottom =
            (<PaddingOnly>padding).only.bottom.slice(0, 3) === 'pb-'
              ? (<PaddingOnly>padding).only.bottom
              : `pb-[${(<PaddingOnly>padding).only.bottom}]`
          const left =
            (<PaddingOnly>padding).only.left.slice(0, 3) === 'pl-'
              ? (<PaddingOnly>padding).only.left
              : `pl-[${(<PaddingOnly>padding).only.left}]`

          return `${top} ${right} ${bottom} ${left}`
        }
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
