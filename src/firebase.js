import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase,push, ref, set, get, child } from "firebase/database";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChPyyxmMkDOrc0yd8bNY4lBYH07Rqm2K4",
  authDomain: "approximot-test.firebaseapp.com",
  projectId: "approximot-test",
  databaseURL: "https://approximot-test-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "approximot-test.firebasestorage.app",
  messagingSenderId: "289911245716",
  appId: "1:289911245716:web:c977d1e0aa6e8830699d81"
};

// Initialisation de Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Authentification
const database = getDatabase(firebaseApp); // Base de données

export { firebaseApp, auth, database, push, ref, set, get, child };
