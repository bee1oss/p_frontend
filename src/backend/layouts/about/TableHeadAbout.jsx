import React from 'react'

import '../../../styles/Table.css';
import THead from '../../../components/table/THead';
import TableTr from '../../../components/table/TableTr';
import TableTh from '../../../components/table/TableTh';

function TableHeadAbout() {
  return (
    <THead>
        <TableTr>
          <TableTh>Title</TableTh>
          <TableTh>Description</TableTh>
          <TableTh>Actions</TableTh>
        </TableTr>
    </THead>
  )
}

export default TableHeadAbout
