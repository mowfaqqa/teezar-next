// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1bhOXKuGAUUEhN-VQBY_oY0eJjlU0Ums",
  authDomain: "teezar-518ca.firebaseapp.com",
  projectId: "teezar-518ca",
  storageBucket: "teezar-518ca.appspot.com",
  messagingSenderId: "92990741871",
  appId: "1:92990741871:web:be1965105a76e4ab97dc9a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig, "teezar1");
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


export {provider, auth, signInWithRedirect, onAuthStateChanged, signOut};