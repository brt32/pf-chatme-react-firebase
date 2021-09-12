// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP6gSr3MZfSe4bpS9291Q7m6ZMTu3YnII",
  authDomain: "pf-chatme-react-firebase.firebaseapp.com",
  databaseURL: "https://pf-chatme-react-firebase-default-rtdb.firebaseio.com",
  projectId: "pf-chatme-react-firebase",
  storageBucket: "pf-chatme-react-firebase.appspot.com",
  messagingSenderId: "678033292728",
  appId: "1:678033292728:web:f5acf0795197b396fb234d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
