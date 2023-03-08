import { describe, it } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Heading } from '../../core/Heading'

describe('Components: Heading', () => {
  it('should render the component', () => {
    render(<Heading>Heading tests</Heading>)

    expect(screen.getByTestId('heading_testid')).toBeInTheDocument()
    expect(screen.getByText(/Heading tests/i)).toBeInTheDocument()
  })
})
