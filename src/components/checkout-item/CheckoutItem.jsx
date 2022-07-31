import "./checkout-item.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { addItemToCart, removeItemFromCart, removeProductFromCart } =
    useContext(CartContext)

  const handleIncrementClick = () => {
    addItemToCart(cartItem)
  }

  const handleDecrementClick = () => {
    removeItemFromCart(cartItem)
  }

  const handleRemovalClick = () => {
    removeProductFromCart(cartItem)
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrementClick}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrementClick}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleRemovalClick}>
        &#10005;
      </span>
    </div>
  )
}

export default CheckoutItem
