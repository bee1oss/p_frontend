import React from 'react'
import Login from '../dashboard/components/login/Login.jsx'
import '../dashboard/components/login/Login.css'

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
