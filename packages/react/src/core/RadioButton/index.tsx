import { RadioButtonStyle } from './styles'

interface OptionData {
  label: string
  value: string
}

type OptionDataArray = {
  0: OptionData
  1: OptionData
} & OptionData[]

export interface RadioButtonProps {
  /**
   * If value was passed, the option with the same value will be checked. If not, the first option will be checked
   */
  value?: string
  /**
   * Minimum of 2 options
   * @required
   */
  options: OptionDataArray
  /**
   *
   * @param value option value
   */
  onOptionChange?: (value: string) => void
  /**
   * Disable all component
   * @default false
   */
  disabled?: boolean
  /**
   * Radios orientation
   * @default vertical
   */
  orientationView?: 'vertical' | 'horizontal' | 'flex' | 'grid'
}

/**
 * Render, at least, 2 radio buttons inside form wrapper.
 * @param RadioButtonProps
 */

export function RadioButton({
  value,
  options,
  onOptionChange,
  disabled = false,
  orientationView = 'vertical'
}: RadioButtonProps) {
  return (
    <RadioButtonStyle.Root
      data-testid="radio_button__testid"
      orientationView={orientationView}
      defaultValue={value ?? options[0].value}
      aria-label="View density"
      onValueChange={onOptionChange}
      disabled={disabled}
    >
      {options.map((option) => (
        <RadioButtonStyle.Label htmlFor={option.value} key={option.value}>
          <RadioButtonStyle.Item
            data-testid="radio_button_item__testid"
            value={option.value}
            id={option.value}
          >
            <RadioButtonStyle.Indicator />
          </RadioButtonStyle.Item>
          <span
            data-testid="radio_button_label__testid"
            className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {option.label}
          </span>
        </RadioButtonStyle.Label>
      ))}
    </RadioButtonStyle.Root>
  )
}
