import { useContext } from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"

import { CartContext } from "../../contexts/CartContext"

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  )
}

export default CartIcon
