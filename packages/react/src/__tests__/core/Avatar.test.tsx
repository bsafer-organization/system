import { describe, it } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Avatar } from '../../core/Avatar'

describe('Components: Avatar', () => {
  it('should render the component', () => {
    render(<Avatar name="Avatar Tests" />)

    expect(screen.getByTestId('avatar__testid')).toBeInTheDocument()
  })

  it('should render the component without imageURL', () => {
    render(<Avatar name="Avatar Tests" />)

    expect(screen.getByTestId('avatar__testid')).toBeInTheDocument()
    expect(screen.getByTestId('avatar_text__testid')).toBeInTheDocument()
    expect(screen.queryByTestId('avatar_image__testid')).toBeNull()
  })

  it('should render the component with imageURL', () => {
    render(<Avatar name="Avatar Tests" imageURL="iasund-idunsa" />)

    expect(screen.getByTestId('avatar__testid')).toBeInTheDocument()
    expect(screen.getByTestId('avatar_image__testid')).toBeInTheDocument()
    expect(screen.queryByTestId('avatar_text__testid')).toBeNull()
  })
})
