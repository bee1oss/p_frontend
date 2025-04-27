import React, { useEffect } from 'react'
import '../../../styles/Dashboard.css'
import Header from '../../layouts/header/Header.jsx'
import ProjectList from '../ProjectList.jsx'
import EducationTable from '../../layouts/education/EducationTable.jsx'
import EditAboutTable from '../../layouts/about/EditAboutTable.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAbouts } from '../../../redux/slices/Abouts.js'
import { fetchSkills } from '../../../redux/slices/Skill.js'
import { fetchProjects } from '../../../redux/slices/Projects.js'
import SkillsTable from '../../layouts/skill/SkillsTable.jsx'
import { fetchEdus } from '../../../redux/slices/Education.js'
import Table from '../../../components/table/Table.jsx'
import TableHeadEdu from '../../layouts/education/TableHeadEdu.jsx'
import TableHeadAbout from '../../layouts/about/TableHeadAbout.jsx'
import TableHeadSkill from '../../layouts/skill/TableHeadSkill.jsx'
import TableHeadProject from '../../layouts/project/TableHeadProject.jsx'
import ProjectTable from '../../layouts/project/ProjectTable.jsx'


function DashboardMain() {
  //aboutları redux'tan çekiyoruz
  const dispatch = useDispatch();
  const abouts = useSelector((state) => state.abouts.abouts);
  //skillsleri redux'tan çekiyoruz
  const skills = useSelector((state) => state.skills.skills);
  //projectsleri redux'tan çekiyoruz
  const projects = useSelector((state) => state.projects.projects);
  //edusları redux'tan çekiyoruz
  const edus = useSelector((state) => state.edus.edus);


  useEffect(() => {
    dispatch(fetchAbouts());
    dispatch(fetchSkills());
    dispatch(fetchEdus());
    dispatch(fetchProjects());
    
  }, [dispatch]);

  return (
    <div>
        <Header />
        
        <h2 className='dashboard-h2'>👤 About Me</h2>
        <Table>
          <TableHeadAbout />
          { (
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
          </Table>
        <h2 className='dashboard-h2'>Languages & Technologies</h2>
        <Table>
            <TableHeadSkill />
          {(
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
        </Table>
        <h2 className='dashboard-h2'>🎓 Education</h2>
        <Table>
          <TableHeadEdu />
              { (
                    edus.items.map((obj) => (
                      <EducationTable
                        key={obj._id}
                        id={obj._id}
                        university={obj.university}
                        faculity={obj.faculity}
                        departmen={obj.departmen}
                        graduated={obj.graduated ? obj.graduated.slice(0, 10) : ''} // YYYY-MM-DD formatı
                      />
                    ))
                  )
              }
        </Table>    
        <h2 className='dashboard-h2'>🛠️ Projects</h2>
        <Table>
        <TableHeadProject />
        { (
                    projects.items.map((obj) => (
                      <ProjectTable
                        key={obj._id}
                        id={obj._id}
                        name={obj.name}
                        techs={obj.techs}
                        description={obj.description}
                        github={obj.github}
                      />
                    ))
                  )
              }
        </Table>
    </div>
  )
}

export default DashboardMain
