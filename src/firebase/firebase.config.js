// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKf61Xyhal7ziZSQNe2Khd_N_8VUBAA40",
  authDomain: "auth-integration-private-6495a.firebaseapp.com",
  projectId: "auth-integration-private-6495a",
  storageBucket: "auth-integration-private-6495a.appspot.com",
  messagingSenderId: "576613015115",
  appId: "1:576613015115:web:b0cd745fa475a1ee9437ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
