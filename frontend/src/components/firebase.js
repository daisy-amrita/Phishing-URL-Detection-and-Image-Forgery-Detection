// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDY6XlXDp08twxYzD8PkKfAMc7nlB9zm3s",
  authDomain: "fir-authentication-a375e.firebaseapp.com",
  projectId: "fir-authentication-a375e",
  storageBucket: "fir-authentication-a375e.appspot.com",
  messagingSenderId: "882768464075",
  appId: "1:882768464075:web:47d114ec0fa9b1704bf34e",
  measurementId: "G-6FBD97FCYQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();

export { auth, provider};