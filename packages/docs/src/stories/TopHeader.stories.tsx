import { TopHeader } from '@bsafer-system/react'
import { Meta } from '@storybook/react'

export default {
  title: 'Organisms/TopHeader',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=6%3A58&t=FmaJyTGuTzAm78Q0-0'
    }
  }
} as Meta

export const Default = () => {
  return (
    <div className="bg-grey-300 rounded w-screen max-w-5xl h-96">
      <TopHeader.Root>
        <TopHeader.Leading>
          <div className="bg-grey-100 p-1 rounded-md">Leading</div>
        </TopHeader.Leading>
        <TopHeader.Center>
          <div className="bg-grey-100 p-1 flex-1 rounded-md">Center</div>
        </TopHeader.Center>
        <TopHeader.Trailing>
          <div className="bg-grey-100 p-1 flex-1 rounded-md">Trailing</div>
        </TopHeader.Trailing>
      </TopHeader.Root>
    </div>
  )
}
