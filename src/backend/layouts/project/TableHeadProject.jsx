import React from 'react'
import TableTh from '../../../components/table/TableTh'
import THead from '../../../components/table/THead'
import TableTr from '../../../components/table/TableTr'
import '../../../styles/Table.css'

function TableHeadProject() {
  return (
    <THead>
        <TableTr>
          <TableTh>Name</TableTh>
          <TableTh>Technologies</TableTh>
          <TableTh>Description</TableTh>
          <TableTh>Github</TableTh>
          <TableTh>Actions</TableTh>
        </TableTr>
      </THead>
  )
}

export default TableHeadProject
