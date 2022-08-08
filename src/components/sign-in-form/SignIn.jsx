import { useState } from "react"

import FormInput from "../form-input/FormInput.jsx"
import Button from "../button/Button.jsx"
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils"

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles"

const signInDefault = {
  email: "",
  password: "",
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(signInDefault)
  const { email, password } = formFields

  const logGoogleUser = async () => {
    await signInWithGooglePopup()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      setFormFields(signInDefault)
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
      <SignInContainer>
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

            <ButtonsContainer>
              <Button type="submit">Submit</Button>
              <Button type="button" buttonType="google" onClick={logGoogleUser}>
                Google sign in
              </Button>
            </ButtonsContainer>
          </form>
        </div>
      </SignInContainer>
    </>
  )
}

export default SignIn
