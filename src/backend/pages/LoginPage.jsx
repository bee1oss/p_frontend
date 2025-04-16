import React from 'react'
import Login from '../layouts/login/Login.jsx'
import '../../styles/login.css'

function LoginPage() {
  return (
    <div className="login login_body">
        <div className="login-container">
            <h2 className='login-h2'>Login</h2>
            <Login />
        </div>
    </div>
  )
}

export default LoginPage
