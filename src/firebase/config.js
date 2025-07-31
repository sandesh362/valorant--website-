// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAni4XX8-hn8FajTu1WF0YAWiDPfOrXg38",
  authDomain: "team-fury.firebaseapp.com",
  projectId: "team-fury",
  storageBucket: "team-fury.firebasestorage.app",
  messagingSenderId: "1079053517694",
  appId: "1:1079053517694:web:c8c08347db5070c5f0e92f",
  measurementId: "G-DRGBWXVPHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export initialized services
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };

