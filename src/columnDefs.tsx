import {Column, Row} from 'react-table';
import {User} from './data';
import React from 'react';
import {IconButton} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const columnsDefs: Column<User>[] = [
  {
    id: 'Expander',
    Cell: ({row}: { row: Row<User> }) => (
      <IconButton size="small" {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
      </IconButton>
    ),
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: (props) => {
      console.log("### Header", props)
      return 'Last Name'
    },
    accessor: 'lastName',
    Cell: props => {
      return <span>{props.value}</span>
    }
  },
  {
    Header: 'Address',
    accessor: originalRow => originalRow.address.toUpperCase(),
    // FIXME `props` has to be 'any' if `accessor` is not a string?
    Cell: (props: any) => {
      console.log("### Cell", {props})
      return props.cell.value
    }
  }
]

export default columnsDefs;
