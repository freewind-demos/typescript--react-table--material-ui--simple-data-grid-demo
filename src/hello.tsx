import React from 'react'

import columnsDefs from './columnDefs';
import {data} from './data';
import {SimpleDataGrid} from './SimpleDataGrid/SimpleDataGrid';
import {CssBaseline} from '@material-ui/core';

export default function Hello() {
  return <>
    <CssBaseline/>
    <SimpleDataGrid tableTitle="Hello, react table" columnsDefs={columnsDefs} data={data}
                    renderRowSubComponent={(data) => <>{JSON.stringify(data)}</>}/>
  </>
};
