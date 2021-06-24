// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/storage";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyCFl5lNq17AEB3J_2BXwoOIA3tuGM4iF9w",
  authDomain: "peyzaj-30d27.firebaseapp.com",
  projectId: "peyzaj-30d27",
  storageBucket: "peyzaj-30d27.appspot.com",
  messagingSenderId: "708368341800",
  appId: "1:708368341800:web:4223b0382c23a853e64e1d",
  measurementId: "G-N4XC5Z3SCJ",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const storage = firebase.storage();
export const firestore = firebase.firestore();
export { storage, firebase as default };
