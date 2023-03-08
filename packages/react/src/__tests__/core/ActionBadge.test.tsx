import { describe, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { ActionBadge } from '../../core/ActionBadge'
import '@testing-library/jest-dom'
import { Add } from 'iconsax-react'

describe('Components: ActionBadge', () => {
  it("should render the component with 'md' (default) size", () => {
    render(<ActionBadge>default action badge</ActionBadge>)

    expect(screen.getByTestId('action_badge__testid')).toBeInTheDocument()
    expect(screen.getByText(/default action badge/i)).toBeInTheDocument()
  })

  it("should render the component with 'xs' size", () => {
    render(<ActionBadge size="xs">xs action badge</ActionBadge>)

    expect(screen.getByTestId('action_badge__testid')).toBeInTheDocument()
    expect(screen.getByText(/xs action badge/i)).toBeInTheDocument()
  })

  it("should render the component with 'sm' size", () => {
    render(<ActionBadge size="sm">sm action badge</ActionBadge>)

    expect(screen.getByTestId('action_badge__testid')).toBeInTheDocument()
    expect(screen.getByText(/sm action badge/i)).toBeInTheDocument()
  })

  it("should render the component with 'lg' size", () => {
    render(<ActionBadge size="lg">lg action badge</ActionBadge>)

    expect(screen.getByTestId('action_badge__testid')).toBeInTheDocument()
    expect(screen.getByText(/lg action badge/i)).toBeInTheDocument()
  })

  it('should render the component with avatar', () => {
    render(
      <ActionBadge avatarUrl="kajsdvb-asnd2is">
        action badge with avatar
      </ActionBadge>
    )

    expect(screen.getByTestId('action_badge__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('action_badge_avatar__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/action badge with avatar/i)).toBeInTheDocument()
  })

  it('should render the component with custom icon', () => {
    render(
      <ActionBadge icon={<Add data-testid="action_badge_icon__testid" />}>
        action badge with custom icon
      </ActionBadge>
    )

    expect(screen.getByTestId('action_badge__testid')).toBeInTheDocument()
    expect(screen.getByTestId('action_badge_icon__testid')).toBeInTheDocument()
    expect(
      screen.getByText(/action badge with custom icon/i)
    ).toBeInTheDocument()
  })

  it('should render the component with default icon', () => {
    render(<ActionBadge>action badge with default icon</ActionBadge>)

    expect(screen.getByTestId('action_badge__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('action_badge_default_icon__testid')
    ).toBeInTheDocument()
    expect(
      screen.getByText(/action badge with default icon/i)
    ).toBeInTheDocument()
  })
})
