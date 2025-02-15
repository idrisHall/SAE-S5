import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfigMobile = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };


let firebaseAppMobile;
if (!firebaseAppMobile) {
    firebaseAppMobile = initializeApp(firebaseConfigMobile, "mobileApp");
}

const authMobile = getAuth(firebaseAppMobile);
const firestoreMobile = getFirestore(firebaseAppMobile);

export { firebaseAppMobile, authMobile, firestoreMobile };