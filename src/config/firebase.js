import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR7TfpKjiHVOvqYigvww8lPycfP2yDZNI",
  authDomain: "ofertwork-117aa.firebaseapp.com",
  projectId: "ofertwork-117aa",
  storageBucket: "ofertwork-117aa.appspot.com",
  messagingSenderId: "999916987436",
  appId: "1:999916987436:web:115a0c42243136b81c9d89"
};

// Initialize Firebase
class Firebase {
    constructor() {
      try {
        initializeApp(firebaseConfig);
    } catch (r) {}
      this.firebase = firebase;
    }
  }
  
  export default Firebase;