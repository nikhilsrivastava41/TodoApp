
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtRWxA6ZkN714ziXVFxBOF_QEHjN4rS4s",
    authDomain: "todo-8241e.firebaseapp.com",
    databaseURL: "https://todo-8241e.firebaseio.com",
    projectId: "todo-8241e",
    storageBucket: "todo-8241e.appspot.com",
    messagingSenderId: "883129225620",
    appId: "1:883129225620:web:0a7b023a21c1c1ed983f81"
});


const db=firebaseApp.firestore();

export default db;