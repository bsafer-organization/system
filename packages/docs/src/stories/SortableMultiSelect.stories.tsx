import { SortableMultiSelect } from '@bsafer-system/react'
import { Meta } from '@storybook/react'

export default {
  title: 'Organisms/SortableMultiSelect'
} as Meta

type User = {
  id: string
  name: string
  age: number
  createdAt?: string
}

const users: User[] = [
  {
    id: '1',
    name: 'Felipe',
    age: 28
  },
  {
    id: '2',
    name: 'Enzo',
    age: 23
  },
  {
    id: '3',
    name: 'Miguel',
    age: 23
  }
]

const userOptions = users.map((user) => ({
  label: user.name,
  value: user.id,
  meta: user
}))

export const Playground = () => {
  // const [selectedUsers, setSelectedUsers] = useState<
  //   SortableMultiSelectOption<User>[]
  // >([])

  return (
    <div className="w-[30rem]">
      <SortableMultiSelect
        // value={selectedUsers}
        options={userOptions}
        onValuesChange={(options) => {
          console.log('Playground', options)
        }}
        selectProps={{
          placeholder: 'Selecione um usuário'
        }}
      />
    </div>
  )
}
