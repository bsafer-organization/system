import { w, W } from 'windstitch'

export const BadgeContainer = w.span(
  `
    font-regular rounded-[0.25rem] inline-block
  `,
  {
    defaultVariants: {
      size: 'md',
      color: 'green',
      disabled: false
    },
    variants: {
      size: {
        xs: 'px-1 py-0.5 text-xs',
        sm: 'p-1 text-sm',
        md: 'p-2 text-base',
        lg: 'px-3 py-2 text-xl'
      },
      color: {
        green: 'bg-assistant-green-light text-assistant-green-main',
        blue: 'bg-assistant-blue-light text-assistant-blue-main',
        red: 'bg-assistant-red-light text-assistant-red-main',
        yellow: 'bg-assistant-yellow-light text-assistant-yellow-main',
        black: 'bg-grey-100 text-grey-900'
      },
      disabled: (disabled: boolean) =>
        disabled ? '!bg-grey-100 !text-grey-600' : ''
    }
  }
)

export type BadgeContainerProps = W.Infer<typeof BadgeContainer>
