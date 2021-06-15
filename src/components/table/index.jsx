import React, { lazy } from 'react'
import { TableContainer } from '../core'

const TableHeader = lazy(() => import('./tableheader'))
const TableBody = lazy(() => import('./tablebody'))

const Table = ({ header, body }) => {

  return (
    <TableContainer>
      <TableHeader data={header} />
      <TableBody data={body} />
    </TableContainer>
  )
}

export default Table
