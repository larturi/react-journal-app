import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCG7Q5nifUow-D2UGr3FW3It1XKz9R5TVc",
    authDomain: "react-journal-app-76575.firebaseapp.com",
    projectId: "react-journal-app-76575",
    storageBucket: "react-journal-app-76575.appspot.com",
    messagingSenderId: "1087521964331",
    appId: "1:1087521964331:web:e9b150c8052f547955456e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}