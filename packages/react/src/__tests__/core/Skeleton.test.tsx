import { describe, it } from '@jest/globals'
import { screen, render, waitFor, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Skeleton } from '../../core/Skeleton'

describe('Components: Skeleton', () => {
  it('should render the component without children', () => {
    render(<Skeleton />)

    expect(screen.getByTestId('skeleton__testid')).toBeInTheDocument()
  })

  it('should render the component with children', () => {
    render(
      <Skeleton>
        <span data-testid="skeleton_children__testid">
          Skeleton children test
        </span>
      </Skeleton>
    )

    expect(screen.getByTestId('skeleton__testid')).toBeInTheDocument()
    expect(screen.getByTestId('skeleton_children__testid')).toBeInTheDocument()
  })
})
