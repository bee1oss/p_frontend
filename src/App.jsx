import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './component/frontend/Home'
import Login from './component/backend/login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
