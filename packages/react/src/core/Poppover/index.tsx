import * as RadixPopover from '@radix-ui/react-popover'
import { textColors } from '../../helpers'
import { PopoverBox } from './styles'
import {
  PopoverAnchorProps,
  PopoverContentProps,
  PopoverRootProps,
  PopoverTriggerProps
} from './types'

export function PopoverRoot(props: PopoverRootProps) {
  const { children, ...rest } = props
  return <RadixPopover.Root {...rest}>{children}</RadixPopover.Root>
}

export function PopoverTrigger(props: PopoverTriggerProps) {
  const { children } = props
  return <RadixPopover.Trigger>{children}</RadixPopover.Trigger>
}

export function PopoverContent(props: PopoverContentProps) {
  const {
    children,
    className = '',
    hideArrow = false,
    arrow,
    sideOffset = 10,
    ...contentProps
  } = props
  return (
    <RadixPopover.Content sideOffset={sideOffset} {...contentProps}>
      <PopoverBox className={className}>{children}</PopoverBox>
      {!hideArrow && (
        <span className={textColors[arrow?.color || 'white']}>
          <RadixPopover.Arrow
            width={arrow?.width}
            height={arrow?.height}
            fill="currentColor"
          />
        </span>
      )}
    </RadixPopover.Content>
  )
}

export function PopoverAnchor({ children }: PopoverAnchorProps) {
  return <RadixPopover.Anchor>{children}</RadixPopover.Anchor>
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Anchor: PopoverAnchor
}

export type PopoverProps = {
  Root: PopoverRootProps
  Trigger: PopoverTriggerProps
  Content: PopoverContentProps
  Anchor: PopoverAnchorProps
}
