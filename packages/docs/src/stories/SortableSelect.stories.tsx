import {
  Heading,
  SortableSelect,
  SortableSelectOption,
  SortableSelectProps
} from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Organisms/SortableSelect'
} as Meta

type PlaygroundProps = SortableSelectProps & { optionLimitBoolean?: boolean }

type User = {
  id: string
  name: string
  register: string
}

const users = Array.from(Array(3).keys()).map((index) => {
  const inc = index + 1
  return {
    id: inc.toString(),
    name: `User-${inc}`,
    register: inc.toString().padStart(4, '0')
  }
})

export const Playground: StoryFn<PlaygroundProps> = (props) => {
  const { error, optionsLimit, optionLimitBoolean, label, disabled, optional } =
    props
  const [selectedUsers, setSelectedUsers] = useState<
    SortableSelectOption<User>[]
  >(
    // users.map((user) => ({
    //   label: user.name,
    //   value: user.id,
    //   meta: user
    // }))
    []
  )
  return (
    <div className="w-[95vw] grid grid-cols-12 gap-10">
      <div className="col-span-full md:col-span-5">
        <SortableSelect
          value={selectedUsers}
          label={label}
          optional={optional}
          options={users.map((user) => ({
            label: user.name,
            value: user.id,
            meta: user
          }))}
          error={error}
          disabled={disabled}
          optionsLimit={optionsLimit || optionLimitBoolean}
          onValuesChange={(options) => {
            console.log('options', options)
            setSelectedUsers(options)
          }}
          selectProps={{
            placeholder: 'Selecione um usuário'
          }}
        />
      </div>

      <div className="col-span-full md:col-span-7 pr-4">
        <Heading as="h6">Result (onValuesChange)</Heading>
        <div className="w-full overflow-x-hidden pr-4">
          {selectedUsers.map((user, index) => {
            return (
              <div key={index} className="flex gap-3 mb-3">
                <span className="bg-assistant-blue-light flex p-1 justify-center items-center rounded text-assistant-blue-dark">
                  {index + 1}
                </span>
                <div className="p-2 rounded bg-grey-100 flex-1">
                  <pre className="text-sm whitespace-pre-wrap">
                    {JSON.stringify(selectedUsers[index], null, 2)}
                  </pre>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Playground.args = {
  label: 'Usuários',
  optional: false,
  disabled: false,
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

export const Errors = () => {
  return (
    <div className="w-[400px]">
      <SortableSelect
        options={users.map((user) => ({
          label: user.name,
          value: user.id,
          meta: user
        }))}
        error={'Campo obrigatório'}
        selectProps={{
          placeholder: 'Selecione um usuário'
        }}
      />
    </div>
  )
}

interface WithOptionsLimitsProps {
  optionsLimitNumber: number
  optionsLimitBoolean: boolean
}

export const WithOptionLimits: StoryFn<WithOptionsLimitsProps> = ({
  optionsLimitBoolean,
  optionsLimitNumber
}) => {
  return (
    <div className="w-[600px] grid grid-cols-2 gap-4">
      <article>
        <Heading as="h6" className="mb-4">
          Limited by option amount (true)
        </Heading>
        <SortableSelect
          options={users.map((user) => ({
            label: user.name,
            value: user.id,
            meta: user
          }))}
          optionsLimit={optionsLimitBoolean}
          selectProps={{
            placeholder: 'Selecione um usuário'
          }}
        />
      </article>
      <article>
        <Heading as="h6" className="mb-4">
          Limited by number
        </Heading>
        <SortableSelect
          options={users.map((user) => ({
            label: user.name,
            value: user.id,
            meta: user
          }))}
          optionsLimit={optionsLimitNumber}
          selectProps={{
            placeholder: 'Selecione um usuário'
          }}
        />
      </article>
    </div>
  )
}

WithOptionLimits.args = {
  optionsLimitBoolean: false,
  optionsLimitNumber: 5
}
WithOptionLimits.argTypes = {
  optionsLimitBoolean: {
    name: `optionsLimit (boolean)`
  },
  optionsLimitNumber: {
    name: 'optionsLimit (number)'
  }
}
