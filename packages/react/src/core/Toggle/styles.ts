import * as Switch from '@radix-ui/react-switch'
import { w, W } from 'windstitch'

export const ToggleContainer = w.div(`flex items-center gap-2 text-sm`, {
  defaultVariants: {
    hasText: false,
    hasBackground: false
  },
  variants: {
    hasBackground: (hasBackground: boolean) =>
      hasBackground ? 'bg-assistant-blue-light' : 'bg-grey-100',
    hasText: (hasText: boolean) =>
      hasText ? 'px-4 py-2 justify-between rounded' : 'bg-transparent'
  }
})

export const ToggleRoot = w(Switch.Root, {
  className: `
        data-[state='checked']:bg-assistant-blue-main
        data-[state='unchecked']:bg-grey-400
        relative w-[40px] h-[24px] max-w-[40rem] cursor-pointer rounded-full transition-colors
        duration-200 ease-in-out
    `
})

export const ToggleThumb = w(Switch.Thumb, {
  className: `
        data-[state='checked']:translate-x-4 data-[state='checked']:bg-white
        data-[state='unchecked']:translate-x-0 data-[state='unchecked']:bg-grey-800
        block w-[20px] h-[20px] m-[2px] transform rounded-full
        transition duration-200 ease-in-out
    `
})

export type ToggleContainerProps = W.Infer<typeof ToggleContainer>
