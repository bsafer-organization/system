import { describe, it } from '@jest/globals'
import { screen, render, waitFor, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Select, SelectProps } from '../../core/Select'
import userEvent from '@testing-library/user-event'

const options: SelectProps['options'] = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' }
]

describe('Components: Search', () => {
  it('should render the component', () => {
    render(<Select options={options} />)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should render the component with label and optional badge', () => {
    render(<Select options={options} label="Select label test" optional />)

    expect(screen.getByRole('combobox')).toBeInTheDocument()

    const selectLabelElement = screen.getByTestId('select_label__testid')

    expect(selectLabelElement).toBeInTheDocument()
    expect(selectLabelElement).toHaveTextContent('Select label test')

    expect(
      screen.getByTestId('select_optional_badge__testid')
    ).toBeInTheDocument()
  })

  it('should render the component and select an option', async () => {
    const { container } = render(<Select options={options} closeMenuOnSelect />)

    const selectElement = screen.getByRole('combobox')

    expect(selectElement).toBeInTheDocument()

    await userEvent.click(selectElement)

    await userEvent.click(screen.getAllByText(/Ocean/i)[1])

    expect(container.querySelector('.select__single-value')).toHaveTextContent(
      'Ocean'
    )
  })

  it('should render the component in multiple mode, select an option and clear every selected options', async () => {
    const { container } = render(<Select options={options} multiple />)

    const selectElement = screen.getByRole('combobox')

    expect(selectElement).toBeInTheDocument()

    await userEvent.click(selectElement)

    await userEvent.click(screen.getAllByText(/Ocean/i)[1])

    // CLEAR INDICATOR
    await act(async () => {
      await userEvent.click(screen.getByRole('button'))
    })

    expect(
      container.querySelector('#react-select-5-placeholder')
    ).toHaveTextContent('Selecione')
  })

  it('should render the component with error', async () => {
    render(<Select options={options} error="Select error test" />)

    expect(screen.getByTestId('select_error__testid')).toBeInTheDocument()
    expect(screen.getByText(/Select error test/i)).toBeInTheDocument()
  })

  it('should render the component with disabled prop', async () => {
    const { container } = render(<Select options={options} disabled />)

    expect(container.querySelector('#select__input')).toBeInTheDocument()
  })
})
