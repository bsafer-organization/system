import { w, W } from 'windstitch'
import { PaddingProps, PaddingAll, PaddingOnly } from './index'

export const BoxContainer = w.div(
  `
    flex justify-center gap-2 overflow-hidden
  `,
  {
    variants: {
      padding: (padding: PaddingProps) => {
        if ((<PaddingAll>padding).all) {
          const value = (<PaddingAll>padding).all

          return value.slice(0, 2) === 'p-' ? value : `p-[${value}]`
        } else {
          const paddingOnly = <PaddingOnly>padding

          let paddingTop: string = ''
          let paddingRight: string = ''
          let paddingBottom: string = ''
          let paddingLeft: string = ''
          if (paddingOnly.only.top) {
            paddingTop =
              paddingOnly.only.top.slice(0, 3) === 'pt-'
                ? paddingOnly.only.top
                : `pt-[${paddingOnly.only.top}]`
          }

          if (paddingOnly.only.right) {
            paddingRight =
              paddingOnly.only.right.slice(0, 3) === 'pr-'
                ? paddingOnly.only.right
                : `pr-[${paddingOnly.only.right}]`
          }

          if (paddingOnly.only.bottom) {
            paddingBottom =
              paddingOnly.only.bottom.slice(0, 3) === 'pb-'
                ? paddingOnly.only.bottom
                : `pb-[${paddingOnly.only.bottom}]`
          }

          if (paddingOnly.only.left) {
            paddingLeft =
              paddingOnly.only.left.slice(0, 3) === 'pl-'
                ? paddingOnly.only.left
                : `pl-[${paddingOnly.only.left}]`
          }

          return `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`
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
        md: 'rounded-[0.25rem]',
        lg: 'rounded-md',
        xl: 'rounded-lg',
        '2xl': 'rounded-xl',
        '3xl': 'rounded-2xl',
        '4xl': 'rounded-3xl',
        full: 'rounded-full'
      },
      horizontalAlignment: {
        left: 'items-start',
        center: 'items-center',
        right: 'items-end'
      }
    }
  }
)

export type BoxStyleProps = W.Infer<typeof BoxContainer>
