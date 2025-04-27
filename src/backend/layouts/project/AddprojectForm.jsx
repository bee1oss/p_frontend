import React, { use, useEffect } from 'react'
import Label from '../../../components/label/Label'
import Input from '../../../components/input/Input'
import Textarea from '../../../components/textarea/Textarea'
import Button from '../../../components/button/Button'
import Form from '../../../components/form/Form'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchCreateProject, fetchUpdateProject } from '../../../redux/slices/Projects'

function AddprojectForm() {
  const dispatch = useDispatch()
  const location = useLocation()

  const [projectName, setProjectName] = React.useState('')
  const [projectTechs, setProjectTechs] = React.useState('')
  const [projectDescription, setProjectDescription] = React.useState('')
  const [projectLink, setProjectLink] = React.useState('')

  useEffect(() => {
    if (location.state) {
      setProjectName(location.state.name || '')
      setProjectTechs(location.state.techs || '')
      setProjectDescription(location.state.description || '')
      setProjectLink(location.state.github || '')
    }
  }, [location.state])

  const handleSubmit = (e) => {
    e.preventDefault()
      
      const newProject = {
        name: projectName,
        techs: projectTechs,
        description: projectDescription,
        github: projectLink,
      }
  
      if (location.state) {
        dispatch(fetchUpdateProject({ id: location.state.id, ...newProject }))
      } else {
        dispatch(fetchCreateProject(newProject))
      }
  
      setProjectName('')
      setProjectTechs('')
      setProjectDescription('')
      setProjectLink('')
    }





  return (
      <Form className='form-card' onSubmit={handleSubmit}>
        <Label htmlFor="projectTitle" name="Project Title" />
        <Input
        type="text"
        id="name"
        className="name"
        value={projectName}
        placeholder="Name Of Project"
        onChange={(e) => setProjectName(e.target.value)}
        required
      />
        <Label htmlFor="projectTechs" name="Project Technologies" />
        <Input
        type="text"
        id="techs"
        className="techs"
        value={projectTechs}
        placeholder="Name Of Uses Technologies"
        onChange={(e) => setProjectTechs(e.target.value)}
        required
      />
        <Label name="Write a brief description of the project" />
        <Input
        type="text"
        id="description"
        className="description"
        value={projectDescription}
        placeholder="Description"
        onChange={(e) => setProjectDescription(e.target.value)}
        required
      />
        <Label name="Project Link (URL)" />
        <Input
        type="text"
        id="github"
        className="github"
        value={projectLink}
        placeholder="Github Link"
        onChange={(e) => setProjectLink(e.target.value)}
      />
        <Button type="sunmit" name="Save Project" />
      </Form>
  )
}

export default AddprojectForm
