import React, { useState, useEffect } from 'react';
import Label from '../../../components/label/Label';
import Input from '../../../components/input/Input';
import Form from '../../../components/form/Form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCreateEdu, fetchUpdateEdu } from '../../../redux/slices/Education';

/*
MongoDB Schema:
university: { type: String, required: true },
faculity: { type: String, required: true },
departmen: { type: String, required: true },
graduated: { type: Date, required: true }
*/

function AddEducationForm() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [university, setUniversity] = useState('');
  const [faculity, setFaculity] = useState('');
  const [departmen, setDepartmen] = useState('');
  const [graduated, setGraduated] = useState('');

  useEffect(() => {
    if (location.state) {
      setUniversity(location.state.university || '');
      setFaculity(location.state.faculity || '');
      setDepartmen(location.state.departmen || '');
      setGraduated(location.state.graduated?.slice(0, 10) || ''); // YYYY-MM-DD formatı
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEdu = {
      university,
      faculity,
      departmen,
      graduated: graduated ? new Date(graduated) : null, // string -> Date
    };

    if (location.state) {
      dispatch(fetchUpdateEdu({ id: location.state.id, ...newEdu }));
    } else {
      dispatch(fetchCreateEdu(newEdu));
    }

    setUniversity('');
    setFaculity('');
    setDepartmen('');
    setGraduated('');
  };

  return (
    <Form className='form-card' onSubmit={handleSubmit}>
      <Label htmlFor="educationName" name="Name Of School" />
      <Input
        type="text"
        id="university"
        className="university"
        value={university}
        placeholder="Name Of School"
        onChange={(e) => setUniversity(e.target.value)}
        required
      />

      <Label htmlFor="educationFaculty" name="Name of Faculty" />
      <Input
        type="text"
        id="faculty"
        className="faculty"
        value={faculity}
        placeholder="Name of Faculty"
        onChange={(e) => setFaculity(e.target.value)}
        required
      />

      <Label htmlFor="educationDepGrad" name="Department graduated" />
      <Input
        type="text"
        id="educationDepGrad"
        className="department"
        value={departmen}
        placeholder="Department graduated"
        onChange={(e) => setDepartmen(e.target.value)}
        required
      />

      <Label htmlFor="educationGradDate" name="Graduated Date" />
      <Input
        type="date"
        id="educationGradDate"
        className="graduated"
        value={graduated}
        onChange={(e) => setGraduated(e.target.value)}
        required
      />

      <button type="submit">{location.state ? 'Update' : 'Add'} Education</button>
    </Form>
  );
}

export default AddEducationForm;
