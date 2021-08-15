import firebase from "firebase/app"
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "kartavya-academy-777bf.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig)
  var storage= firebase.storage();
  export default storage;