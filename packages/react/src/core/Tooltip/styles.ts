import { w } from 'windstitch'

export const TooltipContainer = w.div(
  `
  max-w-md bg-grey-200 rounded-xl p-2
  text-grey-800

  [&_svg]:fill-grey-200
`,
  {}
)
