// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEhOk46tytkIkZgF-y-OYhBfBBXtrnGnU",
  authDomain: "brand-shop-62b1f.firebaseapp.com",
  projectId: "brand-shop-62b1f",
  storageBucket: "brand-shop-62b1f.appspot.com",
  messagingSenderId: "26470078169",
  appId: "1:26470078169:web:87f8f2d1fb9e9e14bf10c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
