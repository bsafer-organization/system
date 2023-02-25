import { twMerge } from 'tailwind-merge'
import { w } from 'windstitch'

export const Container = w.div('', {
  defaultVariants: {
    className: ''
  },
  variants: {
    className: (className?: string) =>
      twMerge('w-full flex flex-col bg-transparent', className)
  }
})

export const List = w.ul('w-full rounded flex flex-col gap-2', {
  defaultVariants: {
    isDraggingOver: false,
    error: false
  },
  variants: {
    isDraggingOver: (isDragging?: boolean) =>
      isDragging ? 'p-1 border-2 border-grey-700 border-dashed' : '',
    error: (error?: boolean) =>
      error ? 'p-1 ring-1 ring-assistant-red-main' : ''
  }
})

export const ItemContent = w.li(
  'w-full min-w-[4rem] gap-2 flex items-center rounded focus-within:ring-1 ring-black',
  {}
)

export const SelectWithDrapIconContainer = w.div(
  'w-full rounded flex-1 flex gap-2 p-2',
  {
    defaultVariants: {
      isDragging: false,
      disabled: false,
      error: false
    },
    variants: {
      disabled: (disabled?: boolean) => (disabled ? '' : ''),
      isDragging: (isDragging?: boolean) =>
        isDragging ? 'shadow-lg' : 'shadow-none',
      error: (error?: boolean) => (error ? '' : '')
    },
    compoundVariants: [
      {
        // @ts-ignore
        disabled: false,
        // @ts-ignore
        error: false,
        class: 'bg-grey-100 pointer-events-auto'
      },
      {
        // @ts-ignore
        disabled: true,
        // @ts-ignore
        error: false,
        class:
          'bg-grey-200 pointer-events-none text-grey-600 cursor-not-allowed'
      },
      {
        // @ts-ignore
        disabled: false,
        // @ts-ignore
        error: true,
        class: 'bg-assistant-red-light pointer-events-auto'
      },
      {
        // @ts-ignore
        disabled: true,
        // @ts-ignore
        error: true,
        class:
          'bg-grey-200 pointer-events-none text-grey-600 cursor-not-allowed'
      }
    ]
  }
)

export const TextErrorContainer = w.span(
  'mt-2 flex items-center gap-2 text-assistant-red-main',
  {}
)

export const DragIndexContainer = w.span(
  'shrink-0 min-w-[2.5rem] h-10 flex items-center justify-center group',
  {}
)

export const DeleteButton = w.button(
  'flex justify-center items-center focus-visible:ring-1 ring-black rounded-xl p-1 hover:bg-assistant-red-light hover:text-assistant-red-main mr-2 cursor-pointer disabled:text-grey-600 disabled:hover:bg-transparent disabled:pointer-events-none',
  {}
)
