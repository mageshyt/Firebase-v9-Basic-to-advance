import { initializeApp } from 'firebase/app'
import React from 'react'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyCrYXw8hY0LtDVCgxUYmoNqQFsGCJibGiA',
  authDomain: 'fir-v9-tutorial-94fed.firebaseapp.com',
  projectId: 'fir-v9-tutorial-94fed',
  storageBucket: 'fir-v9-tutorial-94fed.appspot.com',
  messagingSenderId: '181089963700',
  appId: '1:181089963700:web:0e6805cd3357645798d1e1',
  measurementId: 'G-3N0GZT5B7C',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

// ! login with google
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((re) => console.log('successfully signed in with google', re))
    .catch((err) => {
      console.log(err)
    })
}

// ! logout
const logout = () => {
  signOut(auth)
    .then(() => console.log('successfully signed out'))
    .catch((err) => {
      console.log(err)
    })
}

// ! custom hook to get current user
const useAuth = () => {
  const [currentUser, currentUserSet] = React.useState(null)
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        currentUserSet(user)
      } else {
        currentUserSet(null)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return currentUser
}
export { app, auth, signInWithGoogle, logout, useAuth }
