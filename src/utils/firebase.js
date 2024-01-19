// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBipaKWfF-9zUkUvlZKvfrCUHhHx7JbeFc",
    authDomain: "netflixgpt-himanshu.firebaseapp.com",
    projectId: "netflixgpt-himanshu",
    storageBucket: "netflixgpt-himanshu.appspot.com",
    messagingSenderId: "77819746420",
    appId: "1:77819746420:web:f0537f21a99945c4929921",
    measurementId: "G-Z9S5RP7FRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();