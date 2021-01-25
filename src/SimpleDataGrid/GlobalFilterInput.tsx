import React, { FC } from 'react';
import { Row, UseGlobalFiltersInstanceProps } from 'react-table';
import { TextField } from '@material-ui/core';

type Props = {
  preGlobalFilteredRows: Row<any>[];
  globalFilter: string;
  setGlobalFilter: UseGlobalFiltersInstanceProps<any>['setGlobalFilter'];
};

export const GlobalFilterInput: FC<Props> = ({ globalFilter, setGlobalFilter }) => {
  console.log('### > GlobalFilterInput', globalFilter);
  return (
    <TextField
      type="search"
      value={globalFilter}
      onChange={(e) => setGlobalFilter(e.target.value)}
      placeholder={'Global Search'}
    />
  );
};
