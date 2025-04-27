import React from 'react'
import TableTh from '../../../components/table/TableTh'
import THead from '../../../components/table/THead'
import TableTr from '../../../components/table/TableTr'
import '../../../styles/Table.css'

function TableHeadSkill() {
  return (
    <THead>
        <TableTr>
          <TableTh>Technology Title</TableTh>
          <TableTh>Technologies</TableTh>
        </TableTr>
      </THead>
  )
}

export default TableHeadSkill
