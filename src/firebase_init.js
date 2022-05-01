import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCkwjycJPodDoMpBtvgBlpAc-IcGJwzlSw",
  authDomain: "car-house-c5294.firebaseapp.com",
  projectId: "car-house-c5294",
  storageBucket: "car-house-c5294.appspot.com",
  messagingSenderId: "82339134375",
  appId: "1:82339134375:web:2080561491952daf475482"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth