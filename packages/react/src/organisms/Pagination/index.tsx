import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import { useEffect, useMemo, useState } from 'react'
import { Select } from '../../core/Select'
import { Text } from '../../core/Text'
import { PaginationButton } from './styles'

interface IOnPageChangeData<T> {
  currentPage: number
  amountPerPage: number
  indexPerPage: {
    init: number
    end: number
  }
  filteredItems: T[]
}

interface IPerPageOptions {
  label: string
  value: string
}

export interface PaginationProps<T> {
  /**
   * Handle page changes
   */
  onPageChange?: (data: IOnPageChangeData<T>) => void

  /**
   * Table content
   */
  items: T[]

  /**
   * Number of displayed items per page
   * @example ['10', '20']
   * @default ['10', '15', '25', '50']
   */
  perPageOptions?: string[]

  /**
   * Number of buttons available before render a select
   * @default 5
   */
  initSelectAsFrom?: number
}

const defaultPerPageOptions: IPerPageOptions[] = [
  { label: '10', value: '10' },
  { label: '15', value: '15' },
  { label: '25', value: '25' },
  { label: '50', value: '50' }
]

type PaginationComponent = <T>(props: PaginationProps<T>) => JSX.Element

export const Pagination: PaginationComponent = ({
  onPageChange,
  items,
  perPageOptions,
  initSelectAsFrom = 5
}) => {
  const formattedPerPageOptions: IPerPageOptions[] = useMemo(() => {
    let newPerPageOptionsArray: IPerPageOptions[] = []
    if (perPageOptions) {
      perPageOptions?.forEach((option) => {
        newPerPageOptionsArray.push({
          label: option,
          value: option
        })
      })
    } else {
      newPerPageOptionsArray = defaultPerPageOptions
    }

    return newPerPageOptionsArray
  }, [perPageOptions])

  const [perPage, setPerPage] = useState(formattedPerPageOptions[0])
  const [currentPage, setCurrentPage] = useState(0)
  const totalRecords = items.length

  const pageCount = Math.ceil(totalRecords / Number(perPage.value))
  const amountPerPage = currentPage * Number(perPage.value)
  const arrayFromPageCount = Array.from(Array(pageCount).keys())

  const indexPerPage = useMemo(
    () => ({
      init: amountPerPage,
      end:
        amountPerPage + Number(perPage.value) > totalRecords
          ? totalRecords - 1
          : amountPerPage + Number(perPage.value) - 1
    }),
    [amountPerPage, perPage.value, totalRecords]
  )

  const handlePerPageChange = (value: any) => {
    setPerPage(value as IPerPageOptions)
    setCurrentPage(0)
  }

  function handlePageChange(page: number) {
    setCurrentPage(page)
  }

  const filteredItems = useMemo(
    () => items.slice(indexPerPage.init, indexPerPage.end + 1),
    [amountPerPage, perPage.value, currentPage, items]
  )

  useEffect(() => {
    if (onPageChange) {
      onPageChange({
        currentPage,
        amountPerPage,
        indexPerPage,
        filteredItems
      })
    }
  }, [currentPage, amountPerPage, indexPerPage, onPageChange])

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-2 font-light gap-2 mx-2">
      <div className="flex items-center gap-6">
        <Text weight="light" size="sm" className="shrink-0">
          Mostrando {indexPerPage.init + 1}-{indexPerPage.end + 1} de{' '}
          {totalRecords} registros
        </Text>
        <div className="flex items-center gap-2 min-w-[13.5rem]">
          <Text weight="light" size="sm" className="shrink-0">
            Registros por página
          </Text>
          <Select
            onValueChange={handlePerPageChange}
            options={formattedPerPageOptions}
            value={perPage}
            padding="0 0.2rem"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 [&_*]:select-none">
        {pageCount > initSelectAsFrom && (
          <PaginationButton
            onClick={() => {
              if (currentPage > 0) handlePageChange(currentPage - 1)
            }}
            disabled={currentPage <= 0}
          >
            <ArrowLeft2 />
          </PaginationButton>
        )}

        <Text>Página</Text>

        {pageCount > initSelectAsFrom && (
          <>
            <Select
              className="min-w-[4.2rem]"
              options={arrayFromPageCount.map((i) => ({
                label: `${i + 1}`,
                value: `${i}`
              }))}
              value={{ label: `${currentPage + 1}`, value: `${currentPage}` }}
              onValueChange={({ value }) => handlePageChange(Number(value))}
              padding="0 0.2rem"
            />
            <Text className="whitespace-nowrap">de {pageCount}</Text>
          </>
        )}

        {pageCount <= initSelectAsFrom &&
          arrayFromPageCount.map((i) => {
            return (
              <PaginationButton
                key={i}
                onClick={() => handlePageChange(i)}
                isCurrent={i === currentPage}
              >
                {i + 1}
              </PaginationButton>
            )
          })}

        {pageCount > initSelectAsFrom && (
          <PaginationButton
            onClick={() => {
              if (currentPage < pageCount - 1) handlePageChange(currentPage + 1)
            }}
            disabled={currentPage >= pageCount - 1}
          >
            <ArrowRight2 />
          </PaginationButton>
        )}
      </div>
    </div>
  )
}
