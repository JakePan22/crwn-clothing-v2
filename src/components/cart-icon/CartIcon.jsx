import { useContext } from "react"
import {
  CartIconContainer,
  ShoppingCartIcon,
  ItemCount,
} from "./cart-icon.styles.jsx"

import { CartContext } from "../../contexts/CartContext"

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartNumber } = useContext(CartContext)

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingCartIcon />
      <ItemCount>{cartNumber}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
