import { describe, it } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Search } from '../../core/Search'

describe('Components: Search', () => {
  it('should render the component with custom placeholder', () => {
    render(<Search placeholder="Search input tests" />)

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('input_element__testid').getAttribute('placeholder')
    ).toBe('Search input tests')
  })

  it('should render the component without placeholder', () => {
    render(<Search />)

    expect(screen.getByTestId('input__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('input_element__testid').getAttribute('placeholder')
    ).toBe('Pesquise aqui')
  })
})
