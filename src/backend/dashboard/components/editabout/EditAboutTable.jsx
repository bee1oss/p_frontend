import React from 'react'
import '../project/Table.css'
import Button from '../button/AButton'
import Table from '../table/Table'
import THead from '../table/THead'
import TableTr from '../table/TableTr'
import TableTh from '../table/TableTh'
import TBody from '../table/TBody'
import TableTd from '../table/TableTd'



function EditAboutTable() {
  return (
    <Table>
      <THead>
        <TableTr>
          <TableTh>#</TableTh>
          <TableTh>Title</TableTh>
          <TableTh>Description</TableTh>
        </TableTr>
      </THead>
      <TBody>
        <TableTr>
          <TableTd>1</TableTd>
          <TableTd>About Me</TableTd>
          <TableTd>I'm a passionate full stack developer who builds intuitive, beautiful and functional websites. My work is powered by coffee, curiosity, and clean code ✨</TableTd>
          <TableTd>
            <Button name="Edit" className="button" />
            <Button name="Delete" className="button" />
          </TableTd>
        </TableTr>
      </TBody>
    </Table>
  )
}

export default EditAboutTable
