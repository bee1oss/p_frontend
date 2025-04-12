import React from 'react'
import ProjectsCard from './ProjectsCard'

function ProjectsMain() {
  return (
    <section id="projects">
    <h2>🛠️ Projects</h2>
        <div className="card-container">
            <ProjectsCard title="University Scheduling System" technologies="React, Node.js, Express, MongoDB" description="A web app to automate university class schedules. Improved planning efficiency and eliminated manual workload." github="https://github.com/yourusername/university-schedulera"/>
        </div>
    </section>
  )
}

export default ProjectsMain
