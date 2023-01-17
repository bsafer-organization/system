import React from 'react'
import { Danger } from 'iconsax-react'
import ReactSelect, { MultiValue, ActionMeta } from 'react-select'
import { SelectStyle, selectStyles } from './styles'
import {
  DropdownIndicator,
  MultiValueRemoveIndicator,
  ClearIndicator
} from './components'

interface OptionProps {
  value: string
  label: string
}

export interface SelectProps {
  /**
   * Support multiple selected options
   */
  multiple?: boolean
  /**
   * Select options
   * @example [{label: 'Example', value: 'example'}]
   * @required
   */
  options: OptionProps[]
  /**
   * Selected option from `options`
   * @example {label: 'Example', value: 'example'}
   */
  defaultValue?: OptionProps
  /**
   * If true, close the select menu when the user scrolls the document/body.
   * @default false
   */
  closeMenuOnScroll?: boolean
  /**
   * Close the select menu when the user selects an option
   */
  closeMenuOnSelect?: boolean
  /**
   * Select placeholder
   * @default 'Selecione'
   */
  placeholder?: string
  /**
   * Disable component
   * @default false
   */
  disabled?: boolean
  /**
   * Label placed above the select
   * @required
   */
  label: string
  /**
   * Place an optional badge after the label
   * @default false
   */
  optional?: boolean
  /**
   * If not empty, the main color changes to 'red' and display an error message below the select
   * @example 'Required field'
   */
  error?: string
  /**
   * ACtion to do on clear select value
   */
  onClearValue?: () => Promise<void>
  /**
   *
   * @param value selected value
   * @returns `{label: 'selectedLabel', value: 'selectedValue'}`
   */
  onValueChange?: (
    value: MultiValue<unknown>,
    actionMeta: ActionMeta<unknown>
  ) => void
}

export const Select = ({
  multiple,
  options,
  defaultValue,
  closeMenuOnScroll = false,
  closeMenuOnSelect,
  placeholder,
  disabled = false,
  label,
  optional = false,
  error,
  onClearValue,
  onValueChange
}: SelectProps) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState<boolean>(false)
  return (
    <SelectStyle.Container>
      <SelectStyle.HeaderContainer>
        <SelectStyle.Label htmlFor={label} title={label}>
          {label}
        </SelectStyle.Label>
        {optional && (
          <SelectStyle.OptionalBadge>Opcional</SelectStyle.OptionalBadge>
        )}
      </SelectStyle.HeaderContainer>
      <ReactSelect
        isClearable={multiple}
        hideSelectedOptions={false}
        {...(multiple ? { isMulti: true } : {})}
        closeMenuOnScroll={closeMenuOnScroll}
        closeMenuOnSelect={closeMenuOnSelect ?? !multiple}
        isDisabled={disabled}
        onChange={onValueChange}
        classNamePrefix="select"
        styles={selectStyles({ error })}
        defaultValue={defaultValue}
        options={options}
        placeholder={placeholder ?? 'Selecione'}
        menuIsOpen={menuIsOpen}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        inputId="select__input"
        components={{
          ClearIndicator: (props) => (
            <ClearIndicator
              props={props}
              menuIsOpen={menuIsOpen}
              changeMenuState={(open: boolean) => setMenuIsOpen(open)}
              onClearValue={onClearValue}
            />
          ),
          DropdownIndicator: (props) => (
            <DropdownIndicator props={props} disabled={disabled} />
          ),
          MultiValueRemove: MultiValueRemoveIndicator
        }}
      />

      {error && (
        <SelectStyle.ErrorTextContainer>
          <Danger size={16} />
          <span>{error}</span>
        </SelectStyle.ErrorTextContainer>
      )}
    </SelectStyle.Container>
  )
}
