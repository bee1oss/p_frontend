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
import { fetchRemoveProject } from '../../../redux/slices/Projects'


function ProjectTable(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleDelete = () => {
    console.log("Silme ID:", props.id);  // id'yi kontrol et
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      dispatch(fetchRemoveProject(props.id))
    }
  }
  const handleEdit = () => {
    // "Edit" butonuna basıldığında AddAboutMeForm sayfasına yönlendiriyoruz
    navigate('/dashboard/addproject', { state: { id: props.id, name: props.name, techs: props.techs, description: props.description } });
  }

  return (
      <TBody>
        <TableTr>
          <TableTd>{props.name}</TableTd>
          <TableTd>{props.techs}</TableTd>
          <TableTd>{props.description}</TableTd>
          <TableTd>{props.github}</TableTd>
          <TableTd>
            <Button name="Edit" className="button" onClick={handleEdit} />
            <Button name="Delete" className="button" onClick={handleDelete} />
          </TableTd>
        </TableTr>
      </TBody>
  )
}

export default ProjectTable
