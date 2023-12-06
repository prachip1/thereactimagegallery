// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_pjXm_CAuk1OLie8XNVza1Ce8T-rBRtY",
  authDomain: "imagegallery-ae1d2.firebaseapp.com",
  projectId: "imagegallery-ae1d2",
  storageBucket: "imagegallery-ae1d2.appspot.com",
  messagingSenderId: "89616633290",
  appId: "1:89616633290:web:48d1afc64b211201cd5333",
  measurementId: "G-DQJLY5NR24"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);