// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnAJPQWsLNkzkdp93j1-qWv-NesHbTLz8",
  authDomain: "cafe-luzi.firebaseapp.com",
  projectId: "cafe-luzi",
  storageBucket: "cafe-luzi.appspot.com",
  messagingSenderId: "1001691991777",
  appId: "1:1001691991777:web:3b33f7c32655e517d3f1a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);