import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {
   const navigate = useNavigate()
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(username)
      console.log(password);
      navigate('/')
   }


  return (
    <div className="loginpage">
      <div className="loginpage__container">
      <h2>Student Result's Manager</h2>
      <h5>Please Enter Your Details to get signed into your account</h5>
      <form onSubmit={handleSubmit}>
      
         <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
         <input type="text" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
         <button type='submit'>Login</button>
      </form>
      <h5>Don't have an account? <span onClick={() => navigate('/register')}>Create an account</span></h5>
      </div>
    </div>
  )
}

export default LoginPage