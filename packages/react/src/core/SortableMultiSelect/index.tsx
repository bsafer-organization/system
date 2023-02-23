// import { Draggable } from 'react-beautiful-dnd'
import { HambergerMenu, ProfileDelete } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Button } from '../Button'
import { OptionProps, Select, SelectProps } from '../Select'

export type SortableMultiSelectOption<T> = OptionProps & {
  meta?: T
}

type SortableMultiSelectOptionWithId<T> = SortableMultiSelectOption<T> & {
  itemId: string
}

export interface SortableMultiSelectProps<T = {}> {
  value?: SortableMultiSelectOption<T>[]
  optionsLimit?: number | boolean
  options: SortableMultiSelectOption<T>[]
  onValuesChange?: (options: SortableMultiSelectOption<T>[]) => void
  selectProps?: Omit<SelectProps, 'options'>
}

export function SortableMultiSelect<T>({
  options,
  value,
  optionsLimit,
  onValuesChange,
  selectProps
}: SortableMultiSelectProps<T>) {
  const [items, setItems] = useState<SortableMultiSelectOptionWithId<T>[]>([
    {
      itemId: crypto.randomUUID()
    } as SortableMultiSelectOptionWithId<T>
  ])
  const availableOptions = options.map(({ label, value }) => ({ label, value }))

  const disabledByOptionsAmount =
    typeof optionsLimit === 'number'
      ? items.length >= optionsLimit
      : optionsLimit
      ? items.length >= options.length
      : false

  function handleAddToList() {
    const newEmptyItem = {
      itemId: crypto.randomUUID()
    } as SortableMultiSelectOptionWithId<T>
    setItems((prevItems) => [...prevItems, newEmptyItem])
  }

  function handleRemoveToList(itemListId: string) {
    return () => {
      setItems((prevItems) => {
        const itemsWithoutItem = [...prevItems] // novo dado na memória
        const itemIndex = itemsWithoutItem.findIndex(
          (item) => item.itemId === itemListId
        )

        if (itemIndex >= 0) {
          itemsWithoutItem.splice(itemIndex, 1)
          return itemsWithoutItem
        }

        return prevItems
      })
    }
  }

  function dragAndDrop() {}

  function handleSelectOnValueChange(item: SortableMultiSelectOptionWithId<T>) {
    const onValueChange: SelectProps['onValueChange'] = (option) => {
      if (!Array.isArray(option)) {
        const uniqueOption = option as {
          label: string
          value: string
        }
        setItems((prevItems) => {
          const items = [...prevItems]
          const optionIndex = availableOptions.findIndex(
            (option) => option.value === uniqueOption.value
          )
          const prevItemIndex = items.findIndex(
            (prevItem) => prevItem.itemId === item.itemId
          )

          if (prevItemIndex >= 0 && optionIndex >= 0) {
            items[prevItemIndex] = {
              ...uniqueOption,
              itemId: item.itemId,
              meta: options[optionIndex].meta
            }
            return items
          }
          return prevItems
        })
      }
    }

    return onValueChange
  }

  useEffect(() => {
    if (onValuesChange) onValuesChange(items)
  }, [items, onValuesChange])

  useEffect(() => {
    if (value?.length) {
      setItems(value.map((item) => ({ ...item, itemId: crypto.randomUUID() })))
    }
  }, [value])

  return (
    <div className="w-full flex flex-col bg-transparent">
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        <Droppable droppableId="droppable">
          {(DroppableProvided, DroppableSnapshot) => (
            <ul
              {...DroppableProvided.droppableProps}
              ref={DroppableProvided.innerRef}
              className="w-full flex flex-col gap-2"
            >
              {items.map((item, index) => {
                return (
                  <Draggable
                    disableInteractiveElementBlocking
                    key={item.itemId}
                    draggableId={item.itemId}
                    index={index}
                  >
                    {/* // TODO : concluir função de draggable */}
                    {(DraggableProvided, DroggableSpapshot) => (
                      <li
                        ref={DraggableProvided.innerRef}
                        {...DraggableProvided.draggableProps}
                        key={index}
                        className="w-full min-w-[4rem] flex items-center focus-within:ring-1 ring-black rounded bg-grey-200 p-2"
                      >
                        <span
                          className="flex p-2"
                          {...DraggableProvided.dragHandleProps}
                        >
                          <HambergerMenu />
                        </span>
                        <Select
                          {...selectProps}
                          padding="0.25rem 0.5rem"
                          onValueChange={handleSelectOnValueChange(item)}
                          value={
                            item.value
                              ? {
                                  label: item.label,
                                  value: item.value
                                }
                              : undefined
                          }
                          border="1px solid transparent"
                          className="[&_.select\_\_control]:hover:border-transparent [&_.select\_\_control]:focus-visible:border-transparent"
                          backgroundColor="transparent"
                          options={availableOptions}
                        />
                        {items.length > 1 && (
                          <button
                            className="flex justify-center items-center focus-visible:ring-1 ring-black rounded p-2"
                            onClick={handleRemoveToList(item.itemId)}
                          >
                            <ProfileDelete />
                          </button>
                        )}
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {DroppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <Button
        size="sm"
        variant="outlined"
        color="default"
        className="mt-3 justify-start max-w-fit "
        onClick={handleAddToList}
        disabled={disabledByOptionsAmount}
      >
        Adicionar novo campo
      </Button>
    </div>
  )
}
