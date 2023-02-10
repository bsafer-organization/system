import { w, W } from 'windstitch'

export const TableRoot = w.table(`w-full`, {
  variants: {
    hasBackground: (bg: boolean) =>
      bg
        ? `
            border-separate
            border-spacing-x-0 border-spacing-y-2
            [&_thead]:text-grey-800
            [&_thead_tr_th]:px-6
            [&_tbody_tr]:bg-grey-100
            [&_tbody_tr_td]:px-6 [&_tbody_tr_td]:py-4
            [&_tbody_tr_td:first-of-type]:rounded-l
            [&_tbody_tr_td:last-of-type]:rounded-r

          `
        : `
            [&_thead]:text-grey-700
            [&_thead_tr_th]:px-6
            [&_tbody_tr_td]:px-6 [&_tbody_tr_td]:py-2
          `
  }
})

export const TableHeader = {
  Root: w.thead(``),
  Row: w.tr(``),
  Cell: w.th(`text-left text-xs`)
}

export const TableBody = {
  Root: w.tbody(``),
  Row: w.tr(``),
  Cell: w.td(`text-sm`)
}

export type TableRootProps = W.Infer<typeof TableRoot>

export type TableHeaderProps = W.Infer<typeof TableHeader.Root>
export type TableBodyProps = W.Infer<typeof TableBody.Root>

export type TableRowProps = W.Infer<typeof TableHeader.Row>

export type TableHeaderCellProps = W.Infer<typeof TableHeader.Cell>
export type TableBodyCellProps = W.Infer<typeof TableBody.Cell>
