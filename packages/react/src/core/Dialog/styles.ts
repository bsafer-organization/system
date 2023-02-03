import { w, W } from 'windstitch'
import * as RadixDialog from '@radix-ui/react-dialog'

export const DialogStyle = {
  Overlay: w(RadixDialog.Overlay, {
    className: `
    inset-[0]
    fixed
    z-[999999]
  `,
    variants: {
      overlayBackdrop: (overlayBackdrop?: boolean) =>
        overlayBackdrop === undefined || overlayBackdrop === true
          ? `bg-black/[0.44]`
          : ``
    }
  }),
  IconContainer: w.div(
    `
    flex justify-center items-center
  `,
    {}
  ),
  ActionContainer: w.div(
    `
      flex
      justify-center
      items-center
      
      gap-3.5
      
      mt-8
  `,
    {}
  ),
  Content: w(RadixDialog.Content, {
    className: `
      bg-white
      rounded-md
      fixed
      top-1/2
      left-2/4
      translate-x-[-50%]
      translate-y-[-50%]
      w-[90vw]
      max-w-md
      max-h-[85vh]
      px-16
      py-10
      z-[999999]
  `,
    variants: {
      overlayShadow: (overlayShadow?: boolean) =>
        overlayShadow === undefined || overlayShadow === true ? `` : `shadow-md`
    }
  }),
  Title: w(RadixDialog.Title, {
    className: `
      text-[#090A0B]
      text-[20px]
      mt-4
      text-center
      leading-6
      font-normal
  `,
    variants: {
      justify: {
        center: `
        flex justify-center items-center
      `
      }
    }
  }),
  Subtitle: w(RadixDialog.Description, {
    className: `
      font-light
      text-[#090A0B]
      text-sm
      mt-4
      text-center
  `,
    variants: {
      justify: {
        center: `
          flex justify-center items-center
  `
      }
    }
  }),
  Button: w.button(
    `
    px-4 py-2 text-sm leading-none
    rounded-full font-normal

    disabled:cursor-not-allowed
    disabled:text-grey-600

    flex justify-between items-center
    gap-2 

    focus:transition-colors
  `,
    {
      variants: {
        variant: {
          contained: `
          disabled:bg-grey-200  disabled:border-grey-200
          `,
          outlined: `
          bg-transparent
  
          disabled:bg-transparent  disabled:border-grey-200
          `
        },
        color: {
          primary: ``
        }
      },
      compoundVariants: [
        {
          variant: 'contained',
          color: 'primary',
          class: `
            text-black hover:text-secondary-main
            bg-secondary-main hover:bg-black hover:border-black
            border-secondary-main border
            transition-colors

            focus:text-secondary-main
            focus:bg-black
            focus:border-black
          `
        },
        {
          variant: 'outlined',
          color: 'primary',
          class: `
            text-grey-900
            bg-transparent hover:bg-grey-200
            border-black border

            focus:bg-grey-200
            focus:border-grey-200
          `
        }
      ]
    }
  ),
  CloseDialogIcon: w.button(
    `
      hover:bg-grey-200
      hover:transition-colors
      focus:bg-grey-100
      focus:transition-colors
      rounded-full
      h-6
      w-6
      inline-flex	
      items-center
      justify-center
      absolute
      top-4
      right-4
  `,
    {}
  )
}

export type DialogStyleProps = W.Infer<typeof DialogStyle>
