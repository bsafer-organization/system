import { ArrowUp2, Danger, Icon, IconProps } from 'iconsax-react'
import React from 'react'
import ReactSelect, {
  ActionMeta,
  MultiValue,
  Props as ReactSelectProps,
  SingleValue
} from 'react-select'
import {
  ClearIndicator,
  DropdownIndicator,
  MultiValueRemoveIndicator
} from './components'
import { SelectStyle, selectStyles } from './styles'

export interface OptionProps {
  value: string
  label: string
}

export type SelectOption<T> = OptionProps & {
  /**
   * Meta is a fields for additional informations of the options. This prop get a same type when set `options.meta`
   * @type {object}
   */
  meta?: T
}

export interface CustomDropdownIndicatorProps {
  icon?: Icon
  variant?: IconProps['variant']
  hoverColor?: string
}

type MultipleSelectType<T> =
  | {
    /**
     * Support multiple selected options
     */
    multiple: true
    /**
     *
     * @param value selected value
     * @returns `{label: 'selectedLabel', value: 'selectedValue'}`
     */
    onValueChange?: (values: SelectOption<T>[]) => void
    /**
     * Selected option from `options`
     * @example [{label: 'Example', value: 'example'}]
     */
    defaultValue?: SelectOption<T>[]
  }
  | {
    /**
     * Support multiple selected options
     */
    multiple?: false
    /**
     *
     * @param value selected value
     * @returns `{label: 'selectedLabel', value: 'selectedValue'}`
     */
    onValueChange?: (values: SelectOption<T>) => void
    /**
     * Selected option from `options`
     * @example {label: 'Example', value: 'example'}
     */
    defaultValue?: SelectOption<T>
  }

export interface DefaultSelectProps<T>
  extends ReactSelectProps<SelectOption<T>, boolean> {
  /**
   * Select options
   * @example [{label: 'Example', value: 'example'}]
   * @required
   */
  options: SelectOption<T>[]
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
   */
  label?: string
  /**
   * Place an optional badge after the label.\
   * **If `label` is not passed, this prop will not be displayed.**
   * @default false
   */
  optional?: boolean
  /**
   * If not empty, the main color changes to 'red' and display an error message below the select
   * @example 'Required field'
   */
  error?: string
  /**
   * Select padding
   * @default "12px 16px" = "0.75rem 1rem"
   */
  padding?: string
  /**
   * Select background color
   * @default "white"
   */
  backgroundColor?: string
  /**
   * Select border
   * @default "1px solid grey-400"
   */
  border?: string
  /**
   * Select border radius.
   * - "md"
   * - "full"
   * @default "md" = "0.5rem" = "8px"
   */
  borderRadius?: 'md' | 'full'
  /**
   * Select dropdown indicator.\
   * **When menu is open, the icon will rotate 180 degrees**
   * @example {icon: ArrowUp2, variant: "Bold", hoverColor: "black"}
   * @default {icon: ArrowUp2, variant: "Bold", hoverColor: "#090A0B"}
   */
  dropdownIndicator?: CustomDropdownIndicatorProps
  /**
   * Action to do on clear select value
   */
  onClearValue?: () => Promise<void>
}

export type SelectProps<T> = DefaultSelectProps<T> & MultipleSelectType<T>

export function Select<T>({
  multiple,
  options,
  defaultValue,
  closeMenuOnScroll = false,
  closeMenuOnSelect,
  placeholder = 'Selecione',
  disabled = false,
  label,
  optional = false,
  error,
  padding = '12px 16px',
  backgroundColor = 'white',
  border = '1px solid grey-400',
  borderRadius = 'md',
  dropdownIndicator = {
    icon: ArrowUp2,
    variant: 'Bold',
    hoverColor: '#E9EBED'
  },
  onClearValue,
  onValueChange,
  ...props
}: SelectProps<T>) {
  const [menuIsOpen, setMenuIsOpen] = React.useState<boolean>(false)

  function handleSelectOnValueChange(
    selectedOptions: MultiValue<SelectOption<T>> | SingleValue<SelectOption<T>>
  ) {
    if (!multiple && !Array.isArray(selectedOptions)) {
      const sameValueFromOptions = options.find(
        (option) => option === selectedOptions
      )

      if (sameValueFromOptions && onValueChange) {
        onValueChange(sameValueFromOptions)
      }
    }

    if (multiple) {
      const parsedSelectedOptions: SelectOption<T>[] =
        selectedOptions as SelectOption<T>[]

      if (onValueChange) onValueChange(parsedSelectedOptions)
    }
  }

  return (
    <SelectStyle.Container>
      {label && (
        <SelectStyle.HeaderContainer>
          <SelectStyle.Label htmlFor={label} title={label}>
            {label}
          </SelectStyle.Label>
          {optional && (
            <SelectStyle.OptionalBadge>Opcional</SelectStyle.OptionalBadge>
          )}
        </SelectStyle.HeaderContainer>
      )}
      <ReactSelect
        {...props}
        menuPlacement={props.menuPlacement || 'auto'}
        menuPortalTarget={props.menuPortalTarget || document.body}
        isClearable={multiple}
        hideSelectedOptions={false}
        isMulti={multiple || undefined}
        closeMenuOnScroll={closeMenuOnScroll}
        closeMenuOnSelect={closeMenuOnSelect ?? !multiple}
        isDisabled={disabled}
        options={options}
        onChange={handleSelectOnValueChange}
        classNamePrefix="select"
        styles={selectStyles({
          error,
          padding,
          backgroundColor,
          border,
          borderRadius,
          dropdownIndicator
        })}
        defaultValue={defaultValue}
        placeholder={placeholder}
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
            <DropdownIndicator
              props={props}
              dropdownIndicator={dropdownIndicator}
              disabled={disabled}
            />
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
