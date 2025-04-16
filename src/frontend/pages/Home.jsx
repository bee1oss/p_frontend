import React from 'react'
import Header from './Header.jsx'
import NavbarMain from './NavbarMain.jsx'
import AboutMe from '../layouts/AboutMe.jsx'
import SkillMain from './SkillMain.jsx'
import EducationMain from './EducationMain.jsx'
import ProjectsMain from './ProjectsMain.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import AboutMePage from './AboutMePage.jsx'

function Home() {
  return (
    <div>
      <Header />
      <NavbarMain />
      <AboutMePage />
      <SkillMain />
      <EducationMain />
      <ProjectsMain />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
