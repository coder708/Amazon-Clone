// For Firebase JS SDK v7.20.0 and later, measurementId is optional\

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARNVkraWpy45hvFDNNquUsgN56JJrPibw",
    authDomain: "clone-3f5eb.firebaseapp.com",
    projectId: "clone-3f5eb",
    storageBucket: "clone-3f5eb.appspot.com",
    messagingSenderId: "112520554989",
    appId: "1:112520554989:web:3d4db453d11f2530991fe4",
    measurementId: "G-TTW7Y902WK"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};


