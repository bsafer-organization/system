import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { w } from 'windstitch'

export const SkeletonElement = w.span('', {
  defaultVariants: {
    className: '',
    hasChild: false
  },
  variants: {
    hasChild: (hasChild?: boolean) => (hasChild ? 'h-auto' : 'h-10'),
    className: (className?: string) =>
      twMerge(`block animate-pulse rounded bg-grey-200 w-full`, className)
  },
  compoundVariants: []
})

interface SkeletonProps {
  className?: string
  animationDuration?: number
  children?: ReactNode
}

export function Skeleton({
  className,
  animationDuration = 1000,
  children
}: SkeletonProps) {
  return (
    <SkeletonElement
      data-testid="skeleton__testid"
      className={className}
      hasChild={!!children}
      style={{ animationDuration: `${animationDuration}ms` }}
    >
      {children}
    </SkeletonElement>
  )
}
