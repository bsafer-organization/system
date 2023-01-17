import { w, W } from 'windstitch'

export const IconButtonContainer = w.button(
  `
    rounded-full

    disabled:cursor-not-allowed
    disabled:text-grey-600

    flex justify-center items-center
  `,
  {
    defaultVariants: {
      size: 'md',
      variant: 'contained',
      color: 'primary'
    },
    variants: {
      size: {
        sm: 'px-3 py-1',
        md: 'px-4 py-2',
        lg: 'px-6 py-3'
      },
      variant: {
        contained: `
          disabled:bg-grey-200  disabled:border-grey-200
        `,
        outlined: `
          bg-transparent
          disabled:bg-transparent  disabled:border-grey-200
        `,
        text: `
          bg-transparent
          disabled:bg-transparent
        `
      },
      color: {
        primary: '',
        secondary: '',
        default: ''
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
        `
      },
      {
        variant: 'outlined',
        color: 'primary',
        class: `
        text-secondary-main hover:text-assistant-yellow-main
        border-secondary-main border
        hover:border-assistant-yellow-main hover:bg-assistant-yellow-light
        transition-colors
        `
      },
      {
        variant: 'text',
        color: 'primary',
        class: `
        text-black hover:text-black
        border-transparent border
        hover:bg-assistant-yellow-light
        transition-colors
        `
      },
      {
        variant: 'contained',
        color: 'secondary',
        class: `
        text-black hover:text-assistant-green-main
        hover:bg-black bg-assistant-green-main
        border-assistant-green-main border hover:border-black
          transition-colors
        `
      },
      {
        variant: 'outlined',
        color: 'secondary',
        class: `
        text-assistant-green-main hover:text-assistant-green-dark
        hover:bg-assistant-green-light bg-transparent
        border-assistant-green-main border hover:border-assistant-green-dark
          transition-colors
        `
      },
      {
        variant: 'text',
        color: 'secondary',
        class: `
        text-assistant-green-main
        hover:bg-assistant-green-light bg-transparent
        border-transparent border
          transition-colors
        `
      },
      {
        variant: 'contained',
        color: 'default',
        class: `
          text-white
          bg-grey-900 hover:bg-black 
          border-grey-900 border hover:border-black
          transition-colors
        `
      },
      {
        variant: 'outlined',
        color: 'default',
        class: `
          text-grey-900
          bg-transparent hover:bg-grey-200
          border-grey-900 border hover:border-black
          transition-colors
        `
      },
      {
        variant: 'text',
        color: 'default',
        class: `
          text-grey-900
          bg-transparent hover:bg-grey-200
          border-transparent border
          transition-colors
        `
      }
    ]
  }
)

export type IconButtonContainerProps = W.Infer<typeof IconButtonContainer>
