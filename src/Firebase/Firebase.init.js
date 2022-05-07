// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxroHlFsb54E762KVYoiSFvQQ7iiTz-dI",
  authDomain: "books-inventory-5dea2.firebaseapp.com",
  projectId: "books-inventory-5dea2",
  storageBucket: "books-inventory-5dea2.appspot.com",
  messagingSenderId: "537934048091",
  appId: "1:537934048091:web:a31a184c5edd577d8e487e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
