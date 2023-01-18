import { w, W } from 'windstitch'

export const TableRoot = w.table(
    `grid w-[1000px]`,
    {
        variants: {
            hasBackground: (bg: boolean) => bg ? 
            `
            [&_thead]:text-grey-800 [&_thead]:mb-2
            [&_thead_tr]:px-6
            [&_tbody]:gap-2
            [&_tbody_tr]:rounded [&_tbody_tr]:bg-grey-100 [&_tbody_tr]:px-6 [&_tbody_tr]:py-4

            ` :
            `
            [&_thead]:text-grey-700 [&_thead]:mb-4
            [&_thead_tr]:px-6
            [&_tbody_tr]:px-6 [&_tbody_tr]:py-2
            `
        }
    }
)

export const TableHeader = {
    Root: w.thead(
        `
        `
    ),
    Row: w.tr(
        `
        grid grid-flow-col auto-cols-fr
        `
    ),
    Cell: w.th(
        `
        flex text-xs
        `
    )
}

export const TableBody = {
    Root: w.tbody(
        `flex flex-col`
    ),
    Row: w.tr(
        `
        grid grid-flow-col auto-cols-fr
        `
    ),
    Cell: w.td(
        `
        flex text-sm
        `
        // ,
        // {
        //     defaultProps: {
        //         className: 'justify-center'
        //     }
        // }
    )
}

export type TableRootProps = W.Infer<typeof TableRoot>

export type TableHeaderProps = W.Infer<typeof TableHeader.Root>
export type TableBodyProps = W.Infer<typeof TableBody.Root>

export type TableRowProps = W.Infer<typeof TableHeader.Row>

export type TableHeaderCellProps = W.Infer<typeof TableHeader.Cell>
export type TableBodyCellProps = W.Infer<typeof TableBody.Cell>