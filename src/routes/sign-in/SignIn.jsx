import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"

import SignUp from "../../components/sign-up-form/SignUp"

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()

    const userDoc = await createUserDocumentFromAuth(user)

    console.log(userDoc.data())
  }
  return (
    <>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUp />
    </>
  )
}

export default SignIn
