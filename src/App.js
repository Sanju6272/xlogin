import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] =  useState(false);
  const [error, setError] = useState('');

  const validateForm = (e)=>{
    e.preventDefault();
    if(username === 'user' && password === 'password'){
      setIsLoggedIn(true);
      setError('');
    } else{
      setError('Invalid username or password');
      setIsLoggedIn(false);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {
        isLoggedIn ? (
          <p>
            Welcome, user!
          </p>
        ) : (
        <form onSubmit={validateForm}>
        {error && <p>{error}</p>}
        <label>
          Username:
        </label>
        <input
            type = 'text' 
            placeholder='username' 
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
        <br/>
        <label>
          Password:
        </label>
          <input 
            type='password'
            placeholder='password'
            onChange={(e)=>setPassword(e.target.value)}
            required  
          />
        <br/>
        <button type='submit' >Submit</button> 
      </form>
        )
      }
      
    </div>
  );
}

export default App;
