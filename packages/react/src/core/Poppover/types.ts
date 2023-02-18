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
  hideArrow?: boolean
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
