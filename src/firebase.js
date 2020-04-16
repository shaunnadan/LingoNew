import firebase from "firebase/app";
import "firebase/database";

//firebase.initializeApp(config);

const config = {
  apiKey: "AIzaSyDilAEgSzl2rzEM9subggyGFR5evQwZMA0",
  authDomain: "lingo-d67ab.firebaseapp.com",
  databaseURL: "https://lingo-d67ab.firebaseio.com",
  projectId: "lingo-d67ab",
  storageBucket: "lingo-d67ab.appspot.com",
  messagingSenderId: "44805853012",
  appId: "1:44805853012:web:86c9a8f5d3a0d34485c2c1",
  measurementId: "G-5T0RKN25BQ"
};

firebase.initializeApp(config);

export default firebase;
