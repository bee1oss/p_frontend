import './App.css';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth,fetchAuthMe } from './redux/slices/Auth';
import { Navigate } from 'react-router-dom';

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
import React, { useEffect } from 'react';

function App() {
  
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe()); // Eğer token varsa kullanıcı verisini tekrar getir
  }, [dispatch]);

  const adminRoute = (component) => {
    return isAuth ? component : <Navigate to="/login" />;
  };

  return (
      <Routes>
        {/* Kullanıcı tarafı */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard tarafı */}
        <Route path="/dashboard" element={adminRoute(<DashboardLayout />)}>
          <Route index element={adminRoute(<DashboardMain />)} />
          <Route path="addproject" element={adminRoute(<Addproject />)} />
          <Route path="addlangstechs" element={adminRoute(<AddLanguages />)} />
          <Route path="addeducation" element={adminRoute(<AddEducation />)} />
          <Route path="editabout" element={adminRoute(<EditAbout />)} />
          <Route path="editcontact" element={adminRoute(<Messages />)} />
          <Route path="message/1" element={adminRoute(<ReadMessage />)} />
          {/* Diğer dashboard alt sayfalar */}
          {/* <Route path="users" element={<UserList />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
