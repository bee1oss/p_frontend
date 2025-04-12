import React from 'react'
import './Login.css'

function Login() {
  return (
    <div class="login login_body">
    <div class="login-container">
    <h2>Login</h2>
    <form action="dashboard.html" method="GET">
      <input type="text" placeholder="Username" name="username" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
  </div>
  )
}

export default Login
