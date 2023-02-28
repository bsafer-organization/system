// import { Draggable } from 'react-beautiful-dnd'
import { Danger, HambergerMenu, Trash } from 'iconsax-react'
import { useEffect, useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'
import { MultiValue, SingleValue } from 'react-select'
import { Badge } from '../../core/Badge'

import { Button } from '../../core/Button'
import { OptionProps, Select, SelectProps } from '../../core/Select'
import { Text } from '../../core/Text'
import {
  Container,
  DeleteButton,
  DragIndexContainer,
  ItemContent,
  List,
  SelectWithDrapIconContainer,
  TextErrorContainer
} from './styles'

export type SortableSelectOption<T> = OptionProps & {
  /**
   * Meta is a fields for additional informations of the options. This prop get a same type when set `options.meta`
   * @type {object}
   */
  meta?: T
}

type SortableSelectOptionWithId<T> = SortableSelectOption<T> & {
  itemId: string
}

export interface SortableSelectProps<T = {}> {
  /**
   * Render a label before container
   */
  label?: string
  /**
   * Render optional badge
   */
  optional?: boolean
  /**
   * Value is the prop for a current value, both for starting and for controlling the component
   * @default undefined
   */
  value?: SortableSelectOption<T>[]
  /**
   * Error is a string to render below container. Basically, shows an error.
   * @default undefined
   */
  error?: string
  /**
   * Disable selection and drag and drop
   */
  disabled?: boolean
  /**
   * Set a threshold fields amount
   * - `boolean`: If true, limited by options amount in prop `options[].length`
   * - `number`: If more than 0, limited by a number
   * @default false
   */
  optionsLimit?: number | boolean
  /**
   * Options to render in Select component
   *
   * @example
   * {
   *   label: string
   *   value: string
   *   meta?: (T = {})
   * }[]
   *
   */
  options: SortableSelectOption<T>[]
  /**
   * Modify text inside button for add new field
   */
  addButtonText?: string
  /**
   * Event to get values on selector change or order change
   */
  onValuesChange?: (options: SortableSelectOption<T>[]) => void
  /**
   * String to pass class name to top level container
   */
  className?: string
  /**
   * Pass options to Select inside component
   */
  selectProps?: Omit<SelectProps, 'options' | 'multiple'>
  /**
   * Pass options to Container(Div) component
   */
  containerProps?: JSX.IntrinsicElements['div']
}

export function SortableSelect<T>({
  options,
  label,
  value,
  optional,
  disabled,
  optionsLimit,
  error,
  onValuesChange,
  selectProps,
  containerProps,
  className
}: SortableSelectProps<T>) {
  const [items, setItems] = useState<SortableSelectOptionWithId<T>[]>([])

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
    } as SortableSelectOptionWithId<T>
    setItems((prevItems) => {
      const newItems = [...prevItems, newEmptyItem]
      handleItemsChange(newItems)
      return newItems
    })
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
          handleItemsChange(itemsWithoutItem)
          return itemsWithoutItem
        }

        return prevItems
      })
    }
  }

  function handleDragEnd({ reason, destination, draggableId }: DropResult) {
    if (disabled) {
      return
    }

    setItems((items) => {
      const updatedItems = [...items]

      try {
        if (reason === 'DROP' && destination) {
          const itemSourceIndex = updatedItems.findIndex(
            (item) => item.itemId === draggableId
          )

          if (itemSourceIndex >= 0) {
            const movedItem = updatedItems.splice(itemSourceIndex, 1)
            updatedItems.splice(destination.index, 0, movedItem[0])

            handleItemsChange(updatedItems)
            return updatedItems
          }
        }

        return items
      } catch (e) {
        return items
      }
    })
  }

  function handleSelectOnValueChange(item: SortableSelectOptionWithId<T>) {
    return (option: MultiValue<OptionProps> | SingleValue<OptionProps>) => {
      if (!Array.isArray(option)) {
        const uniqueOption = option as {
          label: string
          value: string
        }
        setItems((prevItems) => {
          const items = [...prevItems]
          try {
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
                meta: item.meta || options[optionIndex].meta
              }
              handleItemsChange(items)
              return items
            }

            return prevItems
          } catch (e) {
            return prevItems
          }
        })
      }
    }
  }

  function handleItemsChange(options: SortableSelectOption<T>[]) {
    if (onValuesChange) onValuesChange(options)
  }

  useEffect(() => {
    setItems(
      value?.map((item) => ({ ...item, itemId: crypto.randomUUID() })) ||
        ([
          {
            itemId: crypto.randomUUID()
          }
        ] as SortableSelectOptionWithId<T>[])
    )
  }, [value])

  return (
    <Container className={className} {...containerProps}>
      {(label || optional) && (
        <span className="flex items-center mb-1 gap-2 min-h-[1.375rem]">
          {label && (
            <Text size="xs" weight="bold">
              {label}
            </Text>
          )}
          {optional && (
            <Badge size="xs" color="black">
              Opcional
            </Badge>
          )}
        </span>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(DroppableProvided, DroppableSnapShot) => (
            <List
              {...DroppableProvided.droppableProps}
              ref={DroppableProvided.innerRef}
              error={!!error}
              isDraggingOver={DroppableSnapShot.isDraggingOver}
            >
              {items.map((item, index) => {
                return (
                  <Draggable
                    disableInteractiveElementBlocking
                    key={item.itemId}
                    draggableId={item.itemId}
                    index={index}
                  >
                    {(DraggableProvided, DraggableSnapshot) => (
                      <ItemContent
                        key={index}
                        ref={DraggableProvided.innerRef}
                        {...DraggableProvided.draggableProps}
                      >
                        <SelectWithDrapIconContainer
                          disabled={disabled}
                          error={!!error && !item.value}
                          isDragging={DraggableSnapshot.isDragging}
                        >
                          <DragIndexContainer
                            {...DraggableProvided.dragHandleProps}
                          >
                            {DraggableSnapshot.isDragging && <HambergerMenu />}
                            {!DraggableSnapshot.isDragging && (
                              <>
                                <Text
                                  size="sm"
                                  className="animate-in fade-in group-hover:hidden"
                                >
                                  {index + 1}.
                                </Text>
                                <HambergerMenu className="animate-in fade-in hidden group-hover:inline" />
                              </>
                            )}
                          </DragIndexContainer>
                          <Select
                            padding="0.25rem 0.5rem"
                            border="1px solid transparent"
                            className="[&_.select\_\_control]:border-none [&_.select\_\_control]:hover:border-none"
                            backgroundColor="transparent"
                            {...selectProps}
                            onValueChange={handleSelectOnValueChange(item)}
                            value={
                              item.value
                                ? {
                                    label: item.label,
                                    value: item.value
                                  }
                                : undefined
                            }
                            options={availableOptions}
                          />
                        </SelectWithDrapIconContainer>

                        {items.length > 1 && (
                          <DeleteButton
                            className=""
                            type="button"
                            disabled={disabled}
                            onClick={handleRemoveToList(item.itemId)}
                          >
                            <Trash size={20} />
                          </DeleteButton>
                        )}
                      </ItemContent>
                    )}
                  </Draggable>
                )
              })}

              {DroppableProvided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>

      {error && (
        <TextErrorContainer>
          <Danger size={16} />
          <Text size="xs">{error}</Text>
        </TextErrorContainer>
      )}

      <div className="mt-3 flex items-center justify-between">
        <Button
          size="sm"
          variant="outlined"
          color="default"
          type="button"
          className="justify-start max-w-fit "
          onClick={disabledByOptionsAmount ? undefined : handleAddToList}
          disabled={disabledByOptionsAmount || disabled}
        >
          Adicionar novo campo
        </Button>
        {!!optionsLimit && (
          <Text size="xs" color="grey-600">
            {items.length}/
            {typeof optionsLimit === 'number' ? optionsLimit : options.length}
          </Text>
        )}
      </div>
    </Container>
  )
}
