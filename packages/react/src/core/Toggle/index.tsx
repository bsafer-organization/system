import { SwitchProps } from '@radix-ui/react-switch'
import React, { useEffect } from 'react'
import { Text } from '../Text'

import { ToggleContainer, ToggleRoot, ToggleThumb } from './styles'

export interface ToggleProps extends SwitchProps {
  /**
   * Filling this parameter, the toggle will have a background and a text.
   * Depending on the state, the background color will be different.
   */
  text?: string
  containerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
}

/**
 * Render a toggle switch element
 * @param ToggleProps
 */
export const Toggle = ({
  text,
  checked,
  containerProps,
  ...props
}: ToggleProps) => {
  const [toggleState, setToggleState] = React.useState(false)
  const handleToggle = (switchChecked: boolean) => setToggleState(switchChecked)

  useEffect(() => {
    setToggleState(!!checked)
  }, [checked])

  return (
    <ToggleContainer
      hasText={!!text}
      hasBackground={toggleState && !!text}
      {...containerProps}
    >
      {text && <Text size="sm">{text}</Text>}
      <ToggleRoot
        checked={toggleState}
        onCheckedChange={handleToggle}
        {...props}
      >
        <ToggleThumb />
      </ToggleRoot>
    </ToggleContainer>
  )
}
