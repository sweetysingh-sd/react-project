
  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
  import {getDatabase, ref, set, child, get, remove } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDgwWxFCLCYX_3BdlG6JbzZ5FogF5UfzYA",
    authDomain: "birthday-project-204ea.firebaseapp.com",
    databaseURL: "https://birthday-project-204ea-default-rtdb.firebaseio.com",
    projectId: "birthday-project-204ea",
    storageBucket: "birthday-project-204ea.appspot.com",
    messagingSenderId: "137458773277",
    appId: "1:137458773277:web:aa822a287740db3422c5f4",
    measurementId: "G-F2PPGEPG9S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth= getAuth()
//   setting to realtime database.
  const db = getDatabase(app)

  export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, db, ref, set, child, get, remove}




  