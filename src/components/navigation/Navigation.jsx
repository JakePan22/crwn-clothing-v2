import React, { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import "./navigation.styles.scss"

import { UserContext } from "../../contexts/UserContext"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

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
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
