import { w, W } from 'windstitch'

export const ActionBadgeStyle = {
  Container: w.span(
    `
    font-regular rounded-full
  `,
    {
      defaultVariants: {
        size: 'md',
        color: 'green',
        disabled: false
      },
      variants: {
        size: {
          xs: 'px-2 py-0.5 text-xs',
          sm: 'px-2 py-1 text-sm',
          md: 'px-3 py-2 text-base',
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
  ),
  Content: w.span('flex justify-between items-center', {
    defaultVariants: {
      gap: 'md'
    },
    variants: {
      gap: {
        xs: 'gap-2',
        sm: 'gap-3',
        md: 'gap-3',
        lg: 'gap-4'
      }
    }
  }),
  IconContainer: w.button(
    `
      hover:cursor-pointer
      
      transition-colors rounded-full

    `,
    {
      variants: {
        color: {
          green:
            'hover:bg-assistant-green-main/[.2] focus:bg-assistant-green-main/[.2]',
          blue: 'hover:bg-assistant-blue-main/[.2] focus:bg-assistant-blue-main/[.2]',
          red: 'hover:bg-assistant-red-main/[.2] focus:bg-assistant-red-main/[.2]',
          yellow:
            'hover:bg-assistant-yellow-main/[.2] focus:bg-assistant-yellow-main/[.2]',
          black: 'hover:bg-grey-900/[.2] focus:bg-grey-900/[.2]'
        },
        disabled: (disabled: boolean) =>
          disabled
            ? '!cursor-not-allowed hover:!text-grey-600 hover:!bg-transparent'
            : ''
      }
    }
  ),
  Avatar: {
    Container: w.span(``, {
      variants: {
        size: {
          xs: 'w-5 h-5',
          sm: 'w-6 h-6',
          md: 'w-7 h-7',
          lg: 'w-10 h-10'
        }
      }
    }),
    Content: w.img(
      `
        rounded-full
        w-full h-full
        object-cover object-center
      `
    )
  }
}

export type ActionBadgeStyleProps = {
  container: W.Infer<typeof ActionBadgeStyle['Container']>
  content: W.Infer<typeof ActionBadgeStyle['Content']>
}
