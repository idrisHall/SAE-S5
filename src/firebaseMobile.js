import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfigMobile = {
    apiKey: "AIzaSyDIrl8-LP0_q4wA2HYqJ4otnLumKwDrgqw",
    authDomain: "approximot-2-0.firebaseapp.com",
    projectId: "approximot-2-0",
    storageBucket: "approximot-2-0.firebasestorage.app",
    messagingSenderId: "127797921459",
    appId: "1:127797921459:web:a18b22fac10999c44752c6"
};

let firebaseAppMobile;
if (!firebaseAppMobile) {
    firebaseAppMobile = initializeApp(firebaseConfigMobile, "mobileApp");
}

const authMobile = getAuth(firebaseAppMobile);
const firestoreMobile = getFirestore(firebaseAppMobile);

export { firebaseAppMobile, authMobile, firestoreMobile };