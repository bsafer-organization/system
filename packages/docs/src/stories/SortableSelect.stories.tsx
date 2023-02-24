import {
  Heading,
  SortableSelect,
  SortableSelectProps
} from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Organisms/SortableMultiSelect'
} as Meta

type PlaygroundProps = SortableSelectProps & { optionLimitBoolean?: boolean }

export const Playground: StoryFn<PlaygroundProps> = (props) => {
  const { error, optionsLimit, optionLimitBoolean } = props
  const [selectedUsers, setSelectedUsers] = useState<any>([])
  const users = Array.from(Array(3).keys()).map((index) => {
    const inc = index + 1
    return {
      id: inc.toString(),
      name: `User-${inc}`,
      register: inc.toString().padStart(4, '0')
    }
  })

  return (
    <div className="w-screen max-w-[30rem] flex flex-col gap-10">
      <SortableSelect
        options={users.map((user) => ({
          label: user.name,
          value: user.id,
          meta: user
        }))}
        error={error}
        optionsLimit={optionsLimit || optionLimitBoolean}
        onValuesChange={(options) => {
          setSelectedUsers(options)
        }}
        selectProps={{
          placeholder: 'Selecione um usuário'
        }}
      />

      <div className="flex-1">
        <Heading as="h6">Result (onValuesChange)</Heading>
        <div className="max-h-[200px] overflow-y-auto overflow-x-hidden">
          <pre>{JSON.stringify(selectedUsers, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}

Playground.args = {
  error: '',
  optionsLimit: undefined,
  optionLimitBoolean: false
}

Playground.argTypes = {
  optionsLimit: {
    name: 'optinLimit (Number)',
    control: 'number'
  },
  optionLimitBoolean: {
    name: 'optinLimit (Boolean)'
  }
}
