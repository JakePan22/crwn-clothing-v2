import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"

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

const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfomation
) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  // now with the reference, we can try to get the document snapshot
  const userDoc = await getDoc(userDocRef)

  // if the doc does not exist, then set it
  if (!userDoc.exists()) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      const newUserDoc = await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInfomation,
      })

      return newUserDoc
    } catch (err) {
      console.log("setting user data met an error:", err.message)
    }
  }

  // TODO: Check on why I am returning userDoc when it doesn't exist and it returns null in that case
  return userDoc
}

export const auth = getAuth()
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider)
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
  await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}
