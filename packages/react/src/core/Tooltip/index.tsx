import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'
import { Text, TextProps } from '../Text'
import { TooltipContainer } from './styles'

type TooltipPositionType = Pick<
  RadixTooltip.PopperContentProps,
  'side' | 'sideOffset' | 'align' | 'alignOffset' | 'sticky'
>

type TooltipCollisionsType = Pick<
  RadixTooltip.PopperContentProps,
  | 'avoidCollisions'
  | 'collisionBoundary'
  | 'collisionPadding'
  | 'hideWhenDetached'
>

type TooltipArrowType = Pick<
  RadixTooltip.TooltipArrowProps,
  'width' | 'height'
> & {
  hidden?: boolean
}

export interface TooltipProps {
  /**
   * Tooltip text content. Accepts modification tags: b, strong, i, etc
   */
  text: string

  /**
   * Element that will be wrapped by the tooltip
   */
  children: React.ReactNode

  /**
   * Controlled way to open the tooltip
   * @default undefined
   */
  open?: boolean

  /**
   * Trigger props
   * @default undefined
   */
  triggerProps?: RadixTooltip.TooltipTriggerProps

  /**
   * Function that fires when changing the open state of the tooltip
   * @default undefined
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Element where the portal will be opened to create an element
   * @default undefined
   */
  portal?: HTMLElement | null

  /**
   * The duration from when the mouse enters a tooltip trigger until the tooltip opens
   * @default 300 (miliseconds)
   */
  delayDuration?: number

  /**
   * How much time a user has to enter another trigger without incurring a delay again
   *
   * @default 300 (miliseconds)
   */
  skipDelayDuration?: number

  /**
   * Prevents Tooltip.Content from remaining open when hovering. Disabling this has accessibility consequences
   * @default false
   */
  disableHoverableContent?: boolean

  /**
   * Defines tooltips position properties:
   *
   * @type object
   * - align: 'start' | 'center' | 'end'
   * - alignOffset: number
   * - side: 'top' | 'bottom' | 'left' | 'right'
   * - sideOffset: number
   * - sticky: 'partial' | 'always'
   *
   * @default
   * {
   *   align: "center",
   *   alignOffset: 0,
   *   side: "top",
   *   sideOffset: 8,
   *   sticky: "partial"
   * }
   */
  position?: TooltipPositionType

  /**
   * Defines tooltips collisions properties:
   *
   * @type object
   * - avoidCollisions: boolean,
   * - collisionBoundary: Element | null | Array<Element | null>,
   * - collisionPadding: number | Partial<Record<Side, number>>,
   * - hideWhenDetached: boolean
   *
   * @default
   * {
   *  avoidCollisions: true,
   *  collisionBoundary: [],
   *  collisionPadding: 0,
   *  hideWhenDetached: false
   * }
   */
  collision?: TooltipCollisionsType

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

  /**
   * Text properties
   * @types TextProps
   * @param TextProps
   * @default undefined
   */
  textProps?: TextProps

  /**
   * Content element props
   * @types RadixTooltip.TooltipContentProps
   * @param RadixTooltip.TooltipContentProps
   * @default undefined
   */
  contentProps?: RadixTooltip.TooltipContentProps
}

export function Tooltip({
  text,
  children,
  delayDuration,
  skipDelayDuration,
  disableHoverableContent,
  onOpenChange,
  open,
  portal,
  position,
  collision,
  arrow,
  textProps,
  contentProps,
  triggerProps
}: TooltipProps) {
  const defaultPosition: TooltipPositionType = {
    ...position,
    sideOffset: position?.sideOffset ?? 8
  }

  return (
    <RadixTooltip.Provider
      delayDuration={delayDuration || 300}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <RadixTooltip.Root onOpenChange={onOpenChange} open={open}>
        <RadixTooltip.Trigger {...triggerProps}>
          {children}
        </RadixTooltip.Trigger>

        <RadixTooltip.Portal container={portal}>
          <RadixTooltip.Content
            {...defaultPosition}
            {...collision}
            {...contentProps}
            asChild
          >
            <TooltipContainer>
              <Text
                size="sm"
                {...textProps}
                dangerouslySetInnerHTML={{
                  __html: text
                }}
              />
              {!arrow?.hidden && (
                <RadixTooltip.Arrow
                  width={arrow?.width}
                  height={arrow?.height}
                />
              )}
            </TooltipContainer>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
