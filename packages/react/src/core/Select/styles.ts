import { w } from 'windstitch'
import { StylesConfig } from 'react-select'

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
    bg-grey-100 rounded-[0.25rem]
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
  error
}: {
  isDisabled?: boolean
  isFocused?: boolean
  isSelected?: boolean
  error?: string | boolean
}) => {
  const props = {
    fontSize: '14px',
    fontColor: 'grey-600',
    fontWeight: '300',
    control: {
      border: '1px solid grey-400',
      background: 'transparent'
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

interface SelectStylesProps {
  error?: string
}

export const selectStyles = ({ error }: SelectStylesProps) => {
  const config: StylesConfig = {
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
        backgroundColor: '#E9EBED',
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
      return {
        ...baseStyles,
        boxShadow: 'none',
        backgroundColor: variants({ isDisabled }).control.background,
        borderRadius: '0.5rem',
        padding: '12px 16px',
        lineHeight: '1.313rem',
        fontSize: variants({ isFocused, isDisabled }).fontSize,
        fontWeight: variants({ isFocused, isDisabled }).fontWeight,
        border: variants({ isFocused, error, isDisabled }).control.border,
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
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
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
        padding: '16px 16px 16px 16px',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '1.313rem',
        ':active': {
          background: '#E6F3FF'
        }
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
          // backgroundColor: '#E9EBED',
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
