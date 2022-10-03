import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterPage.css'

function RegisterPage() {
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
    <div className="registerpage">
       <div className="registerpage__container">
      <h2>Student Result's Manager</h2>
      <h5>To get Started, Create an account</h5>
      <form onSubmit={handleSubmit}>
      
         <input type="email" placeholder='Email Address' value={username} onChange={e => setUsername(e.target.value)}/>
         <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
         <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
         <input type="password" placeholder='Confirm Password' value={password} onChange={e => setPassword(e.target.value)}/>
         <button type='submit'>Login</button>
      </form>
      <h5>Already have an account? <span onClick={() => navigate('/login')}>Sign In</span></h5>
      </div>
    </div>
  )
}

export default RegisterPage