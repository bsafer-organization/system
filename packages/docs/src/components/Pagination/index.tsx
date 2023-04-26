// import { Select, SelectProps } from '../Select'
// import { Text } from '../Text'

import { Select, SelectProps, Text } from '@bsafer-system/react'
import React, { useEffect, useMemo, useState } from 'react'
import ReactPaginate from 'react-paginate'

interface OnPageChangeData<T> {
  currentPage: number
  amountPerPage: number
  indexPerPage: {
    init: number
    end: number
  }
  filteredItems: T
}

export interface PaginationProps<T = []> {
  totalRecords: number
  onPageChange?: (data: OnPageChangeData<T>) => void
  items: T
}

const perPageOptions = [
  { label: '5', value: '5' },
  { label: '10', value: '10' },
  { label: '15', value: '15' },
  { label: '25', value: '25' },
  { label: '50', value: '50' }
]

export function Pagination<T>({
  totalRecords,
  onPageChange,
  items
}: PaginationProps<T>) {
  const [perPage, setPerPage] = useState(perPageOptions[0])
  const [currentPage, setCurrentPage] = useState(0)

  const pageCount = Math.ceil(totalRecords / Number(perPage.value))
  const amountPerPage = currentPage * Number(perPage.value)

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
    setPerPage(value as typeof perPageOptions[number])
    setCurrentPage(0)
  }

  function handlePageChange(page: number) {
    setCurrentPage(page)
  }

  const filteredItems = useMemo(
    () => ({
      filteredItems: items.slice(indexPerPage.init, indexPerPage.end + 1)
    }),
    [amountPerPage, perPage.value, currentPage]
  ).filteredItems

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
            options={perPageOptions}
            value={perPage}
            padding="0 0.2rem"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 [&_*]:select-none">
        <Text>Página</Text>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          forcePage={currentPage}
          onPageChange={({ selected }) => handlePageChange(selected)}
          containerClassName="flex justify-baseline gap-2"
          pageLinkClassName="block py-1 px-2 text-grey-500 hover:bg-grey-100 rounded-2xl min-w-[1.5rem] text-center font-regular"
          nextClassName="hidden"
          previousClassName="hidden"
          activeClassName="[&_a]:text-black"
          breakLinkClassName="block h-full text-black pt-1"
        />
      </div>
    </div>
  )
}
