import { describe, it } from '@jest/globals'
import { screen, render, act, waitFor } from '@testing-library/react'
import { SidebarMenu } from '../../organisms/SidebarMenu'
import '@testing-library/jest-dom'
import { Add } from 'iconsax-react'
import userEvent from '@testing-library/user-event'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))

describe('Components: SortableSelect', () => {
  it('should render the component', () => {
    console.log('ss')
  })
})
