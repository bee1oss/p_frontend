import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchContactById } from '../../../redux/slices/Contact';

const ReadMessage = () => {
  // For now, we use dummy data. Later you can fetch from API or database.
  const { id } = useParams();
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.contact.contact);
  const message = items.find((msg) => msg._id === id);

  useEffect(() => {
    if (!message) {
      dispatch(fetchContactById(id));
    }
  }, [dispatch, id, message]);

  if (status === "loading") return <p>Yükleniyor...</p>;
  if (!message) return <p>Mesaj bulunamadı</p>;

  
  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">📨 Message Details</h2>

      <div className="mb-3">
        <strong>Name:</strong> {message.name}
      </div>
      <div className="mb-3">
        <strong>Email:</strong> {message.email}
      </div>
      <div className="mb-3">
        <strong>Subject:</strong> {message.subject}
      </div>
      <div className="mb-3">
        <strong>Message:</strong>
        <p className="mt-1 text-gray-700">{message.message}</p>
      </div>
    </div>
  );
};

export default ReadMessage;
