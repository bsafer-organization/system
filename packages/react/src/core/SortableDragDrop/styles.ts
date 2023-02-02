import { w } from 'windstitch'
import { StylesConfig } from 'react-select'
import { GroupedOption, InputData } from './index'
import React from 'react'

export const GeneralStyle = {
  DragArea: w.div(
    `
    flex
    justify-center
    items-center
    w-[10%]
    min-w-[10%]
    
    [&>.startIcon]:flex
    [&>.startIcon]:justify-between
    [&>.startIcon]:items-center
    [&>.startIcon]:gap-1.5

    [&>.sequenceNumber]:w-8
  `,
    {
      variants: {
        disabled: (disabled?: boolean) =>
          disabled
            ? `
              [&>.startIcon]:hover:inline-flex
              [&>.dragIcon]:hover:hidden
              [&>.sequenceNumber]:hover:inline-flex
            `
            : `
              [&>.startIcon]:hover:hidden
              [&>.dragIcon]:hover:inline-flex
              [&>.sequenceNumber]:hover:hidden
            `,
        dragging: (isDragging: boolean) => {
          return isDragging
            ? `
          [&>.startIcon]:hidden
          [&>.dragIcon]:inline-flex
          [&>.sequenceNumber]:hidden
        `
            : `
            [&>.startIcon]:inline-flex
            [&>.dragIcon]:hidden
            [&>.sequenceNumber]:inline-flex
        `
        }
      }
    }
  ),
  Button: w.button(
    `
      flex
      justify-center
      items-center
      gap-2
      p-1
      mt-1.5

      rounded-lg
      text-sm

      text-grey-900
      bg-transparent hover:bg-grey-200
      border-grey-900 border hover:border-black
      focus:bg-grey-200

      transition-colors

      bg-transparent
      

      disabled:cursor-not-allowed
      disabled:text-grey-600
    `
  ),
  ErrorTextContainer: w.div(
    `
      text-xs
      text-assistant-red-main

      flex
      items-center
      gap-2
    
      mt-1
      mb-3
  `,
    {}
  ),
  Control: w.div(
    `
      flex
      items-center
      justify-between
      
      gap-0.5
      mb-1

      w-full
  `,
    {}
  ),
  DragSelectContainer: w.div(
    `
      flex
      items-center
      justify-start

      bg-[#E9EBED]

      w-full
      h-full

      rounded-lg

      pl-2.5
      
      gap-px
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
  startIcon?: React.ReactNode | boolean
}

export const selectStyles = ({ startIcon }: SelectStylesProps) => {
  const config: StylesConfig<InputData, false, GroupedOption> = {
    indicatorSeparator: (baseStyles, { isMulti }) => ({
      ...baseStyles,
      display: 'none'
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      cursor: 'pointer',
      padding: '0.25rem',
      borderRadius: '9999px',
      '&:hover': {
        backgroundColor: '#DDE0E3',
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
      padding: '0'
    }),
    control: (baseStyles, { isFocused, isDisabled }) => {
      return {
        ...baseStyles,
        borderRadius: '0.5rem',
        boxShadow: 'none',
        backgroundColor: variants({
          isDisabled
        }).control.background,
        padding: startIcon ? '12px 6px 12px 16px' : '12px 6px 12px 0px',
        lineHeight: '1.313rem',
        fontSize: variants({
          isFocused,
          isDisabled
        }).fontSize,
        fontWeight: variants({
          isFocused,
          isDisabled
        }).fontWeight,
        border: 'none',
        color: variants({
          isFocused,
          isDisabled
        }).fontColor
      }
    },
    placeholder: (baseStyles, { isFocused, isDisabled }) => ({
      ...baseStyles,
      fontSize: variants({
        isFocused,
        isDisabled
      }).fontSize,
      fontWeight: variants({
        isFocused,
        isDisabled
      }).fontWeight,
      color: variants({ isDisabled }).fontColor,
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
        // Scroll no estilo do figma
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
        background: variants({
          isDisabled,
          isFocused,
          isSelected
        }).options.background,
        color: 'black',
        borderRadius: '0.25rem',
        padding: '16px',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '1.313rem',
        ':active': {
          background: '#E6F3FF'
        },
        wordBreak: 'break-all'
      }
    },
    multiValue: (baseStyles) => {
      return {
        ...baseStyles,
        borderRadius: '1rem',
        background: '#E6F3FF'
      }
    },
    multiValueLabel: (baseStyles) => {
      return {
        ...baseStyles,
        color: '#108BFF'
      }
    },
    multiValueRemove: (baseStyles) => {
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
