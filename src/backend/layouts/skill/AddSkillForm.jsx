import React, { useState,useEffect } from 'react'
import Label from '../../../components/label/Label'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'
import Form from '../../../components/form/Form'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { fetchCreateSkill, fetchUpdateSkill } from '../../../redux/slices/Skill'


function AddSkillForm() {
  const dispatch = useDispatch()
  const location = useLocation() // useLocation hook'u ile yönlendirilmiş verileri alıyoruz

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('') 

  useEffect(() => {
    if (location.state) {
      setTitle(location.state.title)
      setDescription(location.state.description)
    }
  }, [location.state])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newSkill = { title, description }

    if (location.state) {
      // Eğer id varsa, güncelleme işlemi yapıyoruz
      dispatch(fetchUpdateSkill({ id: location.state.id, title, description }))
    } else {
      // Yeni ekleme işlemi
      dispatch(fetchCreateSkill(newSkill))
    }

    setTitle('')
    setDescription('')
  }
  
  return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="techtitle" name="Technology Title" />
        <Input type="text"
        id="title"
        className="title"
        value={title}
        placeholder="Technology Title"
        onChange={(e) => setTitle(e.target.value)}
        required />

        <Label htmlFor="technologies" name="Technologies" />
        <Input type="text"
        id="description"
        className="description"
        value={description}
        placeholder="Technologies"
        onChange={(e) => setDescription(e.target.value)}
        required />

        <button type="submit">{location.state ? 'Update' : 'Add'} About Me</button>
      </Form>
  )
}

export default AddSkillForm
