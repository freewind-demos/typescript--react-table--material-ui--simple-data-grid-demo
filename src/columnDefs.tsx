import {Column} from 'react-table';
import {User} from './data';
import React from 'react';

const columnsDefs: Column<User>[] = [
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
