import { ArrowUp2, ArrowDown2 } from 'iconsax-react'
import { DropdownIndicatorProps, components } from 'react-select'
import { GroupedOption, InputData } from '../index'

interface DropdownComponentProps {
  props: DropdownIndicatorProps<InputData, false, GroupedOption>
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
