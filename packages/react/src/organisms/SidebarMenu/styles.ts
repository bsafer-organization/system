import { w, W } from 'windstitch'

export const RootContainer = w.nav(
  `
  overflow-y-auto overflow-x-hidden
  py-8 px-6

  border-r border-grey-400
`,
  {}
)

export const ItemsWrapper = w.ul(
  `
  flex flex-col gap-6
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
  transition-colors
`,
  {
    variants: {
      focusColor: {
        primary: '',
        secondary: '',
        default: ''
      },
      isActive: (isActive: boolean) =>
        isActive ? '' : `text-grey-700 hover:bg-grey-100`
    },
    defaultVariants: {
      isActive: true,
      focusColor: 'primary'
    },
    compoundVariants: [
      {
        focusColor: 'primary',
        isActive: true,
        class: 'bg-primary-main text-white'
      },
      {
        focusColor: 'secondary',
        isActive: true,
        class: 'bg-secondary-main text-black'
      },
      {
        focusColor: 'default',
        isActive: true,
        class: 'bg-black text-white'
      }
    ]
  }
)

export type RootContainerProps = W.Infer<typeof RootContainer>
export type ItemContainerProps = W.Infer<typeof ItemContainer>
export type ItemLinkProps = W.Infer<typeof ItemLink>
