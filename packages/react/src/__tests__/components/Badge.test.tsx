import React from 'react'
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '../../core/Badge'

describe('Components: Badge', () => {
  it('should render the component', () => {
    render(<Badge>badge</Badge>)

    expect(screen.getByText('badge')).toBeInTheDocument()
  })
})
