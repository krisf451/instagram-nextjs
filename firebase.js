// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBc4pgXpCSZ4bOsSfAdT2tGqZkGhigvSug',
  authDomain: 'instagram-ksf.firebaseapp.com',
  projectId: 'instagram-ksf',
  storageBucket: 'instagram-ksf.appspot.com',
  messagingSenderId: '93197195777',
  appId: '1:93197195777:web:26ae0d348b3c5b81d37e00',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

export { app, db, storage }
