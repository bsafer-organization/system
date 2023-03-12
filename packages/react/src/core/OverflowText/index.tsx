import React, { useEffect, useRef, useState } from 'react'
import { Text, TextProps } from '../Text'
import { Tooltip } from '../Tooltip'

type TextPropsWithoutChildren = Omit<TextProps, 'children'>

export interface OverflowTextProps extends TextPropsWithoutChildren {
  children?: React.ReactNode
}

export function OverflowText(props: OverflowTextProps) {
  const { children, ...textProps } = props
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
    <Tooltip
      text={children.toString()}
      open={isOverflow ? undefined : false}
      disableHoverableContent
      delayDuration={100}
      position={{
        align: 'start'
      }}
      triggerProps={{
        className: 'w-full select-text cursor-default'
      }}
      arrow={{
        hidden: true
      }}
    >
      <Text data-testid="overflow_text__testid" {...textProps}>
        <span
          data-testid="overflow_text_children__testid"
          ref={ref}
          className="block overflow-hidden text-ellipsis whitespace-nowrap text-start"
        >
          {children}
        </span>
      </Text>
    </Tooltip>
  )
}
