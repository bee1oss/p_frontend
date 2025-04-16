import React from 'react'
import Label from '../../../components/label/Label'
import Input from '../../../components/input/Input'
import Textarea from '../../../components/textarea/Textarea'
import Button from '../../../components/button/Button'
import Form from '../../../components/form/Form'

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
