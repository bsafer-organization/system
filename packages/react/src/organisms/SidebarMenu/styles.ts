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
      isOpen: (isOpen: boolean) => (isOpen ? 'min-w-[16rem]' : `w-[5rem]`)
    },
    defaultVariants: {
      isOpen: true
    }
  }
)

export const AbsoluteContainer = w.div(
  `
  absolute top-0 left-0
  w-full h-full overflow-hidden
  flex flex-col gap-8
  py-8

  transition-all
`,
  {
    variants: {
      isRootContainerOpen: (isRootContainerOpen: boolean) =>
        isRootContainerOpen
          ? 'min-w-[16rem] px-6 [&_ul]:items-start'
          : 'w-[5rem] px-2 [&_ul]:items-center'
    },
    defaultVariants: {
      isRootContainerOpen: true
    }
  }
)

export const ListContainer = w.ul(
  `
  w-full flex-1 overflow-y-auto overflow-x-hidden
  flex flex-col gap-6

  transition-all
`,
  {}
)

export const FooterContainer = w.ul(
  `
  w-full
  flex flex-col gap-6

  transition-all
`,
  {}
)

export const ItemContainer = w.li('', {})

export const ItemLink = w.button(
  `
  flex items-center justify-start gap-2
  min-h-[2.5rem]
  py-2 px-4 rounded-full

  focus-visible:ring-1 focus-visible:ring-black
  
  text-left
  transition-colors
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
      isActive: false,
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
