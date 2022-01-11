import firebase from 'firebase/compat/app';

import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAoa_t9ow6FLhWsMb5mzCppjpd4a1LNikg",
    authDomain: "chat-app-5a9cd.firebaseapp.com",
    projectId: "chat-app-5a9cd",
    storageBucket: "chat-app-5a9cd.appspot.com",
    messagingSenderId: "865845605001",
    appId: "1:865845605001:web:24fa57e088a8c4ceebcc58",
    measurementId: "G-Z4SQ9VBE4V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = firebase.auth();
// const db = getFirestore();
const db = firebase.firestore();



auth.useEmulator('http://localhost:9099');
if(window.location.hostname === 'localhost'){
    db.useEmulator('localhost','');
}
export { db, auth };
export default firebase;