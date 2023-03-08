import { Danger, SearchNormal1 } from 'iconsax-react'
import React from 'react'
import {
  ErrorTextContainer,
  IconContainer,
  InputContainer,
  InputElement,
  InputElementContainer,
  InputLabel,
  OptionalBadge
} from './styles'

export interface InputProps {
  /**
   * Input label with id and htmlFor
   */
  label?: string
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
   * Listen the click event in the endIcon props.
   */
  onClickEndIcon?: () => void
  /**
   * All properties of the input tag must be passed inside this property
   * @default undefined
   */
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}

/**
 * Render a input element inside fieldset wrapper. Also render into:
 * - label;
 * - optional badge;
 * - error state with message below input;
 * - trailing icon or leading icon;
 * - input element props (placeholder, disabled, etc);
 * @param InputProps
 * @returns `<Input label="Email" />`
 */

export function Input({
  label,
  optional,
  error,
  disabled,
  placeholder,
  inputProps,
  startIcon,
  endIcon,
  onClickEndIcon
}: InputProps) {
  const StartIcon =
    typeof startIcon === 'boolean' && startIcon ? (
      <SearchNormal1 data-testid="input_start_icon__testid" />
    ) : (
      startIcon
    )

  const EndIcon =
    typeof endIcon === 'boolean' && endIcon ? (
      <SearchNormal1 data-testid="input_end_icon__testid" />
    ) : (
      endIcon
    )

  return (
    <InputContainer data-testid="input__testid">
      {(label || optional) && (
        <div className="flex items-center mb-1 gap-2 min-h-[1.375rem]">
          {label && (
            <InputLabel
              data-testid="input_label__testid"
              htmlFor={label}
              title={label}
            >
              {label}
            </InputLabel>
          )}
          {optional && (
            <OptionalBadge data-testid="input_optional_badge__testid">
              Opcional
            </OptionalBadge>
          )}
        </div>
      )}

      <InputElementContainer error={!!error} disabled={disabled}>
        {StartIcon && <IconContainer>{StartIcon}</IconContainer>}

        <InputElement
          {...inputProps}
          id={label}
          placeholder={placeholder}
          disabled={disabled}
        />

        {EndIcon && !onClickEndIcon && <IconContainer>{EndIcon}</IconContainer>}
        {EndIcon && onClickEndIcon && (
          <IconContainer onClick={onClickEndIcon} className="cursor-pointer">
            {EndIcon}
          </IconContainer>
        )}
      </InputElementContainer>

      {error && (
        <ErrorTextContainer data-testid="input_error_text__testid">
          <Danger size={16} />
          <span>{error}</span>
        </ErrorTextContainer>
      )}
    </InputContainer>
  )
}
