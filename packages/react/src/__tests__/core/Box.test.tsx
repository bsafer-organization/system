import React from 'react'
import { describe, it } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import { Box } from '../../core/Box'
import '@testing-library/jest-dom'

describe('Components: Box', () => {
  it('should render the component', () => {
    render(<Box />)

    expect(screen.getByTestId('box__testid')).toBeInTheDocument()
  })
})
