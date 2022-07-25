import { useState, createContext, useEffect } from "react"
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user)
      }

      setCurrentUser(user)
    })
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
