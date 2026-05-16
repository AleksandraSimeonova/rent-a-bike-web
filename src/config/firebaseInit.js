// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import page from "../lib/page.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB39FcMAzhojCXDn2rWzaPY1gZiyoJ0mms",
  authDomain: "rent-a-bike-softuni1.firebaseapp.com",
  projectId: "rent-a-bike-softuni1",
  storageBucket: "rent-a-bike-softuni1.firebasestorage.app",
  messagingSenderId: "585609971456",
  appId: "1:585609971456:web:9cf7ad6f033c8d463615e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);

setPersistence(auth, browserLocalPersistence)
     .then(() => {
      console.log('Persistence');
      page.redirect(location.pathname)
     
     })
     .catch(err => {
      console.log('Persisteence err');
      
     })

export default app