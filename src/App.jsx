import './App.css';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth,fetchAuthMe } from './redux/slices/Auth';
import { Navigate } from 'react-router-dom';

import Home from './frontend/pages/Home';
import DashboardMain from './backend/pages/dashboard/DashboardMain';
import DashboardLayout from './backend/layouts/DashboardLayout'; // az önce yazdığımız layout
import LoginPage from './backend/pages/LoginPage';

import AddEducation from './backend/layouts/education/AddEducationForm';
import AddSkill from './backend/pages/AddSkills';
import EditAbout from './backend/pages/EditAbout';
import Messages from './backend/pages/Messages';
import ReadMessage from './backend/layouts/contact/ReadMessage';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import Addproject from './backend/pages/Addproject';

function App() {
  
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      dispatch(fetchAuthMe());
    }
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
          <Route path="addskills" element={adminRoute(<AddSkill />)} />
          <Route path="addeducation" element={adminRoute(<AddEducation />)} />
          <Route path="addabout" element={adminRoute(<EditAbout />)} />
          <Route path="messages" element={adminRoute(<Messages />)} />
          <Route path="messages/:id" element={adminRoute(<ReadMessage />)} />
          {/* Diğer dashboard alt sayfalar */}
          {/* <Route path="users" element={<UserList />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
