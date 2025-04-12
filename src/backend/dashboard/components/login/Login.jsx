import React from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // formun sayfa yenilemesini engeller

    // Burada kullanıcı adı / şifre kontrolü yapılabilir
    // örnek: if (username === 'admin' && password === '1234')

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" name="username" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;