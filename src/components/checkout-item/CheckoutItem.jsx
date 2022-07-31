import "./checkout-item.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { addItemToCart } = useContext(CartContext)

  const handleIncrementClick = () => {
    addItemToCart(cartItem)
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrementClick}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  )
}

export default CheckoutItem

// TODO: Click on arrow removes quantity
// TODO: If removing hits 0 quantity, remove item
// TODO: Click on remove icon removes item completely
