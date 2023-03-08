import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'

describe('Sample', () => {
  afterEach(() => {
    cleanup()
  })

  const SampleElement = ({ children }: { children: ReactNode }) => {
    return (
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-lg text-black">{children}</h1>
        <p className="text-grey-800">sample_1</p>
        <p className="text-grey-800">sample_2</p>
      </div>
    )
  }

  it('render element', () => {
    render(<SampleElement>test</SampleElement>)
    // screen.debug()
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})

// eslint-disable-next-line
export { }
