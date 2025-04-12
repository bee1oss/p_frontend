import React from 'react'
import './Dashboard.css'
import Header from './components/header/Header.jsx'
import ProjectList from '../pages/ProjectList.jsx'
import EducationTable from './components/education/EducationTable.jsx'
import LanguagesTable from './components/languages/LanguagesTable.jsx'
import EditAboutTable from './components/editabout/EditAboutTable.jsx'

function DashboardMain() {
  return (
    <div>
        <Header />
        
        <h2 className='dashboard-h2'>👤 About Me</h2>
        <EditAboutTable />
        <h2 className='dashboard-h2'>Languages & Technologies</h2>
        <LanguagesTable />
        <h2 className='dashboard-h2'>🎓 Education</h2>
        <EducationTable />
        <h2 className='dashboard-h2'>🛠️ Projects</h2>
        <ProjectList />
    </div>
  )
}

export default DashboardMain
