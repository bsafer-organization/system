import { describe, it } from '@jest/globals'
import { screen, render, waitFor, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { OverflowText } from '../../core/OverflowText'
import userEvent from '@testing-library/user-event'

describe('Components: OverflowText', () => {
  it('should render the component', async () => {
    render(
      <div className="flex w-[30px] overflow-hidden">
        <OverflowText>OverflowText children aaaaaaaaa ssssssssss</OverflowText>
      </div>
    )

    // expect(screen.getByTestId('overflow_text__testid')).toBeInTheDocument()

    // await act(async () => {
    //   await userEvent.hover(
    //     screen.getByTestId('overflow_text_children__testid')
    //   )
    // })

    // await waitFor(() => {
    //   expect(screen.getByTestId('tooltip_content__testid')).toBeInTheDocument()
    // })

    // screen.debug()
  })
})
