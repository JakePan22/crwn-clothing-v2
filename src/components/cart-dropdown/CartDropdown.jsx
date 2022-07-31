import Button from "../button/Button"
import "./cart-dropdown.styles.scss"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import CartItem from "../cart-item/CartItem"

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext)

  const navigate = useNavigate()

  const handleCheckoutClick = () => {
    setIsCartOpen(false)
    navigate("/checkout")
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={handleCheckoutClick}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
