import React from 'react'
import '../../../styles/Table.css'
import Button from '../../../components/button/AButton'
import Table from '../../../components/table/Table'
import THead from '../../../components/table/THead'
import TableTr from '../../../components/table/TableTr'
import TableTh from '../../../components/table/TableTh'
import TBody from '../../../components/table/TBody'
import TableTd from '../../../components/table/TableTd'



function ProjectTable() {
  return (
    <Table>
      <THead>
        <TableTr>
          <TableTh>#</TableTh>
          <TableTh>Project Title</TableTh>
          <TableTh>Description</TableTh>
          <TableTh>Actions</TableTh>
        </TableTr>
      </THead>
      <TBody>
        <TableTr>
          <TableTd>1</TableTd>
          <TableTd>Portfolio Website</TableTd>
          <TableTd>A personal site to showcase my skills and projects.</TableTd>
          <TableTd>
            <Button name="Edit" className="button" />
            <Button name="Delete" className="button" />
          </TableTd>
        </TableTr>
      </TBody>
    </Table>
  )
}

export default ProjectTable
