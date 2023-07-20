import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../cssfile/Login.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginButton = (e) => {
    e.preventDefault();
        
    signInWithEmailAndPassword (auth,email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Logged in:', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login error:', errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleLoginButton}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login In</button>
       
      </form>
     
   
    </div>
  );
}
