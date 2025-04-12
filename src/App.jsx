import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './component/frontend/Home';
import DashboardMain from './component/backend/dashboard/DashboardMain';
import DashboardLayout from './component/backend/dashboard/layouts/DashboardLayout'; // az önce yazdığımız layout
import LoginPage from './component/backend/pages/LoginPage';

function App() {
  return (
    
      <Routes>
        {/* Kullanıcı tarafı */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard tarafı */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardMain />} />
          
          {/* Diğer dashboard alt sayfalar */}
          {/* <Route path="users" element={<UserList />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
