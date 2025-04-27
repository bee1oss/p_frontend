import React from 'react'

function ProjectsCard({ name, techs, description, github }) {

  const isGithubValid = typeof github === 'string' && github.trim() !== '';
  return (
    <div className="card">
        <h3>{name}</h3>
        <p><strong>Technologies:</strong>{techs}</p>
        <p>{description}</p>
        {isGithubValid ? (
          <a href={github}>🔗 View on GitHub</a>
        ):(
          <a>Github Link ❌</a> 
        )
          }
        
    </div>
  )
}

export default ProjectsCard
