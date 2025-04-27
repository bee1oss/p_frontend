// components/layouts/DashboardLayout.js
import Sidebar from './sidebar/SidebarMain'; // kendi sidebar yolun neyse
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
