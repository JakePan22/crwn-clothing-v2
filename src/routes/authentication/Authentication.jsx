import SignUp from "../../components/sign-up-form/SignUp"
import SignIn from "../../components/sign-in-form/SignIn"

import { AuthenticationContainer } from "./authentication.styles.jsx"

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  )
}

export default Authentication
