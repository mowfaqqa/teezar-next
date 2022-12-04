// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZNYGiDEuQlhCgycp7pa8nAGNZbTiA_Ro",
  authDomain: "teezar-7bd8b.firebaseapp.com",
  projectId: "teezar-7bd8b",
  storageBucket: "teezar-7bd8b.appspot.com",
  messagingSenderId: "274700726967",
  appId: "1:274700726967:web:100bde7ed38c0e9818d332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


export {provider, auth, signInWithRedirect, onAuthStateChanged, signOut};