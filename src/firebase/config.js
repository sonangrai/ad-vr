import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAQNjvQnop6QO4U61pLk-wuTmEtbvgyJP4",
  authDomain: "advr-588cb.firebaseapp.com",
  databaseURL: "https://advr-588cb.firebaseio.com",
  projectId: "advr-588cb",
  storageBucket: "advr-588cb.appspot.com",
  messagingSenderId: "702560314265",
  appId: "1:702560314265:web:69b8fd2e82a820e2026908",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage, auth };
