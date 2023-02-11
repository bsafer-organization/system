import React from 'react'

interface Root {
  isOpen?: boolean
  position?: 'center' | 'left' | 'right'
  width?: string
  overlay?: {
    color?: string
    opacity?: string
  }
  children: React.ReactElement
}

interface Trigger {
  children: React.ReactElement
}

interface Content {
  children: React.ReactElement
}

export interface ModalProps {
  Root: Root
  Trigger: Trigger
  Content: Content
}
