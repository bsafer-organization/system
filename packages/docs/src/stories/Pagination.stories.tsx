import React from 'react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Pagination, PaginationProps } from '@bsafer-system/react'

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
  title: 'Organisms/Pagination',
  component: Pagination
} as Meta<PaginationProps<IOptions>>

export const Playground: StoryFn<PaginationProps<IOptions>> = (props) => {
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
        <Pagination
          perPageOptions={props.perPageOptions}
          items={options}
          onPageChange={({ filteredItems }: { filteredItems: IOptions[] }) => {
            setItemsFiltrados(filteredItems)
          }}
        />
      </div>
    </div>
  )
}

Playground.argTypes = {
  perPageOptions: {
    // control: 'select',
    // options: ['2', '8', '25'],
    name: 'Available number of items per page (any string value)'
  }
}

Playground.args = {
  perPageOptions: ['3', '7', '10']
}
