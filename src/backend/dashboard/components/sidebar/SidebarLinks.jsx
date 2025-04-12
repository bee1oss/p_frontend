import React from 'react'
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div>
        <h2>My Dashboard</h2>
        <Link to="/dashboard" className="logo">Home</Link>
        <Link to="/dashboard/addproject" className="logo">Add Project</Link>
        <Link to="/dashboard/addlangstechs" className="logo">Add Langs & Techs</Link>
        <Link to="/dashboard/addeducation" className="logo">Add Education</Link>
        <Link to="/dashboard/editabout" className="logo">Edit About</Link>
        <Link to="/dashboard/editcontact" className="logo">Edit Contact</Link>
        <Link to="/dashboard/message/1" className="logo"></Link>
        <Link to="/login" className="logo">Logout</Link>
  </div>
  )
}

export default Sidebar
