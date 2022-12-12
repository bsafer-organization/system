import { w } from 'windstitch'

export const TooltipTriggerContainer = w.div(
  `
  min-w-fit
`,
  {}
)

export const TooltipContainer = w.div(
  `
  max-w-md
  bg-background rounded-md
    shadow-lg shadow-grey-200
    p-2

  [&_svg]:fill-background
`,
  {}
)
