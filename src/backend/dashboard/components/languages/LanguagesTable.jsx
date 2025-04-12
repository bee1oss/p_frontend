import React from 'react'
import '../project/Table.css'
import Button from '../button/AButton'
import Table from '../table/Table'
import THead from '../table/THead'
import TableTr from '../table/TableTr'
import TableTh from '../table/TableTh'
import TBody from '../table/TBody'
import TableTd from '../table/TableTd'



function LanguagesTable() {
  return (
    <Table>
      <THead>
        <TableTr>
          <TableTh>#</TableTh>
          <TableTh>Technology Title</TableTh>
          <TableTh>Technologies</TableTh>
        </TableTr>
      </THead>
      <TBody>
        <TableTr>
          <TableTd>1</TableTd>
          <TableTd>Frontend</TableTd>
          <TableTd>HTML, CSS, JavaScript, React</TableTd>
          <TableTd>
            <Button name="Edit" className="button" />
            <Button name="Delete" className="button" />
          </TableTd>
        </TableTr>
      </TBody>
    </Table>
  )
}

export default LanguagesTable
