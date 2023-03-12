import { describe, it } from '@jest/globals'
import { screen, render, act, waitFor, fireEvent } from '@testing-library/react'
import { SidebarMenu } from '../../organisms/SidebarMenu'
import '@testing-library/jest-dom'
import { Add } from 'iconsax-react'
import userEvent from '@testing-library/user-event'
import {
  SortableSelect,
  SortableSelectProps
} from '../../organisms/SortableSelect'

Object.defineProperty(window, 'crypto', {
  value: {
    randomUUID: () => `${Math.random()}-dragId`
  }
})

const options: SortableSelectProps['options'] = [
  {
    value: 'ocean',
    label: 'Ocean'
  },
  {
    value: 'blue',
    label: 'Blue'
  }
]

describe('Components: SortableSelect', () => {
  it('should render the component', () => {
    render(<SortableSelect options={options} optionsLimit />)

    expect(
      screen
        .getByTestId('sortable_select_container__testid')
        .querySelector('#select__input')
    ).toBeInTheDocument()

    expect(
      screen.getByTestId('sortable_select_drag_index_container__testid')
    ).toBeInTheDocument()

    expect(
      screen.getByTestId('sortable_select_add_field_button__testid')
    ).toBeInTheDocument()
  })

  it('should render the component and add a new field', async () => {
    render(
      <SortableSelect
        options={options}
        optionsLimit={2}
        onValuesChange={() => {
          console.log()
        }}
      />
    )

    let sortableSelectInputElement = screen.getAllByRole('combobox')

    expect(sortableSelectInputElement).toHaveLength(1)

    const sortableSelectAddFieldButton =
      'sortable_select_add_field_button__testid'

    expect(screen.getByTestId(sortableSelectAddFieldButton)).toBeInTheDocument()

    await act(async () => {
      await userEvent.click(screen.getByTestId(sortableSelectAddFieldButton))
    })

    sortableSelectInputElement = screen.getAllByRole('combobox')

    expect(sortableSelectInputElement).toHaveLength(2)
  })

  it('should render the component and remove a field', async () => {
    render(<SortableSelect options={options} optionsLimit={options.length} />)

    let sortableSelectInputElement = screen.getAllByRole('combobox')

    expect(sortableSelectInputElement).toHaveLength(1)

    await act(async () => {
      await userEvent.click(
        screen.getByTestId('sortable_select_add_field_button__testid')
      )
    })

    sortableSelectInputElement = screen.getAllByRole('combobox')

    expect(sortableSelectInputElement).toHaveLength(2)

    const sortableSelectRemoveFieldButton = screen.getAllByTestId(
      'sortable_select_remove_field_button__testid'
    )

    expect(sortableSelectRemoveFieldButton).toHaveLength(2)

    await act(async () => {
      await userEvent.click(sortableSelectRemoveFieldButton[1])
    })

    sortableSelectInputElement = screen.getAllByRole('combobox')

    expect(sortableSelectInputElement).toHaveLength(1)

    expect(
      screen.queryByTestId('sortable_select_remove_field_button__testid')
    ).toBeNull()
  })

  it('should render the component and change fields order (drag and drop)', async () => {
    render(
      <SortableSelect
        options={options}
        value={[{ ...options[0] }, { ...options[1] }]}
      />
    )

    const sortableSelectInputElement = screen.getAllByRole('combobox')

    expect(sortableSelectInputElement).toHaveLength(2)

    const sortableSelectSelectedValues = screen.getByTestId(
      'sortable_select_container__testid'
    )

    expect(
      sortableSelectSelectedValues.querySelectorAll('.select__single-value')[0]
    ).toHaveTextContent('Ocean')
    expect(
      sortableSelectSelectedValues.querySelectorAll('.select__single-value')[1]
    ).toHaveTextContent('Blue')

    const dragIndexContainerElement = screen.getAllByTestId(
      'sortable_select_drag_index_container__testid'
    )

    const SPACE = { keyCode: 32 }
    const ARROW_DOWN = { keyCode: 40 }
    await act(async () => {
      fireEvent.keyDown(dragIndexContainerElement[0], SPACE)
      fireEvent.keyDown(dragIndexContainerElement[0], ARROW_DOWN)
      fireEvent.keyDown(dragIndexContainerElement[0], SPACE)
    })

    await waitFor(() => {
      expect(
        sortableSelectSelectedValues.querySelectorAll(
          '.select__single-value'
        )[0]
      ).toHaveTextContent('Blue')
      expect(
        sortableSelectSelectedValues.querySelectorAll(
          '.select__single-value'
        )[1]
      ).toHaveTextContent('Ocean')
    })
  })

  it('should render the component with disabled prop and try to change fields order (drag and drop)', async () => {
    render(
      <SortableSelect
        options={options}
        value={[{ ...options[0] }, { ...options[1] }]}
        disabled
      />
    )

    const sortableSelectInputElement = screen.getAllByRole('combobox')

    expect(sortableSelectInputElement).toHaveLength(2)

    const sortableSelectSelectedValues = screen.getByTestId(
      'sortable_select_container__testid'
    )

    expect(
      sortableSelectSelectedValues.querySelectorAll('.select__single-value')[0]
    ).toHaveTextContent('Ocean')
    expect(
      sortableSelectSelectedValues.querySelectorAll('.select__single-value')[1]
    ).toHaveTextContent('Blue')

    const dragIndexContainerElement = screen.getAllByTestId(
      'sortable_select_drag_index_container__testid'
    )

    const SPACE = { keyCode: 32 }
    const ARROW_DOWN = { keyCode: 40 }
    await act(async () => {
      fireEvent.keyDown(dragIndexContainerElement[0], SPACE)
      fireEvent.keyDown(dragIndexContainerElement[0], ARROW_DOWN)
      fireEvent.keyDown(dragIndexContainerElement[0], SPACE)
    })

    await waitFor(() => {
      expect(
        sortableSelectSelectedValues.querySelectorAll(
          '.select__single-value'
        )[0]
      ).toHaveTextContent('Ocean')
      expect(
        sortableSelectSelectedValues.querySelectorAll(
          '.select__single-value'
        )[1]
      ).toHaveTextContent('Blue')
    })
  })

  it('should render the component and select an energy', async () => {
    render(
      <SortableSelect
        options={options}
        onValuesChange={() => {
          console.log()
        }}
      />
    )

    const sortableSelectInputElement = screen.getByRole('combobox')

    await act(async () => {
      await userEvent.click(sortableSelectInputElement)
    })

    await act(async () => {
      await userEvent.keyboard('[Enter]')
    })

    const sortableSelectSelectedValues = screen.getByTestId(
      'sortable_select_container__testid'
    )

    await waitFor(() => {
      expect(
        sortableSelectSelectedValues.querySelectorAll(
          '.select__single-value'
        )[0]
      ).toHaveTextContent('Ocean')
    })
  })

  it('should render the component with label and optional badge', async () => {
    render(
      <SortableSelect
        options={options}
        label="SortableSelect label test"
        optional
      />
    )

    const sortableSelectLabel = screen.getByTestId(
      'sortable_select_label__testid'
    )
    const sortableSelectOptionalBadge = screen.getByTestId(
      'sortable_select_optional_badge__testid'
    )

    expect(sortableSelectLabel).toBeInTheDocument()

    expect(sortableSelectOptionalBadge).toBeInTheDocument()

    expect(sortableSelectLabel).toHaveTextContent('SortableSelect label test')
  })

  it('should render the component with error', async () => {
    render(
      <SortableSelect options={options} error="SortableSelect error test" />
    )

    const sortableSelectErrorMessage = screen.getByTestId(
      'sortable_select_error_message__testid'
    )

    expect(sortableSelectErrorMessage).toBeInTheDocument()

    expect(sortableSelectErrorMessage).toHaveTextContent(
      'SortableSelect error test'
    )
  })
})
