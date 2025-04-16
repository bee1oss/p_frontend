import React from 'react'
import '../../../styles/Table.css'
import Button from '../../../components/button/AButton'
import Table from '../../../components/table/Table'
import THead from '../../../components/table/THead'
import TableTr from '../../../components/table/TableTr'
import TableTh from '../../../components/table/TableTh'
import TBody from '../../../components/table/TBody'
import TableTd from '../../../components/table/TableTd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchRemoveSkill } from '../../../redux/slices/Skill'



function SkillsTable(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    console.log("Silme ID:", props.id);  // id'yi kontrol et
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      dispatch(fetchRemoveSkill(props.id))
    }
  }
  
  const handleEdit = () => {
    // "Edit" butonuna basıldığında AddAboutMeForm sayfasına yönlendiriyoruz
    navigate('/dashboard/addskills', { state: { id: props.id, title: props.title, description: props.description } });
  }
  return (
    <Table>
      <THead>
        <TableTr>
          <TableTh>Technology Title</TableTh>
          <TableTh>Technologies</TableTh>
        </TableTr>
      </THead>
      <TBody>
        <TableTr>
          <TableTd>{props.title}</TableTd>
          <TableTd>{props.description}</TableTd>
          <TableTd>
            <Button name="Edit" className="button" onClick={handleEdit} />
            <Button name="Delete" className="button" onClick={handleDelete} />
          </TableTd>
        </TableTr>
      </TBody>
    </Table>
  )
}

export default SkillsTable
