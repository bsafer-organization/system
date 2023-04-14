import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipContainer } from './styles'
import {
  TooltipContentProps,
  TooltipRootProps,
  TooltipTriggerProps
} from './types'

export function Root({
  skipDelayDuration,
  delayDuration,
  disableHoverableContent,
  children,
  ...root
}: TooltipRootProps) {
  return (
    <RadixTooltip.Provider
      delayDuration={delayDuration || 300}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <RadixTooltip.Root {...root}>{children}</RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export function Trigger({ children, ...props }: TooltipTriggerProps) {
  return <RadixTooltip.Trigger {...props}>{children}</RadixTooltip.Trigger>
}

export function Content({
  arrow,
  portal,
  asChild = true,
  className,
  children,
  ...contentProps
}: TooltipContentProps) {
  return (
    <RadixTooltip.Portal container={portal}>
      <RadixTooltip.Content asChild={asChild} sideOffset={4} {...contentProps}>
        <TooltipContainer className={className}>
          {children}
          {!arrow?.hidden && (
            <RadixTooltip.Arrow className="fill-grey-200" {...arrow} />
          )}
        </TooltipContainer>
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  )
}

export const Tooltip = {
  Root,
  Content,
  Trigger
}

export type TooltipProps = {
  Root: TooltipRootProps
  Content: TooltipContentProps
  Trigger: TooltipTriggerProps
}
