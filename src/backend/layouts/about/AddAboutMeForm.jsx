import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCreateAbout, fetchUpdateAbout } from '../../../redux/slices/Abouts';

import Label from '../../../components/label/Label.jsx';
import Input from '../../../components/input/Input';
import Form from '../../../components/form/Form.jsx';

function AddAboutMeForm() {
  const dispatch = useDispatch();
  const location = useLocation();  // useLocation hook'u ile yönlendirilmiş verileri alıyoruz

  // Form verileri
  const [title_aboutme, setTitle] = useState('');
  const [description_aboutme, setDescription] = useState('');

  useEffect(() => {
    if (location.state) {
      setTitle(location.state.title);
      setDescription(location.state.description);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAbout = { title_aboutme, description_aboutme };

    if (location.state) {
      // Eğer id varsa, güncelleme işlemi yapıyoruz
      dispatch(fetchUpdateAbout({ id: location.state.id, title: title_aboutme, description: description_aboutme }));
    } else {
      // Yeni ekleme işlemi
      dispatch(fetchCreateAbout(newAbout));
    }

    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="aboutmeTitle" name="About Me Title" />
      <Input
        type="text"
        id="aboutmeTitle"
        className="aboutmeTitle"
        value={title_aboutme}
        placeholder="About Me Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Label htmlFor="aboutmeDescription" name="Description" />
      <textarea
        id="aboutmeDescription"
        className="aboutmeDescription"
        value={description_aboutme}
        placeholder="About Me Description"
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">{location.state ? 'Update' : 'Add'} About Me</button>
    </Form>
  );
}

export default AddAboutMeForm;
