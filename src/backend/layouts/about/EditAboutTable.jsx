import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../../styles/Table.css';
import Button from '../../../components/button/AButton';
import TableTr from '../../../components/table/TableTr';
import TBody from '../../../components/table/TBody';
import TableTd from '../../../components/table/TableTd';
import { fetchRemoveAbout } from '../../../redux/slices/Abouts';

function EditAboutTable(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // React Router'ın useNavigate hook'u ile yönlendirme işlemi yapıyoruz
  
  const handleDelete = () => {
    console.log("Silme ID:", props.id);  // id'yi kontrol et
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      dispatch(fetchRemoveAbout(props.id))
    }
  };

  const handleEdit = () => {
    // "Edit" butonuna basıldığında AddAboutMeForm sayfasına yönlendiriyoruz
    navigate('/dashboard/addabout', { state: { id: props.id, title: props.title, description: props.description } });
  };

  return (
    
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
    
  );
}

export default EditAboutTable;
