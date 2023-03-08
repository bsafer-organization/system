import { describe, it } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import { Alerts } from '../../core/Alerts'
import '@testing-library/jest-dom'

describe('Components: Alerts', () => {
  it("should render the component with 'warning' (default) feedback", () => {
    render(<Alerts message="warning alert" />)

    expect(screen.getByTestId('alerts__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('alerts_warning_icon__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/warning alert/i)).toBeInTheDocument()
  })

  it("should render the component with 'success' feedback", () => {
    render(<Alerts feedback="success" message="success alert" />)

    expect(screen.getByTestId('alerts__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('alerts_success_icon__testid')
    ).toBeInTheDocument()
    expect(screen.getByText(/success alert/i)).toBeInTheDocument()
  })

  it("should render the component with 'error' feedback", () => {
    render(<Alerts feedback="error" message="error alert" />)

    expect(screen.getByTestId('alerts__testid')).toBeInTheDocument()
    expect(screen.getByTestId('alerts_error_icon__testid')).toBeInTheDocument()
    expect(screen.getByText(/error alert/i)).toBeInTheDocument()
  })

  it("should render the component with 'info' feedback", () => {
    render(<Alerts feedback="info" message="info alert" />)

    expect(screen.getByTestId('alerts__testid')).toBeInTheDocument()
    expect(screen.getByTestId('alerts_info_icon__testid')).toBeInTheDocument()
    expect(screen.getByText(/info alert/i)).toBeInTheDocument()
  })
})
