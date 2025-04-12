import React from 'react'
import { Link } from 'react-router-dom';

const links = [
  { link: "Home", section: "home" },
  { link: "Add Project", section: "addProject" },
  { link: "Edit About", section: "editAbout" },
  { link: "Contact", section: "contact" },
];

function Sidebar() {
  return (
    <div>
        <h2>My Dashboard</h2>
        <Link to="/dashboard" className="logo">Home</Link>
        <Link to="/dashboard/projects" className="logo">Project List</Link>
        <Link to="/dashboard/addproject" className="logo">Add Project</Link>
        <Link to="/dashboard/editabout" className="logo">Edit About</Link>
        <Link to="/dashboard/settings" className="logo">Settings</Link>
        <a href="login.html">Logout</a>
  </div>
  )
}

export default Sidebar
