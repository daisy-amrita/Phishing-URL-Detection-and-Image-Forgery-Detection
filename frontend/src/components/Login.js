import React, { useState } from 'react';
import { auth } from './firebase';
import '../cssfile/Login.css';
import { Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
        
    createUserWithEmailAndPassword(auth,email, password)
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
      <h1>Sign page</h1>
      <form onSubmit={handleLoginButton}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Sign In</button>
       
      </form>
      <Link to="/loginpage">
         
              <button className="button">
                loginpage
              </button>
            
        </Link>
        <Link to="/loginpage">
         
         <button className="button">
           login with google
         </button>
        </Link>
    </div>
  );
}
