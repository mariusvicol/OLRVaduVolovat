import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC9xXcMv3DaQNi-Fu3x_huzpM7yJuJX9Qg",
  authDomain: "olrvaduvolovat.firebaseapp.com",
  projectId: "olrvaduvolovat",
  storageBucket: "olrvaduvolovat.firebasestorage.app",
  messagingSenderId: "611084880370",
  appId: "1:611084880370:web:161cb3541b8a816a45036b",
  measurementId: "G-R2PL1BXTSS"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app) 