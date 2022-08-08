import Button from "../button/Button"
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles.jsx"
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
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartItems>
      <Button onClick={handleCheckoutClick}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
