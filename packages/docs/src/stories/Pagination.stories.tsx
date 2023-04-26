import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
// import { Pagination, PaginationProps } from '@bsafer-system/react'
import { Pagination, PaginationProps } from '../components/Pagination'

interface IOptions {
  n: number
  value: string
  label: string
}

const options: IOptions[] = [
  { n: 1, value: 'ocean', label: 'Ocean' },
  { n: 2, value: 'blue', label: 'Blue' },
  { n: 3, value: 'purple', label: 'Purple' },
  { n: 4, value: 'red', label: 'Red' },
  { n: 5, value: 'orange', label: 'Orange' },
  { n: 6, value: 'yellow', label: 'Yellow' },
  { n: 7, value: 'green', label: 'Green' },
  { n: 8, value: 'forest', label: 'Forest' },
  { n: 9, value: 'slate', label: 'Slate' },
  { n: 10, value: 'silver', label: 'Silver' },
  { n: 11, value: 'black', label: 'Black' },
  { n: 12, value: 'laranja', label: 'Laranja' },
  { n: 13, value: 'branco', label: 'Branco' },
  { n: 14, value: 'sim', label: 'Sim' },
  { n: 15, value: 'nao', label: 'Não' }
]

export default {
  title: 'Core/Pagination',
  component: Pagination,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=446%3A2391&t=fE8HNjTfArbFMfN1-0'
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col h-full overflow-hidden">{Story()}</div>
      )
    }
  ]
} as Meta<PaginationProps<typeof options>>

export const Playground: StoryObj<PaginationProps<typeof options>> = {}

export const Optional = () => {
  const [itemsFiltrados, setItemsFiltrados] = React.useState<IOptions[]>()
  return (
    <div className="overflow-hidden flex-1 px-2">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <table className="w-full table-fixed border-separate border-spacing-y-2 px-1">
            <thead className="sticky top-0 bg-background">
              <tr>
                <th>Index</th>
                <th>Color</th>
              </tr>
            </thead>

            <tbody>
              {itemsFiltrados &&
                itemsFiltrados.length > 0 &&
                itemsFiltrados.map((option, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-grey-100 hover:bg-white hover:shadow-md
                  transition-all text-sm [&_td]:py-4 [&_td]:px-6 [&_td_*]:text-sm [&_td_*]:font-light [&_*]:cursor-pointer"
                    >
                      <td className="rounded-l-md" align="center">
                        <span>{option.n}</span>
                      </td>
                      <td className="rounded-l-md" align="center">
                        <span>{option.label}</span>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
        <Pagination<IOptions[]>
          totalRecords={options.length}
          items={options}
          onPageChange={({ filteredItems }) => {
            setItemsFiltrados(filteredItems)
            console.log('items no stories', filteredItems)
          }}
        />
      </div>
    </div>
  )
}
