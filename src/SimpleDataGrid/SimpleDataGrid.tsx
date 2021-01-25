import React, {useMemo} from 'react'
import {useTable, useSortBy, useFilters, useGlobalFilter, Column} from 'react-table';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {CssBaseline, TableSortLabel} from '@material-ui/core';
import {ColumnFilterInput} from './ColumnFilterInput';
import {GlobalFilterInput} from './GlobalFilterInput';
import {columnFilter} from './columnFilter';

type Props<T extends object> = {
  columnsDefs: Column<T>[],
  data: T[]
}

export function SimpleDataGrid<T extends object>({columnsDefs, data}: Props<T>) {
  const enhancedColumnDefs = useMemo(() => {
    return columnsDefs.map(columnDef => ({filter: columnFilter, ...columnDef}))
  }, [columnsDefs])

  const {
    getTableProps,
    getTableBodyProps,
    headers,
    rows,
    prepareRow,
    setGlobalFilter,
    globalFilter,
    preGlobalFilteredRows,
  } = useTable({
    columns: enhancedColumnDefs,
    data,
  }, useFilters, useGlobalFilter, useSortBy)

  return <div>
    <h1>Hello React-Table</h1>
    <CssBaseline/>
    <GlobalFilterInput
      preGlobalFilteredRows={preGlobalFilteredRows}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
    />
    <Table {...getTableProps()}>
      <TableHead>
        <TableRow>
          {headers.map(column => (
            <TableCell>
              <TableSortLabel
                active={column.isSorted}
                direction={column.isSortedDesc ? 'desc' : 'asc'}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <div>
                  {column.render('Header')}
                </div>
              </TableSortLabel>
              <div>
                <ColumnFilterInput column={column}/>
              </div>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </div>
}
