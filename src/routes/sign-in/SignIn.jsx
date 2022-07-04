import React from "react"
import {
  signInWithGooglePopup,
  getUserFromAuth,
} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()

    const userDoc = await getUserFromAuth(user)

    console.log(userDoc.data())
  }
  return (
    <>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  )
}

export default SignIn
