import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAnyidBBu7VG9ETkFC3EEN0UVPU9mkYNdI",
  authDomain: "clicktocartsl.firebaseapp.com",
  projectId: "clicktocartsl",
  storageBucket: "clicktocartsl.appspot.com",
  messagingSenderId: "446771990700",
  appId: "1:446771990700:web:adf3a516e4125375d7cf09",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
