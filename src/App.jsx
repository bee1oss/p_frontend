import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './frontend/Home';
import DashboardMain from './backend/dashboard/DashboardMain';
import DashboardLayout from './backend/dashboard/layouts/DashboardLayout'; // az önce yazdığımız layout
import LoginPage from './backend/pages/LoginPage';
import ProjectList from './backend/pages/ProjectList';
import Addproject from './backend/pages/Addproject';

function App() {
  return (
    
      <Routes>
        {/* Kullanıcı tarafı */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard tarafı */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardMain />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="addproject" element={<Addproject />} />
          {/* Diğer dashboard alt sayfalar */}
          {/* <Route path="users" element={<UserList />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
