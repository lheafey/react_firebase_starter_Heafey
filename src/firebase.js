import { getStorage, ref } from "firebase/storage";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWBK5MdNZwhIEr3bWvXESnNfRXYsT9ezM",
  authDomain: "fir-heafey.firebaseapp.com",
  projectId: "fir-heafey",
  storageBucket: "fir-heafey.appspot.com",
  messagingSenderId: "336209966882",
  appId: "1:336209966882:web:6eba28931c286a6dd0977b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

storageBucket: gs://fir-heafey.appspot.com