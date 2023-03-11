import { describe, it } from '@jest/globals'
import { screen, render } from '@testing-library/react'
import { TopHeader } from '../../organisms/TopHeader'
import '@testing-library/jest-dom'

describe('Components: Box', () => {
  it('should render the component', () => {
    render(
      <TopHeader.Root>
        <TopHeader.Leading>
          <div>Top header leading test</div>
        </TopHeader.Leading>
        <TopHeader.Center>
          <div>Top header center test</div>
        </TopHeader.Center>
        <TopHeader.Trailing>
          <div>Top header trailing test</div>
        </TopHeader.Trailing>
      </TopHeader.Root>
    )

    expect(screen.getByTestId('top_header__testid')).toBeInTheDocument()
    expect(screen.getByTestId('top_header_leading__testid')).toBeInTheDocument()
    expect(screen.getByTestId('top_header_center__testid')).toBeInTheDocument()
    expect(
      screen.getByTestId('top_header_trailing__testid')
    ).toBeInTheDocument()

    expect(screen.getByText('Top header leading test')).toBeInTheDocument()
    expect(screen.getByText('Top header center test')).toBeInTheDocument()
    expect(screen.getByText('Top header trailing test')).toBeInTheDocument()
  })
})
