import { describe, it } from '@jest/globals'
import { screen, render, waitFor, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { OverflowText } from '../../core/OverflowText'
import userEvent from '@testing-library/user-event'
import React from 'react'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))

describe('Components: OverflowText', () => {
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetWidth'
  )
  const originalScrollWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'scrollWidth'
  )
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      value: 100
    })
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
      configurable: true,
      value: 150
    })
  })

  afterAll(() => {
    if (originalOffsetWidth && originalScrollWidth) {
      Object.defineProperty(
        HTMLElement.prototype,
        'offsetWidth',
        originalOffsetWidth
      )
      Object.defineProperty(
        HTMLElement.prototype,
        'scrollWidth',
        originalScrollWidth
      )
    }
  })

  it('should render the component', async () => {
    render(
      <div className="flex flex-col p-5 border border-grey-400 rounded w-[400px] overflow-hidden resize-x">
        <OverflowText>Compare text to see overflow</OverflowText>
      </div>
    )

    expect(screen.getByTestId('tooltip_trigger__testid')).toBeInTheDocument()
    expect(screen.getByTestId('overflow_text__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('overflow_text_children__testid')
    ).toBeInTheDocument()

    await act(async () => {
      await userEvent.hover(screen.getByTestId('tooltip_trigger__testid'))
      // fireEvent.mouseOver(screen.getByTestId('tooltip_trigger__testid'))
    })

    // await waitFor(() => {
    //   expect(screen.getByTestId('tooltip_content__testid')).toBeInTheDocument()
    // })
  })

  it('should render the component without children', async () => {
    render(
      <div className="flex w-[50px] overflow-hidden">
        <OverflowText></OverflowText>
      </div>
    )

    expect(screen.queryByTestId('tooltip_trigger__testid')).toBeNull()
    expect(screen.queryByTestId('overflow_text__testid')).toBeNull()
    expect(screen.queryByTestId('overflow_text_children__testid')).toBeNull()
  })
})
