import React from 'react'
import Label from '../label/Label'
import Input from '../input/Input'
import Textarea from '../textarea/Textarea'
import Button from '../button/Button'
import Form from '../form/Form'

function AddprojectForm() {
  return (
      <Form>
        <Label htmlFor="projectTitle" name="Project Title" />
        <Input type="text" id="projectTitle" className="projectTitle" required />

        <Label htmlFor="projectTechs" name="Project Technologies" />
        <Input type="text" id="projectTechs" className="projectTechs" required />

        <Label name="Write a brief description of the project" />
        <Textarea id="projectDescription" className="projectDescription" rows="4" required />

        <Label name="Project Link (URL)" />
        <Input type="text" id="projectLink" className="projectLink" required />

        <Button type="sunmit" name="Save Project" />
      </Form>
  )
}

export default AddprojectForm
