import { useState, useContext } from "react"

import FormInput from "../form-input/FormInput.jsx"
import Button from "../button/Button.jsx"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils"
import { UserContext } from "../../contexts/UserContext.js"

import "./sign-in-form.styles.scss"

const signInDefault = {
  email: "",
  password: "",
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(signInDefault)
  const { email, password } = formFields

  const { setCurrentUser } = useContext(UserContext)

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
    setCurrentUser(user)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      setFormFields(signInDefault)

      setCurrentUser(user)
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("No such user exists. Please sign up an account with us")
          break

        case "auth/wrong-password":
          alert("Incorrect password for email")
          break

        default:
          console.log("Failed to sign in user", error)
      }
    }
  }

  return (
    <>
      <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <div>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
            />

            <FormInput
              label="Password"
              required
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
            />

            <div className="buttons-container">
              <Button type="submit">Submit</Button>
              <Button type="button" buttonType="google" onClick={logGoogleUser}>
                Google sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
