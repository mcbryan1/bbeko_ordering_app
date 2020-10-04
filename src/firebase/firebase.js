import * as firebase from "firebase";

import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBYIzwrEkaYPN9n7PsuvkJXK07v6c1VME",
  authDomain: "bbeko-8f61d.firebaseapp.com",
  databaseURL: "https://bbeko-8f61d.firebaseio.com",
  projectId: "bbeko-8f61d",
  storageBucket: "bbeko-8f61d.appspot.com",
  messagingSenderId: "244370237950",
  appId: "1:244370237950:web:3367be6a82a027114bb8af",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
