import React from 'react';
import '../../../styles/Table.css';
import Button from '../../../components/button/AButton';
import Table from '../../../components/table/Table';
import THead from '../../../components/table/THead';
import TableTr from '../../../components/table/TableTr';
import TableTh from '../../../components/table/TableTh';
import TBody from '../../../components/table/TBody';
import TableTd from '../../../components/table/TableTd';
import { useNavigate } from 'react-router-dom';

function MessagesTable() {
  const navigate = useNavigate();

  const messages = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Interested in your portfolio',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Request for collaboration',
    },
  ];

  const handleView = (id) => {
    navigate(`/dashboard/messages/${id}`);
  };

  return (
    <Table>
      <THead>
        <TableTr>
          <TableTh>#</TableTh>
          <TableTh>Name</TableTh>
          <TableTh>Email</TableTh>
          <TableTh>Subject</TableTh>
          <TableTh>Actions</TableTh>
        </TableTr>
      </THead>
      <TBody>
        {messages.map((msg, index) => (
          <TableTr key={msg.id}>
            <TableTd>{index + 1}</TableTd>
            <TableTd>{msg.name}</TableTd>
            <TableTd>{msg.email}</TableTd>
            <TableTd>{msg.subject}</TableTd>
            <TableTd>
              <Button
                name="Görüntüle"
                className="button"
                onClick={() => handleView(msg.id)}
                link={`/dashboard/message/${msg.id}`}
              />
              <Button
                name="Sil"
                className="button"
                onClick={() => alert(`Mesaj ${msg.id} silindi (örnek)`)}
              />
            </TableTd>
          </TableTr>
        ))}
      </TBody>
    </Table>
  );
}

export default MessagesTable;
