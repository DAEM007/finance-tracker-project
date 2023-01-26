// All firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJRAHn2pNxl7UgG42bvYOECW0vdhRXuAQ",
  authDomain: "finance-tracker-project-b77f5.firebaseapp.com",
  projectId: "finance-tracker-project-b77f5",
  storageBucket: "finance-tracker-project-b77f5.appspot.com",
  messagingSenderId: "189730357376",
  appId: "1:189730357376:web:f653a922cc1e716ad96665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

