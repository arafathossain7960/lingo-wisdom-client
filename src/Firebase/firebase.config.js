// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0dpCaZkopvWT_81cGH2R4G_SRumNxq7c",
  authDomain: "cpd-center.firebaseapp.com",
  projectId: "cpd-center",
  storageBucket: "cpd-center.appspot.com",
  messagingSenderId: "343947491243",
  appId: "1:343947491243:web:9a803b664de6137457c4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;