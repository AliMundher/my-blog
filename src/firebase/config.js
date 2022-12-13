import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "vue-app-10a26.firebaseapp.com",
  projectId: "vue-app-10a26",
  storageBucket: "vue-app-10a26.appspot.com",
  messagingSenderId: "3139084477",
  appId: "1:3139084477:web:286ce77f379480703997d4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const projectStore = firebase.firestore();

export {projectStore}