import { ArrowUp2, ArrowDown2 } from 'iconsax-react'
import { DropdownIndicatorProps, components } from 'react-select'

interface DropdownComponentProps {
  props: DropdownIndicatorProps<unknown, true>
  disabled?: boolean
}

export const DropdownIndicator = ({
  props,
  disabled
}: DropdownComponentProps) => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? (
        <ArrowUp2
          variant="Bold"
          size={16}
          color={disabled ? '#747F87' : '#2E3338'}
        />
      ) : (
        <ArrowDown2
          variant="Bold"
          size={16}
          color={disabled ? '#747F87' : '#2E3338'}
        />
      )}
    </components.DropdownIndicator>
  )
}
