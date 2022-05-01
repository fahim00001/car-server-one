// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6F4JYl2Gm8qUFDW3vk1c9xaDAUKRtPYI",
  authDomain: "genius-car-servicex.firebaseapp.com",
  projectId: "genius-car-servicex",
  storageBucket: "genius-car-servicex.appspot.com",
  messagingSenderId: "630785884239",
  appId: "1:630785884239:web:fd6e026a2e34d3fdbb2a3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;