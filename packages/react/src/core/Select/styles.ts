import { StylesConfig } from 'react-select'
import { w } from 'windstitch'
import { CustomDropdownIndicatorProps, OptionProps, SelectProps } from './index'

export const SelectStyle = {
  Container: w.div(
    `
    border-none p-0 m-0 w-full min-w-0
  `,
    {}
  ),
  ErrorTextContainer: w.div(
    `
    text-xs text-assistant-red-main
        flex items-center gap-2
      
        mt-1
  `,
    {}
  ),
  Label: w.label(
    `
    font-bold text-grey-800 text-xs text-ellipsis whitespace-nowrap overflow-hidden
  `,
    {}
  ),
  OptionalBadge: w.label(
    `
    font-regular text-grey-400 text-xs
    py-[.125rem] px-1
    bg-grey-100 rounded
  `,
    {}
  ),
  HeaderContainer: w.label(
    `
    flex items-center mb-1 gap-2 min-h-[1.375rem]
  `,
    {}
  )
}

const variants = ({
  isDisabled,
  isFocused,
  isSelected,
  error,
  backgroundColor,
  border
}: {
  isDisabled?: boolean
  isFocused?: boolean
  isSelected?: boolean
  error?: string | boolean
  backgroundColor?: string
  border?: string
}) => {
  const props = {
    fontSize: '14px',
    fontColor: 'grey-600',
    fontWeight: '300',
    control: {
      border,
      background: backgroundColor
    },
    options: {
      background: ''
    }
  }
  if (isFocused && isSelected) {
    props.options.background = '#E6F3FF'
  }
  if (isSelected) {
    props.options.background = '#E6F3FF'
  }
  if (isFocused && !isSelected) {
    props.control.border = '1px solid #090A0B'
    props.options.background = '#DDE0E3'

    props.fontSize = '14px'
    props.fontColor = 'grey-800'
    props.fontWeight = '400'
  }
  if (error) {
    props.control.border = '1px solid #EF1B1F'

    props.fontSize = '14px'
    props.fontColor = '#EF1B1F'
    props.fontWeight = '400'
  }
  if (isDisabled) {
    props.control.border = '1px solid #747F87'
    props.control.background = '#E9EBED'

    props.fontSize = '14px'
    props.fontColor = '#747F87'
    props.fontWeight = '400'
  }

  return props
}

export interface SelectStylesProps {
  error?: string
  padding?: string
  backgroundColor?: string
  border?: string
  borderRadius?: SelectProps['borderRadius']
  dropdownIndicator?: CustomDropdownIndicatorProps
}

export const selectStyles = ({
  error,
  padding,
  backgroundColor,
  border,
  borderRadius,
  dropdownIndicator
}: SelectStylesProps) => {
  const config: StylesConfig<OptionProps> = {
    indicatorSeparator: (baseStyles, { isMulti, hasValue }) => ({
      ...baseStyles,
      display: isMulti && hasValue ? '' : 'none'
    }),
    clearIndicator: (baseStyles, { isMulti }) => ({
      ...baseStyles,
      color: '#2E3338',
      cursor: 'pointer',
      padding: '0.25rem',
      marginRight: '0.25rem',
      borderRadius: '9999px',
      '&:hover': {
        color: '#2E3338',
        backgroundColor: '#E9EBED',
        transitionProperty:
          'color, background-color, border-color, text-decoration-color, fill, stroke',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms'
      },
      '&>svg': {
        width: '1rem',
        height: '1rem'
      }
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      cursor: 'pointer',
      padding: '0.25rem',
      marginLeft: '0.25rem',
      borderRadius: '9999px',
      '&:hover': {
        backgroundColor: dropdownIndicator?.hoverColor,
        transitionProperty:
          'color, background-color, border-color, text-decoration-color, fill, stroke',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms'
      }
    }),
    container: (baseStyles) => ({
      ...baseStyles,
      width: '100%'
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      padding: '0',
      gap: '0.25rem'
    }),
    control: (baseStyles, { isFocused, isDisabled }) => {
      let controlBorderRadius = ''
      switch (borderRadius) {
        case 'full':
          controlBorderRadius = '9999px'
          break

        default:
          controlBorderRadius = '0.5rem'
          break
      }

      return {
        ...baseStyles,
        minHeight: 0,
        boxShadow: 'none',
        backgroundColor: variants({ isDisabled, backgroundColor }).control
          .background,
        borderRadius: controlBorderRadius,
        border: variants({ isFocused, error, isDisabled, border }).control
          .border,
        padding,
        lineHeight: '1.313rem',
        fontSize: variants({ isFocused, isDisabled }).fontSize,
        fontWeight: variants({ isFocused, isDisabled }).fontWeight,
        color: variants({ isFocused, error, isDisabled }).fontColor,
        ':hover': {
          border: error ? '1px solid #EF1B1F' : '1px solid #090A0B'
        },
        '.select__single-value': {
          lineHeight: '1.313rem',
          fontSize: variants({ isFocused }).fontSize,
          fontWeight: variants({ isFocused }).fontWeight,
          color: variants({ isFocused, error, isDisabled }).fontColor
        }
      }
    },
    placeholder: (baseStyles, { isFocused, isDisabled }) => ({
      ...baseStyles,
      fontSize: variants({ isFocused, isDisabled }).fontSize,
      fontWeight: variants({ isFocused, isDisabled }).fontWeight,
      color: variants({ error, isDisabled }).fontColor,
      lineHeight: '1.313rem'
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      padding: '16px',
      borderRadius: '8px'
    }),
    menuList: (baseStyles) => {
      const clientHeight =
        document.querySelector('.select__menu-list')?.clientHeight
      const scrollHeight =
        document.querySelector('.select__menu-list')?.scrollHeight

      return {
        ...baseStyles,
        display: 'grid',
        gap: '0.5rem',
        padding:
          scrollHeight && clientHeight && scrollHeight > clientHeight
            ? '0 0.5rem 0 0'
            : '0 0 0 0',
        '::-webkit-scrollbar': {
          width: '3px'
        },
        '::-webkit-scrollbar-thumb': {
          borderRadius: '100px',
          background: '#090A0B'
        }
      }
    },
    option: (baseStyles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...baseStyles,
        background: variants({ isDisabled, isFocused, isSelected }).options
          .background,
        color: 'black',
        borderRadius: '0.25rem',
        padding: padding || '16px',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '1.313rem',
        ':active': {
          background: '#E6F3FF'
        },
        wordBreak: 'break-all'
      }
    },
    multiValue: (baseStyles, { isDisabled, isFocused }) => {
      return {
        ...baseStyles,
        borderRadius: '1rem',
        background: '#E6F3FF'
      }
    },
    multiValueLabel: (baseStyles, { isDisabled, isFocused }) => {
      return {
        ...baseStyles,
        color: '#108BFF'
      }
    },
    multiValueRemove: (baseStyles, { isDisabled, isFocused }) => {
      return {
        ...baseStyles,
        color: '#108BFF',
        '&:hover': {
          backgroundColor: 'transparent',
          transitionProperty:
            'color, background-color, border-color, text-decoration-color, fill, stroke',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms'
        }
      }
    }
  }
  return config
}
