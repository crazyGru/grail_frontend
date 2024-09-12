import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkua475myiNgrwVUapTjzBMArSgzUQmzE",
  authDomain: "grail-6cba0.firebaseapp.com",
  projectId: "grail-6cba0",
  storageBucket: "grail-6cba0.appspot.com",
  messagingSenderId: "309895369716",
  appId: "1:309895369716:web:5d762326a03ffe20d59fa1",
  measurementId: "G-89VQ7FC740",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
