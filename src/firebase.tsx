// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvG81M3iNZhjOxkusEUmOiVqlCDU0UE-c",
  authDomain: "free2play-9fb98.firebaseapp.com",
  projectId: "free2play-9fb98",
  storageBucket: "free2play-9fb98.appspot.com",
  messagingSenderId: "795499264185",
  appId: "1:795499264185:web:c35350dabbb52b4f0dc368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);