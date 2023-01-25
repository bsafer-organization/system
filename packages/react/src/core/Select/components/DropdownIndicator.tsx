import { ArrowUp2, ArrowDown2, Icon } from 'iconsax-react'
import { DropdownIndicatorProps, components } from 'react-select'
import { CustomDropdownIndicatorProps } from '../index'

interface DropdownComponentProps {
  props: DropdownIndicatorProps<unknown, true>
  disabled?: boolean
  dropdownIndicator?: CustomDropdownIndicatorProps
}

export const DropdownIndicator = ({
  props,
  disabled,
  dropdownIndicator = {
    icon: ArrowUp2,
    variant: 'Bold'
  }
}: DropdownComponentProps) => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? (
        <dropdownIndicator.icon
          variant={dropdownIndicator.variant}
          size={16}
          color={disabled ? '#747F87' : '#2E3338'}
        />
      ) : (
        <dropdownIndicator.icon
          variant={dropdownIndicator.variant}
          size={16}
          color={disabled ? '#747F87' : '#2E3338'}
          className="rotate-180"
        />
      )}
    </components.DropdownIndicator>
  )
}
