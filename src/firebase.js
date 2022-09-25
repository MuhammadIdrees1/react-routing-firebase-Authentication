import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAgQECSMDgArRJ5NgoG6Q4mPrexzv1VezQ",
  authDomain: "react-authentication-2adf5.firebaseapp.com",
  projectId: "react-authentication-2adf5",
  storageBucket: "react-authentication-2adf5.appspot.com",
  messagingSenderId: "728933133721",
  appId: "1:728933133721:web:ddd9c05462f09eadbb3708",
  measurementId: "G-5QMPENCQ8G"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
