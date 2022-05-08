// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhiZMz4Hzwr-Y9GyekjKo8aUQ1elnLFMI",
  authDomain: "warehouse-grocery-website.firebaseapp.com",
  projectId: "warehouse-grocery-website",
  storageBucket: "warehouse-grocery-website.appspot.com",
  messagingSenderId: "51240822024",
  appId: "1:51240822024:web:6be4f170a5c9ac0c13b8bd",
  measurementId: "G-XLGKR1EBVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;