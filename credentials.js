// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCllhzhMW0-1Vmi3TIc5gzKolv7phrmRzU",
  authDomain: "rolando-portfolio.firebaseapp.com",
  projectId: "rolando-portfolio",
  storageBucket: "rolando-portfolio.appspot.com",
  messagingSenderId: "763102743524",
  appId: "1:763102743524:web:ab73cfe084709ba33795f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const messaging = getMessaging(app);
export default app;
