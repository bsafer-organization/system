import { Danger, SearchNormal1 } from 'iconsax-react'
import React from 'react'
import { NumberFormatValues, OnValueChange } from 'react-number-format'
import {
  ErrorTextContainer,
  InputContainer,
  InputElement,
  InputElementContainer,
  InputLabel,
  OptionalBadge,
  InputElementProps
} from './styles'

export interface MaskInputProps {
    /**
     * Input label with id and htmlFor
     */
    label: string
    /**
     * Render a badge with text 'Opcional'
     * @default false
     */
    optional?: boolean
    /**
     * Render a message text below input
     * @default undefined
     */
    error?: string
    /**
     * Disable all component
     * @default false
     */
    disabled?: boolean
    /**
     * Input placeholder
     * @default undefined
     */
    placeholder?: string
    /**
     * Renders an icon to the left of the input. When an icon is not passed as a JSX element The magnifying glass icon is the default
     * @default undefined
     */
    startIcon?: boolean | JSX.Element
    /**
     * Renders an icon to the right of the input. When an icon is not passed as a JSX element The magnifying glass icon is the default
     * @default undefined
     */
    endIcon?: boolean | JSX.Element
    /**
     * Pattern to format the input content.
     * Ex.:
     *     pattern: (##) #####-####
     *     value: 12345678912
     *     result: (12) 34567-8912
     * @default undefined
     */
    format: string
    /**
     * Character to fill the format pattern.
     * @default undefined
     */
    mask?: string
    /**
     * Character to be replace by value
     * @default #
     */
    patternChar?: string
    /**
     * If true, format will be applied on empty values
     * @default false
     */
    allowEmptyFormatting?: boolean,
    /**
     * A checker function to validate the input value.
     * @default undefined
     */
    isAllowed?: (values: NumberFormatValues) => boolean
    /**
     * This handler provides access to any values changes in the input field and is triggered only when a prop changes or the user input changes.
     * @default undefined
     */
    onValueChange?: OnValueChange
    /**
     * All properties of the react-number-format tag must be passed inside this property
     * @default undefined
     */
    inputProps?: InputElementProps
  }

  export function MaskInput({
    label,
    optional,
    error,
    disabled,
    placeholder,
    inputProps,
    startIcon,
    endIcon,
    format,
    mask,
    isAllowed,
    onValueChange,
    allowEmptyFormatting,
    patternChar
  }: MaskInputProps) {
    const DefaultStartIcon =
      typeof startIcon === 'boolean' && startIcon ? <SearchNormal1 /> : startIcon
  
    const DefaultEndIcon =
      typeof endIcon === 'boolean' && endIcon ? <SearchNormal1 /> : endIcon
  
    return (
      <InputContainer>
        <div className="flex items-center mb-1 gap-2 min-h-[1.375rem]">
          <InputLabel htmlFor={label} title={label}>
            {label}
          </InputLabel>
          {optional && <OptionalBadge>Opcional</OptionalBadge>}
        </div>
  
        <InputElementContainer error={!!error} disabled={disabled}>
          {DefaultStartIcon && DefaultStartIcon}
  
          <InputElement
            {...inputProps}
            format={format!}
            mask={mask}
            patternChar={patternChar}
            isAllowed={isAllowed}
            onValueChange={onValueChange}
            allowEmptyFormatting={allowEmptyFormatting}
            id={label}
            placeholder={placeholder}
            disabled={disabled}
          />
  
          {DefaultEndIcon && DefaultEndIcon}
        </InputElementContainer>
  
        {error && (
          <ErrorTextContainer>
            <Danger size={16} />
            <span>{error}</span>
          </ErrorTextContainer>
        )}
      </InputContainer>
    )
  }