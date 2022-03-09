import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7bX5udzX7NbbZp_fEF4SY9cIylRw5I_Y",
  authDomain: "mocktwitter-e9280.firebaseapp.com",
  projectId: "mocktwitter-e9280",
  storageBucket: "mocktwitter-e9280.appspot.com",
  messagingSenderId: "138361231024",
  appId: "1:138361231024:web:7cb2fe18b4e8f8a9aecd75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// database connection
export const db = getFirestore(app);
// authentication connections
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
