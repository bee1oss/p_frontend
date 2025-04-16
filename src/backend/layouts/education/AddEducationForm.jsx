import React from 'react'
import Label from '../../../components/label/Label'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'
import Form from '../../../components/form/Form'

function AddEducationForm() {
  return (
      <Form>
        <Label htmlFor="educationName" name="Name Of School" />
        <Input type="text" id="educationName" required />

        <Label htmlFor="educationFaculty" name="Name of Faculty" />
        <Input type="text" id="educationFaculty" required />

        <Label htmlFor="educationDepGrad" name="Department graduated" />
        <Input type="text" id="educationDepGrad" required />
        
        <Label htmlFor="educationGradDate" name="Graduated Date" />
        <Input type="text" id="educationGradDate" required />

        <Button type="sunmit" name="Save Project" />
      </Form>
  )
}

export default AddEducationForm
