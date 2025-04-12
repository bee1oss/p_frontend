import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './frontend/Home';
import DashboardMain from './backend/dashboard/DashboardMain';
import DashboardLayout from './backend/dashboard/layouts/DashboardLayout'; // az önce yazdığımız layout
import LoginPage from './backend/pages/LoginPage';
import Addproject from './backend/pages/Addproject';
import AddEducation from './backend/dashboard/components/education/AddEducationForm';
import AddLanguages from './backend/pages/AddLanguages';
import EditAbout from './backend/pages/EditAbout';
import Messages from './backend/pages/Messages';
import ReadMessage from './backend/dashboard/components/editContact/ReadMessage';

function App() {
  return (
      <Routes>
        {/* Kullanıcı tarafı */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard tarafı */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardMain />} />
          <Route path="addproject" element={<Addproject />} />
          <Route path="addlangstechs" element={<AddLanguages />} />
          <Route path="addeducation" element={<AddEducation />} />
          <Route path="editabout" element={<EditAbout />} />
          <Route path="editcontact" element={<Messages />} />
          <Route path="message/:id" element={<ReadMessage />} />
          {/* Diğer dashboard alt sayfalar */}
          {/* <Route path="users" element={<UserList />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
