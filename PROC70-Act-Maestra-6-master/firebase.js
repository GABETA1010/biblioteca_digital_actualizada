import firebase from "firebase"
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB3GIPBRp7bNNZ8zyAouOFoK6XSNElfG6w",
    authDomain: "biblioteca-digital-475dc.firebaseapp.com",
    projectId: "biblioteca-digital-475dc",
    storageBucket: "biblioteca-digital-475dc.appspot.com",
    messagingSenderId: "807391551451",
    appId: "1:807391551451:web:c6d1b9efb4e8ac389c51fe"
  };

  const app = initializeApp(firebaseConfig); 

  export default firebase.firestore();