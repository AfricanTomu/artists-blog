import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBBWTa0PE9EhJu9cSRltYjeeW-ODTdIRNk",
    authDomain: "afrocentric-websites.firebaseapp.com",
    projectId: "afrocentric-websites",
    storageBucket: "afrocentric-websites.appspot.com",
    messagingSenderId: "512660361686",
    appId: "1:512660361686:web:cb4ee57b62ad5460c69477"
  };

  //initialize app
  firebase.initializeApp(firebaseConfig)

  //initialise firestore
  const projectFirestore = firebase.firestore()

  //creating a timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp}

