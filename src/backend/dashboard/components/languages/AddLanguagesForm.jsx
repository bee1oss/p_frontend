import React from 'react'
import Label from '../label/Label'
import Input from '../input/Input'
import Button from '../button/Button'
import Form from '../form/Form'

function AddLanguagesForm() {
  return (
      <Form>
        <Label htmlFor="techtitle" name="Technology Title" />
        <Input type="text" id="techtitle" required />

        <Label htmlFor="technologies" name="Technologies" />
        <Input type="text" id="technologies" required />

        <Button type="sunmit" name="Save Project" />
      </Form>
  )
}

export default AddLanguagesForm
