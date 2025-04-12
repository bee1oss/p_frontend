import React from 'react'
import Login from '../login/Login'
import '../login/Login.css'

function LoginPage() {
  return (
    <div className="login login_body">
        <div className="login-container">
            <h2>Login</h2>
            <Login />
        </div>
    </div>
  )
}

export default LoginPage
