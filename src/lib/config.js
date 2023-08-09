// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfGxcM6fXKq23KrdL_C7nhFItItWCF1AY",
    authDomain: "botilleria-9ac6f.firebaseapp.com",
    projectId: "botilleria-9ac6f",
    storageBucket: "botilleria-9ac6f.appspot.com",
    messagingSenderId: "93878941281",
    appId: "1:93878941281:web:efdd6f285aef57217c9c20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);