import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl4YcuP1oUr5osghH5GR6KJo4GeXdenjw",
  authDomain: "mundo-popdb.firebaseapp.com",
  projectId: "mundo-popdb",
  storageBucket: "mundo-popdb.appspot.com",
  messagingSenderId: "505773578682",
  appId: "1:505773578682:web:2f8d25b6b49ad6bf492583",
  measurementId: "G-G7EMEQV214"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firestoreDB = getFirestore(app)
//const auth = app.auth()

export {firestoreDB};