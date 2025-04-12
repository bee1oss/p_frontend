import React from 'react'
import './Login.css'

function Login() {
  return (
    
    <form action="dashboard" method="POST">
      <input type="text" placeholder="Username" name="username" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
  
  )
}

export default Login
