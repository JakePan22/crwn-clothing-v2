import React, { useContext } from "react"
import { Link, Outlet } from "react-router-dom"

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

import { UserContext } from "../../contexts/UserContext"
import { CartContext } from "../../contexts/CartContext"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart-dropdown/CartDropdown"

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink to="/" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
