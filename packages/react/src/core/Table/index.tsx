import React from 'react'

import {TableRoot, TableHeader, TableHeaderCellProps, TableBodyCellProps, TableBody } from './styles'

export interface RootProps extends React.HTMLAttributes<HTMLTableElement> {
    /**
     * If the table rows have background, hasBackground will receive true.
     * Otherwise, it will receive false.
     * 
     * @default 'false'
     */
    hasBackground?: boolean
    /**
     * Table content
     */
    children: React.ReactNode
}

export interface CellProps extends React.HTMLAttributes<HTMLTableCellElement> {}

export interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export interface HeaderAndBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

/**
 * Render a table element
 * @param TableProps 
 * @returns `<Table.Root>
 *               children
 *           </Table.Root>`
 */
const Root = ({children, hasBackground, ...props}: RootProps) => {
    return(
        <TableRoot hasBackground={hasBackground!} {...props}>
            {children}
        </TableRoot>
    )
}

/**
 * Root: Renders a theader element
 * @param TableHeaderProps
 * @returns `<Table.Header.Root>
 *               children
 *           </Table.Header.Root>`
 * 
 * Row: Renders a tr element
 * @param TableRowProps 
 * @returns `<Table.Header.Row>
 *               children
 *           </Table.Header.Row>`
 * 
 * Cell: Renders a th element
 * @param TableHeaderCellProps 
 * @returns `<Table.Header.Cell>
 *               children
 *           </Table.Header.Cell>`
 */
const Header = {
    Root: ({children, ...props}: HeaderAndBodyProps) => {
        return(
            <TableHeader.Root {...props}>
                {children}
            </TableHeader.Root>
        )
    },
    Row: ({children, ...props}: RowProps) => {
        return(
            <TableHeader.Row {...props}>
                {children}
            </TableHeader.Row>
        )
    },
    Cell: ({children, ...props}: CellProps) => {
        return(
            <TableHeader.Cell {...props}>
                {children}
            </TableHeader.Cell>
        )
    }
}

/**
 * Root: Renders a tbody element
 * @param TableBodyProps
 * @returns `<Table.Body.Root>
 *               children
 *           </Table.Body.Root>`
 * 
 * Row: Renders a tr element
 * @param TableRowProps 
 * @returns `<Table.Body.Row>
 *               children
 *           </Table.Body.Row>`
 * 
 * Cell: Renders a td element
 * @param TableBodyCellProps 
 * @returns `<Table.Body.Cell>
 *               children
 *           </Table.Body.Cell>`
 */
const Body = {
    Root: ({children, ...props}: HeaderAndBodyProps) => {
        return(
            <TableBody.Root {...props}>
                {children}
            </TableBody.Root>
        )
    },
    Row: ({children, ...props}: RowProps) => {
        return(
            <TableBody.Row {...props}>
                {children}
            </TableBody.Row>
        )
    },
    Cell: ({children, ...props}: CellProps) => {
        return(
            <TableBody.Cell {...props}>
                {children}
            </TableBody.Cell>
        )
    }
}

export const Table = {Root, Header, Body}