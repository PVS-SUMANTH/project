import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp (    {
    apiKey: "AIzaSyCtEOlzfJ69ND-pzhIMx1Qi8c_10RE1J3I",
    authDomain: "cddchat-54c7b.firebaseapp.com",
    projectId: "cddchat-54c7b",
    storageBucket: "cddchat-54c7b.appspot.com",
    messagingSenderId: "1054368118856",
    appId: "1:1054368118856:web:1982e61b9b9cb88821c07d",
    measurementId: "G-GYVJK4G10K"
  } ).auth();