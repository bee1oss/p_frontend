import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Form from '../../components/form/Form'
import Label from '../../components/label/Label'
import Input from '../../components/input/Input'
import { fetchCreateContact } from '../../redux/slices/Contact'


function Contact() {
  const dispatch = useDispatch();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      email,
      subject,
      message,
    };

    dispatch(fetchCreateContact(newContact)); // 👉 API'ye POST at

    // Formu sıfırla
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact">
    <h2>Contact Me</h2>
    <Form className='contact-form' onSubmit={handleSubmit}>
    <div className="form-group">
      <Label htmlFor="name" name="Name" />
      <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <Label htmlFor="email" name="Email" />
      <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Label htmlFor="subject" name="Subject" />
      <Input type="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      <Label htmlFor="message" name="Message" />
      <textarea type="textarea" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button type="submit" >Send Message</button>
    </Form>
  </section>
  )
}

export default Contact
