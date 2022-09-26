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
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
         <input type="text" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
         <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage