// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCe9Mn-wLI2xFMK8Z1rQXIl5wa6Zkd4GaE",
  authDomain: "authentication-7f39c.firebaseapp.com",
  projectId: "authentication-7f39c",
  storageBucket: "authentication-7f39c.appspot.com",
  messagingSenderId: "875475398169",
  appId: "1:875475398169:web:f172ffb7568c8d633f4488",
  measurementId: "G-PBRQVKG87J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};
