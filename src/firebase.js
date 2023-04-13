// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3wzgs1YM9hFPZbRjHbF0-lSXDbW41DeE",
  authDomain: "timetable-generator-51bed.firebaseapp.com",
  projectId: "timetable-generator-51bed",
  storageBucket: "timetable-generator-51bed.appspot.com",
  messagingSenderId: "538649816087",
  appId: "1:538649816087:web:1feb3fea303c6aaec04052",
  measurementId: "G-D8B9ZN3VVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
