import { w, W } from 'windstitch'
import { StylesConfig } from 'react-select'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipStyle = {
  TriggerContainer: w.div(
    `
    min-w-fit
  `,
    {}
  ),
  Content: w(Tooltip.Content, {
    className: `
      max-w-md
      bg-background rounded-md
      shadow-lg shadow-grey-200
      p-2
    
      [&_svg]:fill-background
    `
  })
}
