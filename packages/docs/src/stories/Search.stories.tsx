import {Search, SearchProps} from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Organisms/Search',
    component: Search,
    parameters: {
        design: {
            type: 'figma',
            url: ''
        }
    },
    args: {
        placeholder: 'Pesquise por nomes ou CNPJ',
        disabled: false
    },
    argTypes: {
    },
    decorators: [
        (Story) => {
          return (
            <div className="flex flex-col flex-wrap justify-center items-center gap-10 w-[40rem] max-w-2lx my-0 mx-auto">
              {Story()}
            </div>
          )
        }
      ]
} as Meta<SearchProps>

export const Playground: StoryObj<SearchProps> = {}