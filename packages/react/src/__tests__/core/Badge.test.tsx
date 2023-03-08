import React from 'react'
import { describe, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Badge } from '../../core/Badge'
import '@testing-library/jest-dom'

describe('Components: Badge', () => {
  it('should render the component', () => {
    render(<Badge>badge</Badge>)

    expect(screen.getByTestId('badge__testid')).toBeInTheDocument()
    expect(screen.getByText(/badge/i)).toBeInTheDocument()
  })
})
