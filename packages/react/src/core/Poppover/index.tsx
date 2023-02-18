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
    hiddenArrow = false,
    arrow,
    sideOffset = 10,
    ...contentProps
  } = props
  return (
    <RadixPopover.Content sideOffset={sideOffset} {...contentProps}>
      <PopoverBox className={className}>{children}</PopoverBox>
      {!hiddenArrow && (
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
  /**
   * Root is the component that wraps the rest of the components and keeps them working
   * @example
   *  <Popover.Root>
   *   <Popover.Trigger>
   *     {children}
   *   </Popover.Trigger>
   *   <Popover.Anchor>
   *     {children}
   *   </Popover.Anchor>
   *   <Popover.Content>
   *    {children}
   *   </Popover.Content>
   *  </Popover.Root>
   */
  Root: PopoverRoot,
  /**
   * Trigger is the component that triggers the action of opening(uncontrolled) the Popover
   */
  Trigger: PopoverTrigger,
  /**
   * Content is the component that wraps the Popover content. Able to receive any set of elements
   */
  Content: PopoverContent,
  /**
   * Anchor causes the Popover to open in a different element than the Trigger.
   */
  Anchor: PopoverAnchor
}

export type PopoverProps = {
  Root: PopoverRootProps
  Trigger: PopoverTriggerProps
  Content: PopoverContentProps
  Anchor: PopoverAnchorProps
}
