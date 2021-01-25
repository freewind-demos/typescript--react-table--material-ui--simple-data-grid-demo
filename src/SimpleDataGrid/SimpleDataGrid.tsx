import './react-table-type-config';

import React, {useMemo} from 'react';
import {useTable, useSortBy, useFilters, useGlobalFilter, Column, useExpanded} from 'react-table';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TableSortLabel} from '@material-ui/core';
import {ColumnFilterInput} from './ColumnFilterInput';
import {GlobalFilterInput} from './GlobalFilterInput';
import {columnFilter} from './columnFilter';

type Props<T extends object> = {
  tableTitle?: string;
  columnsDefs: Column<T>[];
  data: T[];
  renderRowSubComponent?: (row: T) => React.ReactNode
};

export function SimpleDataGrid<T extends object>({columnsDefs, data, renderRowSubComponent, tableTitle}: Props<T>) {
  const enhancedColumnDefs = useMemo(() => {
    return columnsDefs.map((columnDef) => ({filter: columnFilter<T>(), ...columnDef}));
  }, [columnsDefs]);

  const {
    getTableProps,
    getTableBodyProps,
    headers,
    rows,
    prepareRow,
    setGlobalFilter,
    globalFilter,
    preGlobalFilteredRows,
    visibleColumns,
  } = useTable(
    {
      columns: enhancedColumnDefs,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded
  );

  return (
    <Paper>
      {tableTitle && <h1>{tableTitle}</h1>}
      <GlobalFilterInput
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table {...getTableProps()} size={'small'}>
        <TableHead>
          <TableRow>
            {headers.map((column) => (
              <TableCell>
                {column.Header &&
                (column.canSort ? (
                  <TableSortLabel
                    active={column.isSorted}
                    direction={column.isSortedDesc ? 'desc' : 'asc'}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div>{column.render('Header')}</div>
                  </TableSortLabel>
                ) : (
                  <div>{column.render('Header')}</div>
                ))}
                {column.canFilter && (
                  <div>
                    <ColumnFilterInput column={column}/>
                  </div>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <>
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
                  })}
                </TableRow>
                {renderRowSubComponent && row.isExpanded ? <TableRow>
                  <TableCell colSpan={visibleColumns.length}>
                    {renderRowSubComponent(row.original)}
                  </TableCell>
                </TableRow> : null}
              </>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
