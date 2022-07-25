import React, { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import "./navigation.styles.scss"

import { UserContext } from "../../contexts/UserContext"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <Link className="nav-link" to="/" onClick={signOutHandler}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
