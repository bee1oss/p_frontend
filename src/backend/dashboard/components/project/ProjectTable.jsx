import React from 'react'
import './Table.css'
import Button from '../button/AButton'

function ProjectTable() {
  return (
<table>
      <thead>
        <tr>
          <th>#</th>
          <th>Project Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Portfolio Website</td>
          <td>A personal site to showcase my skills and projects.</td>
          <td>
            <Button name="Edit" className="button" />
            <Button name="Delete" className="button" />
          </td>
        </tr>
      </tbody>
    </table>

  )
}

export default ProjectTable
