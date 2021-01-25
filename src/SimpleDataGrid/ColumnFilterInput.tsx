import React, {FC} from 'react';
import {ColumnInstance} from 'react-table';
import {TextField} from '@material-ui/core';

type Props = {
  column: ColumnInstance<any>,
}

export const ColumnFilterInput: FC<Props> = ({column: {filterValue, setFilter}}) => {
  return <TextField
    type="search"
    value={filterValue || ''}
    onChange={e => {
      setFilter(e.target.value || undefined)
    }}
  />
}
