import React, { useEffect, useRef, useState } from 'react'
import { Text, TextProps } from '../Text'
import { Tooltip, TooltipProps } from '../Tooltip'

type TextPropsWithoutChildren = Omit<TextProps, 'children'>

export interface OverflowTextProps {
  textProps?: TextPropsWithoutChildren
  tooltipProps?: TooltipProps['Content']
  children?: React.ReactNode
}

export function OverflowText(props: OverflowTextProps) {
  const { children, textProps, tooltipProps } = props
  const ref = useRef<HTMLSpanElement | null>(null)
  const [isOverflow, setIsOverflow] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element || !('ResizeObserver' in window)) return

    const checkOverflow = () => {
      setIsOverflow(element.offsetWidth < element.scrollWidth)
    }

    const resizeObserver = new ResizeObserver(checkOverflow)

    resizeObserver.observe(element)

    return () => {
      if ('ResizeObserver' in window) {
        resizeObserver.unobserve(element)
      }
    }
  }, [])

  if (!children) {
    return null
  }

  return (
    <Tooltip.Root
      open={isOverflow ? undefined : false}
      disableHoverableContent
      delayDuration={100}
    >
      <Tooltip.Trigger className="w-full select-text cursor-default">
        <Text {...textProps}>
          <span
            ref={ref}
            className="block overflow-hidden text-ellipsis whitespace-nowrap text-start"
          >
            {children}
          </span>
        </Text>
      </Tooltip.Trigger>
      <Tooltip.Content align="start" arrow={{ hidden: true }} {...tooltipProps}>
        <Text>{children?.toString()}</Text>
      </Tooltip.Content>
    </Tooltip.Root>
  )
}
