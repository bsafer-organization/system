import React from 'react'
import { HambergerMenu, Trash, Add, Danger } from 'iconsax-react'
import {
  useForm,
  useFieldArray,
  Controller,
  FieldArrayWithId
} from 'react-hook-form'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from 'react-beautiful-dnd'
import ReactSelect, { SingleValue } from 'react-select'
import { GeneralStyle, selectStyles } from './styles'
import { DropdownIndicator } from './components'

export interface InputData {
  label: string
  value: string
  [key: string]: any
}

export interface GroupedOption {
  label: string
  options: InputData[]
}

export interface OutputData {
  id: string
  sequence: number
  selectedOption: InputData
}

type ActionTypes = 'toDelete' | 'toUpdate' | 'toCreate' | 'none'

type GroupByActions = {
  [action in ActionTypes]: OutputData[]
}

export type SortableSelectProps = {
  /**
   * Icon placed before the sequence number.\
   * To hide this icon, just set startIcon to`false`
   */
  startIcon?: React.ReactNode | boolean

  /**
   * Select options
   * @example [{label: 'Example', value: 'example', [key: string]: any}]
   * @required
   */
  options: InputData[]

  /**
   * Selected options from `options`
   * @example [{id: '98j2e3-dj913um', sequence: 1, selectedOption: {label: 'Example', value: 'example', [key: string]: any}}]
   */
  selectedOptions?: OutputData[]

  /**
   * Form submission
   */
  submittedForm?: boolean

  /**
   * Disable component
   * @default false
   */
  disabled?: boolean

  /**
   * @param optionsGroupedByActions selected option
   */
  onSelectChange: (optionsGroupedByActions: GroupByActions) => void

  /**
   * On error action
   */
  onError?: () => void
}

interface SelectedOption {
  option?: OutputData
}

interface FormValues {
  selected: SelectedOption[]
}

const emptyOption = {
  option: {
    id: '',
    sequence: 0,
    selectedOption: {
      label: '',
      value: ''
    }
  }
}

export const SortableDragDropSelect = ({
  startIcon,
  options,
  selectedOptions,
  submittedForm,
  disabled,
  onSelectChange,
  onError
}: SortableSelectProps) => {
  const {
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<FormValues>({
    mode: 'onChange'
  })

  const { fields, update, append, remove, move } = useFieldArray({
    control,
    name: 'selected'
  })

  const getListStyle = () => ({
    width: '100%',
    height: 'fit-content'
  })

  function onDragEnd(result: DropResult): void {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    move(result.source.index, result.destination.index)
  }

  const handleChangeSelect = (
    index: number,
    field: FieldArrayWithId<FormValues, 'selected'>,
    onChange: any
  ) => {
    return (data: SingleValue<InputData>) => {
      if (data) {
        const fieldArray = {
          id: field.id,
          option: {
            id: '',
            sequence: index,
            selectedOption: {
              label: '',
              value: ''
            }
          }
        }

        const foundOption = options?.find((option) => option.id === data.value)

        if (!foundOption) {
          return
        }

        if (selectedOptions && selectedOptions.length) {
          const foundSequenceOption = selectedOptions?.find(
            (selectedOption) => selectedOption.id === field.option?.id
          )

          if (foundSequenceOption) {
            foundSequenceOption.selectedOption = foundOption
            fieldArray.option = foundSequenceOption
          } else {
            fieldArray.option.selectedOption = foundOption
          }
        } else {
          fieldArray.option.selectedOption = foundOption
        }

        onChange(fieldArray)
        update(index, fieldArray)
      }
    }
  }

  React.useEffect(() => {
    if (selectedOptions && selectedOptions?.length) {
      const options = selectedOptions?.map((sequence) => ({
        option: sequence
      }))

      setValue('selected', options)
    }
  }, [selectedOptions])

  React.useEffect(() => {
    if (!selectedOptions || !selectedOptions.length) {
      append(emptyOption)
    }
  }, [])

  React.useEffect(() => {
    const parsedData: OutputData[] = fields.map((item, index) => {
      if (item.option) {
        return {
          id: item.option.id || '',
          selectedOption: {
            ...item.option.selectedOption
          },
          sequence: index
        }
      } else {
        return {
          id: '',
          selectedOption: {
            id: '',
            label: '',
            value: ''
          },
          sequence: index
        }
      }
    })

    let addActionsIntoParsedData: GroupByActions = {
      toCreate: [],
      toDelete: [],
      toUpdate: [],
      none: []
    }

    if (selectedOptions && selectedOptions.length) {
      addActionsIntoParsedData = parsedData.reduce(
        (acc, curr, index, fieldsArray) => {
          const initialSequenceExists = selectedOptions.find(
            (selectedOption) => selectedOption.id === curr.id
          )

          const wasRemovedSomeOption = selectedOptions.filter(
            (option) => !fieldsArray.some((array) => array.id === option.id)
          )

          if (wasRemovedSomeOption.length) {
            const toDeleteItem = wasRemovedSomeOption.filter(
              (item) =>
                !acc.toDelete.some(
                  (removedOption) => removedOption.id === item.id
                )
            )

            if (toDeleteItem.length) {
              acc.toDelete = [...acc.toDelete, ...toDeleteItem]
            }
          }

          if (!curr.id) {
            acc.toCreate.push(curr)
            return acc
          }

          if (
            initialSequenceExists?.selectedOption.id !==
              curr.selectedOption.id ||
            initialSequenceExists?.sequence !== curr.sequence
          ) {
            acc.toUpdate.push(curr)
            return acc
          }

          acc.none.push(curr)
          return acc
        },
        addActionsIntoParsedData
      )
    } else {
      addActionsIntoParsedData = parsedData.reduce((acc, curr) => {
        acc.toCreate.push(curr)
        return acc
      }, addActionsIntoParsedData)
    }
    onSelectChange(addActionsIntoParsedData)
  }, [fields])

  React.useEffect(() => {
    const haveAllFieldValues = fields.every(
      (field) => !!field.option?.selectedOption.id
    )

    if (!haveAllFieldValues) {
      fields.forEach((item, index) => {
        if (!item.option?.selectedOption.id) {
          if (onError) onError()
          setError(`selected.${index}`, {
            message: 'Campo obrigatório'
          })
        } else {
          clearErrors(`selected.${index}`)
        }
      })
    }
  }, [submittedForm])

  return (
    <>
      <form noValidate>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided): JSX.Element => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle()}
              >
                {fields.map((field, index) => {
                  return (
                    <Draggable
                      key={field.id}
                      draggableId={field.id}
                      index={index}
                    >
                      {(provided, snapshot): JSX.Element => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <GeneralStyle.Control>
                            <GeneralStyle.DragSelectContainer>
                              <GeneralStyle.DragArea
                                dragging={snapshot.isDragging}
                                disabled={disabled}
                              >
                                {startIcon ? (
                                  <span className="startIcon">
                                    {startIcon}
                                    <span>{index + 1}</span>
                                  </span>
                                ) : (
                                  <span className="sequenceNumber">
                                    {index + 1 + '.'}
                                  </span>
                                )}
                                <div
                                  className="dragIcon"
                                  data-testid="dragIcon"
                                  {...provided.dragHandleProps}
                                >
                                  <HambergerMenu size={20} />
                                </div>
                              </GeneralStyle.DragArea>

                              <Controller
                                control={control}
                                name={`selected.${index}`}
                                render={({ field: { onChange } }) => {
                                  return (
                                    <ReactSelect<
                                      InputData,
                                      false,
                                      GroupedOption
                                    >
                                      data-testid="selectEnergySequence"
                                      isClearable={false}
                                      hideSelectedOptions={false}
                                      isDisabled={disabled}
                                      value={
                                        field.option?.selectedOption.value
                                          ? field.option?.selectedOption
                                          : undefined
                                      }
                                      onChange={handleChangeSelect(
                                        index,
                                        field,
                                        onChange
                                      )}
                                      classNamePrefix="select"
                                      styles={selectStyles({ startIcon })}
                                      options={options}
                                      placeholder="Selecione"
                                      components={{
                                        DropdownIndicator: (props) => (
                                          <DropdownIndicator
                                            props={props}
                                            disabled={disabled}
                                          />
                                        )
                                      }}
                                    />
                                  )
                                }}
                              />
                            </GeneralStyle.DragSelectContainer>
                            {fields.length > 1 && !disabled && (
                              <button
                                type="button"
                                style={{
                                  width: '2rem',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  padding: '0.25rem',
                                  borderRadius: '8px'
                                }}
                                className="hover:cursor-pointer focus:bg-[#DDE0E3]/[.5] hover:bg-[#DDE0E3]/[.5] transition-colors"
                                onKeyUp={(key) => {
                                  if (
                                    (key.code === 'Space' ||
                                      key.code === 'Enter') &&
                                    !disabled
                                  ) {
                                    remove(index)
                                  }
                                }}
                              >
                                <Trash
                                  data-testid="removeEnergySequenceButton"
                                  size={20}
                                  onClick={() => {
                                    if (!disabled) {
                                      remove(index)
                                    }
                                  }}
                                />
                              </button>
                            )}
                          </GeneralStyle.Control>
                          {errors.selected?.[index] && (
                            <GeneralStyle.ErrorTextContainer>
                              <Danger size={16} />
                              <span>{errors.selected?.[index]?.message}</span>
                            </GeneralStyle.ErrorTextContainer>
                          )}
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </form>
      {!disabled && (
        <GeneralStyle.Button
          data-testid="addEnergyButton"
          disabled={disabled}
          onClick={() => {
            append(emptyOption)
          }}
        >
          <span className="w-4 h-4 flex justify-center items-center">
            <Add size={20} />
          </span>
          Adicionar novo campo
        </GeneralStyle.Button>
      )}
    </>
  )
}
