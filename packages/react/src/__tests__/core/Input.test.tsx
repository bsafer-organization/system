import { describe, it } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from '../../core/Input'

describe('Components: Input', () => {
  it('should render the component', () => {
    render(<Input />)

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
  })

  it('should render the component with start icon', () => {
    render(<Input startIcon />)

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
    expect(screen.getByTestId('input_start_icon__testid')).toBeInTheDocument()
  })

  it('should render the component with end icon', () => {
    render(<Input endIcon />)

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
    expect(screen.getByTestId('input_end_icon__testid')).toBeInTheDocument()
  })

  it('should render the component with end icon and click handler', () => {
    render(
      <Input
        endIcon
        onClickEndIcon={() => {
          console.log()
        }}
      />
    )

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
    expect(screen.getByTestId('input_end_icon__testid')).toBeInTheDocument()
  })

  it('should render the component with label', () => {
    render(<Input label="Input label test" />)

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
    expect(screen.getByTestId('input_label__testid')).toBeInTheDocument()
    expect(screen.getByText(/Input label test/i)).toBeInTheDocument()
  })

  it('should render the component with optional badge', () => {
    render(<Input optional />)

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('input_optional_badge__testid')
    ).toBeInTheDocument()
  })

  it('should render the component with error', () => {
    render(<Input error="Input error test" />)

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
    expect(screen.getByTestId('input_error_text__testid')).toBeInTheDocument()
    expect(screen.getByText(/Input error test/i)).toBeInTheDocument()
  })
})
