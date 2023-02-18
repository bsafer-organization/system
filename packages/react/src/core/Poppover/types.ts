import {
  PopoverAnchorProps as RadixPopoverAnchorProps,
  PopoverContentProps as RadixPopoverContentProps,
  PopoverProps,
  PopoverTriggerProps as RadixPopoverTriggerProps
} from '@radix-ui/react-popover'
import React from 'react'
import { textColors } from '../../helpers'

export interface PopoverRootProps extends PopoverProps {
  children: React.ReactElement | React.ReactElement[]
}

export interface PopoverTriggerProps extends RadixPopoverTriggerProps {
  children: React.ReactElement
}

export interface PopoverContentProps extends RadixPopoverContentProps {
  className?: string
  /**
   * Hide the arrow svg
   * @default false
   */
  hiddenArrow?: boolean
  /**
   * Arrow configuration
   * - width: number
   * - height: number
   * - color: allColors
   * @default
   * {
   *  width: 10,
   *  height: 5,
   *  color: 'white'
   * }
   */
  arrow?: {
    width?: number
    height?: number
    color?: keyof typeof textColors
  }
  children: React.ReactElement
}

export interface PopoverAnchorProps extends RadixPopoverAnchorProps {
  children: React.ReactElement
}
