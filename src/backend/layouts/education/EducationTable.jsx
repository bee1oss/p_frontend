import React from 'react'
import '../../../styles/Table.css'
import Button from '../../../components/button/AButton'
import TableTr from '../../../components/table/TableTr'
import TBody from '../../../components/table/TBody'
import TableTd from '../../../components/table/TableTd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchRemoveEdu } from '../../../redux/slices/Education'



function EducationTable(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    console.log("Silme ID:", props.id);  // id'yi kontrol et
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      dispatch(fetchRemoveEdu(props.id))
    }
  }

  const handleEdit = () => {
    // "Edit" butonuna basıldığında AddAboutMeForm sayfasına yönlendiriyoruz
    navigate('/dashboard/addeducation', { state: { id: props.id, university: props.university, faculity: props.faculity, departmen: props.departmen, graduated: props.graduated } });
  }

  return (
      <TBody>
        <TableTr>
          <TableTd>{props.university}</TableTd>
          <TableTd>{props.faculity}</TableTd>
          <TableTd>{props.departmen}</TableTd>
          <TableTd>{props.graduated}</TableTd>
          <TableTd>
            <Button name="Edit" className="button" onClick={handleEdit} />
            <Button name="Delete" className="button" onClick={handleDelete}/>
          </TableTd>
        </TableTr>
      </TBody>
  )
}

export default EducationTable
