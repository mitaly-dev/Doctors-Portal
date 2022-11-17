// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKY5fuuV4RrgMAjdWIJe21TLT-qRQ7YK8",
  authDomain: "doctor-s-portal-f7f88.firebaseapp.com",
  projectId: "doctor-s-portal-f7f88",
  storageBucket: "doctor-s-portal-f7f88.appspot.com",
  messagingSenderId: "249027430708",
  appId: "1:249027430708:web:a36652ff5317d1b3803d61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app