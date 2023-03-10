import { describe, it } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { RadioButton, RadioButtonProps } from '../../core/RadioButton'

const options: RadioButtonProps['options'] = [
  {
    label: 'Pessoa física',
    value: 'pf'
  },
  {
    label: 'Pessoa jurídica',
    value: 'pj'
  },
  {
    label: 'MEI',
    value: 'mei'
  }
]

describe('Components: RadioButton', () => {
  it('should render the component with 3 options', () => {
    render(<RadioButton options={options} />)

    expect(screen.getByTestId('radio_button__testid')).toBeInTheDocument()

    const radioButtonItens = screen.getAllByTestId('radio_button_item__testid')

    expect(radioButtonItens).toHaveLength(3)

    expect(radioButtonItens[0].getAttribute('value')).toBe('pf')
    expect(radioButtonItens[1].getAttribute('value')).toBe('pj')
    expect(radioButtonItens[2].getAttribute('value')).toBe('mei')

    const radioButtonLabels = screen.getAllByTestId(
      'radio_button_label__testid'
    )

    expect(radioButtonLabels).toHaveLength(3)

    expect(radioButtonLabels[0]).toHaveTextContent('Pessoa física')
    expect(radioButtonLabels[1]).toHaveTextContent('Pessoa jurídica')
    expect(radioButtonLabels[2]).toHaveTextContent('MEI')
  })

  it('should render the component with 3 options and a default option', () => {
    render(<RadioButton options={options} value={options[0].value} />)

    expect(screen.getByTestId('radio_button__testid')).toBeInTheDocument()

    const radioButtonItens = screen.getAllByTestId('radio_button_item__testid')

    expect(radioButtonItens).toHaveLength(3)

    expect(radioButtonItens[0].getAttribute('aria-checked')).toBe('true')
    expect(radioButtonItens[1].getAttribute('aria-checked')).toBe('false')
    expect(radioButtonItens[2].getAttribute('aria-checked')).toBe('false')
  })
})
