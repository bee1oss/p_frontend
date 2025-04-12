import React from 'react'
import Header from './header/Header'
import NavbarMain from './navbar/NavbarMain'    
import AboutMe from './about/AboutMe'
import SkillMain from './skills/SkillMain'
import EducationMain from './education/EducationMain'
import ProjectsMain from './projects/ProjectsMain'
import Contact from './contact/Contact'
import Footer from './Footer'

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
