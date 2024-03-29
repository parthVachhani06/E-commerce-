import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzbEQkWOY5CdObMPAgpQAsdPXk656MiVQ",
  authDomain: "fir-product-6407e.firebaseapp.com",
  projectId: "fir-product-6407e",
  storageBucket: "fir-product-6407e.appspot.com",
  messagingSenderId: "103078236969",
  appId: "1:103078236969:web:8708e9c7e5c143b3cc1d38"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();