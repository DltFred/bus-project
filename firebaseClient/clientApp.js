import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyBeMiD_wXoin78IJkSTh-RlfxwLwH7uQd8',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'next-app-crud-bus.firebaseapp.com',
  projectId: process.env.FIREBASE_PROJECT_ID || 'next-app-crud-bus',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'next-app-crud-bus.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '445764843533',
  appId: process.env.FIREBASE_APP_ID || '1:445764843533:web:52eb4c2777ff2938903d44'
}
initializeApp(firebaseConfig)

const auth = getAuth()

export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential.user)
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    return { errorCode, errorMessage }
  })

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential.user)
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    return { errorCode, errorMessage }
  })

export const logOut = () => signOut(auth)
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    return { errorCode, errorMessage }
  })

export const observer = (callback) => onAuthStateChanged(auth, callback)
