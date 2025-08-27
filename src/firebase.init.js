// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_hUWenHBwBhCgisFBlSha-cZt-cWDKdk",
    authDomain: "cmr-project-9c3f8.firebaseapp.com",
    projectId: "cmr-project-9c3f8",
    storageBucket: "cmr-project-9c3f8.firebasestorage.app",
    messagingSenderId: "387563770286",
    appId: "1:387563770286:web:d52b5f6412c78a0eacf83f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)