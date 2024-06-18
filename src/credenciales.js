// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi0jWzrn3xCItCWaFiuwV_jBVU1aHfkXU",
  authDomain: "programacion---tp2.firebaseapp.com",
  projectId: "programacion---tp2",
  storageBucket: "programacion---tp2.appspot.com",
  messagingSenderId: "954560860072",
  appId: "1:954560860072:web:ecff4111de3474c685d79d"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;