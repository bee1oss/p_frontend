import React from 'react'
import THead from '../../../components/table/THead'
import TableTr from '../../../components/table/TableTr'
import TableTh from '../../../components/table/TableTh'
import '../../../styles/Table.css'

function TableHeadMessage() {
  return (
    <THead>
        <TableTr>
          <TableTh>Okundu</TableTh>
          <TableTh>Name</TableTh>
          <TableTh>Email</TableTh>
          <TableTh>Subject</TableTh>
          <TableTh>Actions</TableTh>
        </TableTr>
      </THead>
  )
}

export default TableHeadMessage
