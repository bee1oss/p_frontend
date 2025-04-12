import React from 'react'
import Label from '../label/Label'
import Input from '../input/Input'
import Button from '../button/Button'
import Form from '../form/Form'

function AddAboutMeForm() {
  return (
      <Form>
        <Label htmlFor="aboutmeTitle" name="About Me Title" />
        <Input type="text" id="aboutmeTitle" required />

        <Label htmlFor="aboutmeDescription" name="About Me Description" />
        <Input type="text" id="aboutmeDescription" required />

        <Button type="sunmit" name="Save Project" />
      </Form>
  )
}

export default AddAboutMeForm
