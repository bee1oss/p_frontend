import React from 'react'
import Header from './header/Header.jsx'
import NavbarMain from './navbar/NavbarMain.jsx'
import AboutMe from './about/AboutMe.jsx'
import SkillMain from './skills/SkillMain.jsx'
import EducationMain from './education/EducationMain.jsx'
import ProjectsMain from './projects/ProjectsMain.jsx'
import Contact from './contact/Contact.jsx'
import Footer from './Footer.jsx'

function Home() {
  return (
    <div>
      <Header />
      <NavbarMain />
      <AboutMe />
      <SkillMain />
      <EducationMain />
      <ProjectsMain />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
