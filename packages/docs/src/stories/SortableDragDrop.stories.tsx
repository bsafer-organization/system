import { Meta, StoryObj } from '@storybook/react'
import { Flash, Airdrop } from 'iconsax-react'
import {
  InputData,
  OutputData,
  SortableDragDropSelect,
  SortableSelectProps
} from '@bsafer-system/react'

const options: InputData[] = [
  {
    id: '1',
    name: 'energy1',
    label: 'Energy 1',
    value: '1',
    customProp: {
      key: 'value'
    }
  },
  {
    id: '2',
    name: 'energy2',
    label: 'Energy 2',
    value: '2'
  },
  {
    id: '3',
    name: 'energy3',
    label: 'Energy 3',
    value: '3',
    customProp: {
      key: 'value'
    }
  },
  {
    id: '4',
    name: 'energy4',
    label: 'Energy 4',
    value: '4'
  }
]

const selectedOptions: OutputData[] = [
  {
    id: '1',
    selectedOption: {
      id: '1',
      name: 'energy1',
      label: 'Energy 1',
      value: '1'
    },
    sequence: 1
  },
  {
    id: '2',
    selectedOption: {
      id: '2',
      name: 'energy2',
      label: 'Energy 2',
      value: '2'
    },
    sequence: 2
  }
]

export default {
  title: 'Core/SortableDragDrop',
  component: SortableDragDropSelect,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A203&t=XXZQL1f0uq4lyXu2-0'
    }
  },
  args: {
    options,
    selectedOptions: [],
    disabled: false,
    onSelectChange: (energyGroupByActions) => {
      console.log(energyGroupByActions)
    }
  },
  argTypes: {
    options: {
      control: 'null'
    },
    selectedOptions: {
      control: 'null'
    },
    disabled: {
      control: 'boolean'
    }
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>]
} as Meta<SortableSelectProps>

export const Playground: StoryObj<SortableSelectProps> = {}

export const Creation = () => {
  return (
    <div className="w-96">
      <SortableDragDropSelect
        startIcon={<Flash size={16} />}
        options={options}
        onSelectChange={(energyGroupByActions) => {
          console.log(energyGroupByActions)
        }}
        disabled={false}
      />
    </div>
  )
}

export const Edition = () => {
  return (
    <div className="w-96">
      <SortableDragDropSelect
        startIcon={<Airdrop size={16} />}
        selectedOptions={selectedOptions}
        options={options}
        onSelectChange={(energyGroupByActions) => {
          console.log(energyGroupByActions)
        }}
        disabled={false}
      />
    </div>
  )
}
