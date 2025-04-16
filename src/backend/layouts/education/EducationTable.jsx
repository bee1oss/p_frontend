import React from 'react'
import '../../../styles/Table.css'
import Button from '../../../components/button/AButton'
import Table from '../../../components/table/Table'
import THead from '../../../components/table/THead'
import TableTr from '../../../components/table/TableTr'
import TableTh from '../../../components/table/TableTh'
import TBody from '../../../components/table/TBody'
import TableTd from '../../../components/table/TableTd'



function EducationTable() {
  return (
    <Table>
      <THead>
        <TableTr>
          <TableTh>#</TableTh>
          <TableTh>Name</TableTh>
          <TableTh>Faculty</TableTh>
          <TableTh>Department graduated</TableTh>
          <TableTh>Graduated Date</TableTh>
          <TableTh>Actions</TableTh>
        </TableTr>
      </THead>
      <TBody>
        <TableTr>
          <TableTd>1</TableTd>
          <TableTd>Belarusian State University</TableTd>
          <TableTd>Faculty of Radiophysics and Computer Technologies</TableTd>
          <TableTd>Bachelor in Computer Security</TableTd>
          <TableTd>2024</TableTd>
          <TableTd>
            <Button link="#deneme" name="Edit" className="button" />
            <Button link="#deneme" name="Delete" className="button" />
          </TableTd>
        </TableTr>
      </TBody>
    </Table>
  )
}

export default EducationTable
