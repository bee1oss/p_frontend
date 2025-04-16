import React, { useEffect } from 'react'
import '../../../styles/Dashboard.css'
import Header from '../../layouts/header/Header.jsx'
import ProjectList from '../ProjectList.jsx'
import EducationTable from '../../layouts/education/EducationTable.jsx'
import EditAboutTable from '../../layouts/about/EditAboutTable.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAbouts } from '../../../redux/slices/Abouts.js'
import { fetchSkills } from '../../../redux/slices/Skill.js'
import SkillsTable from '../../layouts/skill/SkillsTable.jsx'

function DashboardMain() {
  //aboutları redux'tan çekiyoruz
  const dispatch = useDispatch();
  const abouts = useSelector((state) => state.abouts.abouts);
  //skillsleri redux'tan çekiyoruz
  const skills = useSelector((state) => state.skills.skills);


  useEffect(() => {
    dispatch(fetchAbouts());
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <div>
        <Header />
        
        <h2 className='dashboard-h2'>👤 About Me</h2>
          {
            abouts.items.length === 0 ? (
                <p>Loading...</p> // veya spinner, loading animasyonu
              ) : (
                abouts.items.map((obj) => (
                  <EditAboutTable
                    key={obj._id}
                    id={obj._id}
                    title={obj.title_aboutme}
                    description={obj.description_aboutme}
                  />
                ))
              )
            }

        <h2 className='dashboard-h2'>Languages & Technologies</h2>
          {
            skills.items.length === 0 ? (
                <p>Loading...</p> // veya spinner, loading animasyonu
              ) : (
                skills.items.map((obj) => (
                  <SkillsTable
                    key={obj._id}
                    id={obj._id}
                    title={obj.title}
                    description={obj.description}
                  />
                ))
              )
          }
        <h2 className='dashboard-h2'>🎓 Education</h2>
        <EducationTable />
        <h2 className='dashboard-h2'>🛠️ Projects</h2>
        <ProjectList />
    </div>
  )
}

export default DashboardMain
