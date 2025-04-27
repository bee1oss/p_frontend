import React from 'react'
import TableTh from '../../../components/table/TableTh'
import THead from '../../../components/table/THead'
import TableTr from '../../../components/table/TableTr'
import '../../../styles/Table.css'

function TableHeadEdu() {
  return (
    <THead>
        <TableTr>
          <TableTh>Name</TableTh>
          <TableTh>Faculty</TableTh>
          <TableTh>Department graduated</TableTh>
          <TableTh>Graduated Date</TableTh>
          <TableTh>Actions</TableTh>
        </TableTr>
      </THead>
  )
}

export default TableHeadEdu
