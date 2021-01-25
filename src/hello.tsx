import React from 'react'

import columnsDefs from './columnDefs';
import {data} from './data';
import {SimpleDataGrid} from './SimpleDataGrid/SimpleDataGrid';

export default function Hello() {
  return <SimpleDataGrid columnsDefs={columnsDefs} data={data}/>
};
