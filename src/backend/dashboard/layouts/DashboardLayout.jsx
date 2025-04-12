// components/layouts/DashboardLayout.js
import Sidebar from '../components/sidebar/SidebarMain.jsx'; // kendi sidebar yolun neyse
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
