// import firebase from "firebase/app";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBw-JBist2I6zDU78Qfkk_v8qsAqCoBKYA",
    authDomain: "registrar-aprendiz.firebaseapp.com",
    projectId: "registrar-aprendiz",
    storageBucket: "registrar-aprendiz.appspot.com",
    messagingSenderId: "842673433122",
    appId: "1:842673433122:web:ced9c7cc260fa2ad1bf87b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
