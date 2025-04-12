import React from 'react'

function ProjectsCard(props) {
  return (
    <div className="card">
        <h3>{props.title}</h3>
        <p><strong>Technologies:</strong>{props.technologies}</p>
        <p>{props.description}</p>
        <a href={props.github} target="_blank">🔗 View on GitHub</a>
    </div>
  )
}

export default ProjectsCard
