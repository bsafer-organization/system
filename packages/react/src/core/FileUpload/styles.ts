import { w } from 'windstitch'

export const DropZoneContainer = w.div(
  `
  border-2 rounded gap-3
  flex flex-col justify-center items-center px-5 py-10
  min-h-[11.25rem] transition-all
`,
  {
    defaultVariants: {
      isFocused: false,
      isDragAccept: false,
      isDragReject: false
    },
    variants: {
      isFocused: (isFocused?: boolean) =>
        isFocused ? 'border-solid' : 'border-dashed',
      isDragAccept: (isDragAccept?: boolean) =>
        isDragAccept
          ? 'border-assistant-blue-main bg-assistant-blue-light'
          : '',
      isDragReject: (isDragReject?: boolean) =>
        isDragReject ? 'border-assistant-red-main bg-assistant-red-light' : ''
    },
    compoundVariants: [
      {
        // @ts-ignore
        isDragAccept: false,
        // @ts-ignore
        isDragReject: false,
        class: 'bg-white'
      }
    ]
  }
)

export const OptionalBadge = w.span(
  `
    font-regular text-grey-400 text-xs
    py-[.125rem] px-1
    bg-background rounded
    `,
  {}
)
