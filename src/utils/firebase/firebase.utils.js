import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBwVGN05qhrAgtX2VelQ5EYagzk3kprPjM",
  authDomain: "crwn-clothing-db-4ccbc.firebaseapp.com",
  projectId: "crwn-clothing-db-4ccbc",
  storageBucket: "crwn-clothing-db-4ccbc.appspot.com",
  messagingSenderId: "1024913986765",
  appId: "1:1024913986765:web:04d31ec5f8e9d87c400584",
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider)
}
