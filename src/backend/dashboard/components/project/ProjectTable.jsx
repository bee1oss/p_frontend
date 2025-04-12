import React from 'react'
import './Table.css'
import Button from '../button/AButton'
import Table from '../table/Table'
import THead from '../table/THead'
import TableTr from '../table/TableTr'
import TableTh from '../table/TableTh'
import TBody from '../table/TBody'
import TableTd from '../table/TableTd'



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
