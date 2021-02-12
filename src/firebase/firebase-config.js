import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfigDevelopment = {
    apiKey: "AIzaSyCG7Q5nifUow-D2UGr3FW3It1XKz9R5TVc",
    authDomain: "react-journal-app-76575.firebaseapp.com",
    projectId: "react-journal-app-76575",
    storageBucket: "react-journal-app-76575.appspot.com",
    messagingSenderId: "1087521964331",
    appId: "1:1087521964331:web:e9b150c8052f547955456e"
};

const firebaseConfigTesting = {
  apiKey: "AIzaSyB5B1EJzJyhWZLDiEihV_N0c3JIF5MXeYQ",
  authDomain: "react-journal-app-testin-c8664.firebaseapp.com",
  projectId: "react-journal-app-testin-c8664",
  storageBucket: "react-journal-app-testin-c8664.appspot.com",
  messagingSenderId: "711209298789",
  appId: "1:711209298789:web:671381ae1c08fdfcf04f8c"
};


if (process.env.NODE_ENV === 'test') {
  // Initialize Firebase Testing
  firebase.initializeApp(firebaseConfigTesting);
} else if(process.env.NODE_ENV === 'development') {
  // Initialize Firebase Development
  firebase.initializeApp(firebaseConfigDevelopment);
} else {
  
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}