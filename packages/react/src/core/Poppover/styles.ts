import { twMerge } from 'tailwind-merge'
import { w } from 'windstitch'

export const PopoverBox = w.div(``, {
  variants: {
    className: (className: string) =>
      twMerge(
        `
        bg-white p-6 rounded shadow-xl
      `,
        className
      )
  }
})
