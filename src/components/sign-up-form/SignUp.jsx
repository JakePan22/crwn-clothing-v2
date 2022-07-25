import { useState, useContext } from "react"

import FormInput from "../form-input/FormInput.jsx"
import Button from "../button/Button.jsx"

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"
import { UserContext } from "../../contexts/UserContext.js"

import "./sign-up-form.styles.scss"

const signUpDefault = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(signUpDefault)
  const { displayName, email, password, confirmPassword } = formFields

  const { setCurrentUser } = useContext(UserContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // check if password and confirmPassword is the same
    if (password !== confirmPassword) {
      return console.error("Passwords must be equal")
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)

      await createUserDocumentFromAuth(user, { displayName })
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("User email already in use", error)
      } else {
        console.log("User creation encountered an error", error)
      }
    }

    setFormFields(signUpDefault)
  }

  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>

        <div>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Display Name"
              required
              name="displayName"
              onChange={handleChange}
              value={displayName}
            />

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

            <FormInput
              label="Confirm Password"
              required
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
            />
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
