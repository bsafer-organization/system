import { w } from 'windstitch'

export const PaginationButton = w.button(
  `
    py-1 px-2 bg-transparent border-0 hover:bg-grey-100  font-regular rounded-full disabled:hover:bg-transparent disabled:text-grey-200
  `,
  {
    defaultVariants: {
      isCurrent: false
    },
    variants: {
      isCurrent: (isCurrent: boolean) =>
        isCurrent ? 'text-black' : 'text-grey-500'
    }
  }
)
