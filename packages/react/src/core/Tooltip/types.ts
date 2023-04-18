import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

type TooltipArrowType = RadixTooltip.TooltipArrowProps & {
  hidden?: boolean
}

export interface TooltipRootProps extends RadixTooltip.TooltipProps {
  /**
   * How much time a user has to enter another trigger without incurring a delay again
   *
   * @default 300 (miliseconds)
   */
  skipDelayDuration?: number

  /**
   * The duration from when the mouse enters a tooltip trigger until the tooltip opens
   * @default 300 (miliseconds)
   */
  delayDuration?: number

  /**
   * Prevents Tooltip.Content from remaining open when hovering. Disabling this has accessibility consequences
   * @default false
   */
  disableHoverableContent?: boolean

  children: ReactNode
}

export interface TooltipTriggerProps extends RadixTooltip.TooltipTriggerProps {
  children: ReactNode
}

export interface TooltipContentProps extends RadixTooltip.TooltipContentProps {
  /**
   * Element that will be wrapped by the tooltip
   */
  children: ReactNode

  /**
   * Element where the portal will be opened to create an element
   * @default undefined
   */
  portal?: HTMLElement | null

  /**
   * Arrow settings
   * - width: number
   * - height: number
   *
   * @default
   * {
   *  width: 10,
   *  height: 5
   * }
   */
  arrow?: TooltipArrowType
}
