import React, { useEffect } from 'react'
import ProjectsCard from '../layouts/ProjectsCard.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../../redux/slices/Projects.js';

function ProjectsMain() {
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <section id="projects">
    <h2>🛠️ Projects</h2>
        <div className="card-container">
        {
        projects.items.length === 0 ? (
          <p>Loading...</p> // veya spinner, loading animasyonu
        ) : (
          projects.items.map((obj) => (
            <ProjectsCard
              key={obj._id}
              name={obj.name}
              techs={obj.techs}
              description={obj.description}
              github={obj.github}
            />
          ))
        )
      }
      </div>
    </section>
  )
}

export default ProjectsMain
