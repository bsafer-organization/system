// import { Draggable } from 'react-beautiful-dnd'
import { ProfileDelete, UserAdd } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { Button } from '../Button'
import { OptionProps, Select, SelectProps } from '../Select'

export type SortableMultiSelectOption<T> = OptionProps & {
  meta?: T
}

export interface SortableMultiSelectProps<T = {}> {
  value?: SortableMultiSelectOption<T>[]
  optionsLimit?: number | boolean
  options: SortableMultiSelectOption<T>[]
  onValuesChange?: (options: SortableMultiSelectOption<T>) => void
  selectProps?: Omit<SelectProps, 'options'>
}

export function SortableMultiSelect<T>({
  options,
  value,
  optionsLimit,
  onValuesChange,
  selectProps
}: SortableMultiSelectProps<T>) {
  const [items, setItems] = useState<SortableMultiSelectOption<T>[]>([
    {} as SortableMultiSelectOption<T>
  ])
  const selectOptions = options.map(({ label, value }) => ({ label, value }))

  const disabledByOptionsAmount =
    typeof optionsLimit === 'number'
      ? items.length >= optionsLimit
      : optionsLimit
      ? items.length >= options.length
      : false

  function handleAddToList() {
    const newEmptyItem = {} as SortableMultiSelectOption<T>
    setItems((prevItems) => [...prevItems, newEmptyItem])
  }

  function handleRemoveToList(itemListId: number) {
    return () => {
      setItems((prevItems) => {
        const itemsWithoutItem = [...prevItems]
        console.log('before splice', itemsWithoutItem)
        itemsWithoutItem.splice(itemListId, 1)
        console.log('after splice', itemsWithoutItem)
        return itemsWithoutItem
      })
    }
  }

  function dragAndDrop() {}

  function handleSelectOnValueChange(
    index: number,
    item: SortableMultiSelectOption<T>
  ) {
    const onValueChange: SelectProps['onValueChange'] = (option) => {
      if (!Array.isArray(option)) {
        const uniqueOption = option as {
          label: string
          value: string
        }
        setItems((prevItems) => {
          prevItems[index] = {
            ...uniqueOption,
            meta: item.meta
          }
          return prevItems
        })
      }
    }

    return onValueChange
  }

  useEffect(() => {
    if (value?.length) {
      setItems(value)
    }
  }, [value])

  return (
    <div className="p-2 rounded bg-grey-100 flex flex-col gap-2">
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => {
          const initialSelectValue = item.value
            ? {
                label: item.label,
                value: item.value
              }
            : undefined

          return (
            <li key={index} className="flex gap-2 items-center min-w-[20rem]">
              <UserAdd />
              <Select
                {...selectProps}
                onValueChange={handleSelectOnValueChange(index, item)}
                value={initialSelectValue}
                options={selectOptions}
              />
              {items.length > 1 && (
                <button
                  className="flex justify-center items-center focus-visible:ring"
                  onClick={handleRemoveToList(index)}
                >
                  <ProfileDelete />
                </button>
              )}
            </li>
          )
        })}
      </ul>
      <Button
        size="sm"
        color="default"
        onClick={handleAddToList}
        disabled={disabledByOptionsAmount}
      >
        Adicionar novo campo
      </Button>
    </div>
  )
}
