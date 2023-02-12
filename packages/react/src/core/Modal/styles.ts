import * as Dialog from '@radix-ui/react-dialog'
import { w } from 'windstitch'

export const ModalCloseButton = w.button(``, {
  variants: {
    size: {
      md: `
          w-10 h-10 shrink-0 flex justify-center items-center bg-white rounded-full
          text-black
          focus-visible:ring-1 focus-visible:ring-black hover:text-grey-700
          transition-all `,
      sm: `
          w-6 h-6 shrink-0 flex justify-center items-center bg-white rounded-full
          text-black
          focus-visible:ring-1 focus-visible:ring-black hover:text-grey-700
          transition-all `
    }
  }
})

export const ModalContainer = w(Dialog.Content, {
  variants: {
    maxWidth: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl'
    },
    position: {
      left: 'fixed w-screen h-screen top-0 left-0',
      center:
        'fixed w-screen max-h-[80vh] h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      right: 'fixed w-screen h-screen top-0 right-0'
    }
  }
})

export const ModalContent = w.div('w-full h-full bg-white overflow-hidden', {
  variants: {
    hasRounded: (hasRounded: boolean) =>
      hasRounded ? 'rounded-3xl' : 'rounded-none'
  }
})

export const ModalCloseButtonContainer = w.div('', {
  variants: {
    position: {
      left: 'absolute top-5 -right-5',
      center: 'absolute top-4 right-4',
      right: 'absolute top-5 -left-5'
    }
  }
})
