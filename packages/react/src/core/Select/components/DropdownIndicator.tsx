import { components, DropdownIndicatorProps } from 'react-select'
import { CustomDropdownIndicatorProps, OptionProps } from '../index'

interface DropdownComponentProps {
  props: DropdownIndicatorProps<OptionProps, true>
  disabled?: boolean
  dropdownIndicator?: CustomDropdownIndicatorProps
}

export const DropdownIndicator = ({
  props,
  disabled,
  dropdownIndicator
}: DropdownComponentProps) => {
  return (
    <components.DropdownIndicator {...props}>
      {dropdownIndicator && dropdownIndicator.icon && (
        <>
          {props.selectProps.menuIsOpen ? (
            <dropdownIndicator.icon
              variant={dropdownIndicator.variant}
              size={16}
              color={'#2E3338'}
            />
          ) : (
            <dropdownIndicator.icon
              variant={dropdownIndicator.variant}
              size={16}
              color={disabled ? '#747F87' : '#2E3338'}
              className="rotate-180"
            />
          )}
        </>
      )}
    </components.DropdownIndicator>
  )
}
