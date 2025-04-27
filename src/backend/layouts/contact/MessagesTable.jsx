import React from 'react';
import '../../../styles/Table.css';
import Button from '../../../components/button/AButton';
import TableTr from '../../../components/table/TableTr';
import TBody from '../../../components/table/TBody';
import TableTd from '../../../components/table/TableTd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchReadContact, fetchRemoveContact } from '../../../redux/slices/Contact';
import { FaCheckCircle } from "react-icons/fa"; // ✅ ikon


function MessagesTable(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
          dispatch(fetchRemoveContact(props.id))
    }
  }

  const handleView = async () => {
    try {
      await dispatch(fetchReadContact(props.id)); // sadece ID gönderiyoruz
      navigate(`/dashboard/messages/${props.id}`);
    } catch (error) {
      console.error("Okundu olarak işaretlenirken hata:", error);
    }
  };

  return (
      <TBody>
          <TableTr>
            <TableTd>{props.okundu && (
            <FaCheckCircle style={{ color: "green", marginLeft: "5px" }} title="Okundu" />
          )}</TableTd>
            <TableTd>{props.name}</TableTd>
            <TableTd>{props.email}</TableTd>
            <TableTd>{props.subject}</TableTd>
            <TableTd>
              <Button name="Delete" className="button" onClick={handleDelete} />
              <Button name="View" className="button" onClick={handleView} />
            </TableTd>
          </TableTr>
      </TBody> 
  )
}

export default MessagesTable;
