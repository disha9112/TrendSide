import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCIBU2tfDO-8BFsZ-loLZeGNMSqWE1YnAU",
  authDomain: "trend-side-db.firebaseapp.com",
  projectId: "trend-side-db",
  storageBucket: "trend-side-db.appspot.com",
  messagingSenderId: "113275793207",
  appId: "1:113275793207:web:1436d9815de810f810f4b2",
  measurementId: "G-RRV4Q40QTF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
