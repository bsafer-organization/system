import { w } from 'windstitch'

export const InputContainer = w.fieldset(
  'border-none p-0 m-0 w-full min-w-0',
  {}
)

export const InputLabel = w.label(
  `
  font-bold text-grey-800 text-xs text-ellipsis whitespace-nowrap overflow-hidden
`,
  {}
)

export const OptionalBadge = w.span(
  `
  font-regular text-grey-400 text-xs
  py-[.125rem] px-1
  bg-grey-100 rounded
`,
  {}
)

export const InputElementContainer = w.div(
  `
  w-full min-w-0
  flex items-center gap-4
  py-3 px-4 rounded-lg
  border
`,
  {
    variants: {
      error: (error: boolean) =>
        error
          ? 'border-assistant-red-main focus-within:border-assistant-red-main text-grey-800'
          : '',
      disabled: (disabled: boolean) =>
        disabled
          ? 'bg-grey-100 border-grey-600 text-grey-600 placeholder:text-grey-600 cursor-not-allowed'
          : ''
    },
    compoundVariants: [
      {
        // @ts-ignore
        error: false,
        // @ts-ignore
        disabled: false,
        class: 'border-grey-400 focus-within:border-black text-grey-800'
      }
    ],
    defaultVariants: {
      error: false,
      disabled: false
    }
  }
)

export const InputElement = w.input(
  `
  w-full min-w-0
  bg-transparent

  text-sm text-inherit font-regular
  placeholder:text-grey-600 placeholder:font-light placeholder-shown:

  disabled:cursor-not-allowed
`,
  {}
)

export const ErrorTextContainer = w.div(
  `
  text-xs text-assistant-red-main
  flex items-center gap-2

  mt-1 
`,
  {}
)

export const IconContainer = w.span(
  `
  w-4 h-4 flex justify-center items-center shrink-0 select-none
`,
  {}
)
