import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC16XQi45x_f-4hCg6ERBKA9QOD3tAK6Ww",
  authDomain: "react-notes-704d1.firebaseapp.com",
  projectId: "react-notes-704d1",
  storageBucket: "react-notes-704d1.appspot.com",
  messagingSenderId: "440831463047",
  appId: "1:440831463047:web:08f1a81a83a5078a27b222"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")