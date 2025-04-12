import React from 'react'
import './Dashboard.css'
import Header from './components/header/Header.jsx'
import ProjectList from '../pages/ProjectList.jsx'

function DashboardMain() {
  return (
    <div>
        <Header />
        <h2>Project List</h2>
        <ProjectList />
        <h2>Education List</h2>
    </div>
  )
}

export default DashboardMain
