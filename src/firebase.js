import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "  "
  authDomain: "jobtrackerapp-ak7.firebaseapp.com",
  projectId: "jobtrackerapp-ak7",
  storageBucket: "jobtrackerapp-ak7.appspot.com",
  messagingSenderId: "4804897599",
  appId: "1:4804897599:web:d367d2b1f4a032fa62418a",
  measurementId: "G-50R9DJCXLJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
