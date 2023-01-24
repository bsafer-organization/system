import { w, W } from 'windstitch'
import { Text } from '../../core/Text'

export const RootContainer = w.nav(
  `
  relative w-full h-full overflow-hidden

  flex flex-col justify-start

  border-r border-grey-400

  transition-all
`,
  {
    variants: {
      isContracted: (isContracted: boolean) =>
        isContracted
          ? `w-[5.5rem] [&_.sidebar-text-menu]:hidden [&_.sidebar-item-menu]:py-[0.6563rem] [&_.sidebar-item-menu]:px-3`
          : 'min-w-[16rem]'
    },
    defaultVariants: {
      isContracted: true
    }
  }
)

export const ItemsWrapper = w.ul(
  `
  absolute top-0 left-0
  h-full min-w-[16rem] overflow-y-auto
  flex flex-col gap-6
  pt-8 px-6
`,
  {}
)

export const ItemContainer = w.li('', {})

export const ItemLink = w.button(
  `
  flex items-center justify-start gap-2
  min-h-[2.5rem]
  py-2 px-4 rounded-full
  
  text-left
  transition-all
`,
  {
    variants: {
      focusColor: {
        primary: '',
        secondary: '',
        black: ''
      },
      isActive: (isActive: boolean) =>
        !isActive ? `text-grey-700 hover:bg-grey-100` : ''
    },
    defaultVariants: {
      isActive: true,
      focusColor: 'primary'
    },
    compoundVariants: [
      {
        focusColor: 'primary',
        // @ts-ignore
        isActive: true,
        class: 'bg-primary-main text-white'
      },
      {
        focusColor: 'secondary',
        // @ts-ignore
        isActive: true,
        class: 'bg-secondary-main text-black'
      },
      {
        focusColor: 'black',
        // @ts-ignore
        isActive: true,
        class: 'bg-black text-white'
      }
    ]
  }
)

export const TextMenu = w(Text, {
  defaultProps: {
    size: 'sm'
  }
})

export type RootContainerProps = W.Infer<typeof RootContainer>
export type ItemContainerProps = W.Infer<typeof ItemContainer>
export type ItemLinkProps = W.Infer<typeof ItemLink>
