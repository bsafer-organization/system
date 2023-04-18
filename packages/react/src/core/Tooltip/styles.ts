import { twMerge } from 'tailwind-merge'
import { w } from 'windstitch'

export const TooltipContainer = w.div(``, {
  defaultVariants: {
    className: ''
  },
  variants: {
    className: (className?: string) =>
      twMerge(`max-w-md bg-grey-200 rounded-xl p-2 text-grey-800`, className)
  }
})
