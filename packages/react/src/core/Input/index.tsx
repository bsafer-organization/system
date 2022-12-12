import { Danger, SearchNormal1 } from 'iconsax-react'
import { HTMLAttributes } from 'react'
import {
  ErrorTextContainer,
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
   * All properties of the input tag must be passed inside this property
   * @default undefined
   */
  inputProps?: HTMLAttributes<HTMLInputElement>
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
  endIcon
}: InputProps) {
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
