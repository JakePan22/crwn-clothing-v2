import Button from "../button/Button"
import "./product-card.styles.scss"
import { CartContext } from "../../contexts/CartContext"

import { useContext } from "react"

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product

  const { addItemToCart } = useContext(CartContext)

  const handleButtonClick = () => {
    addItemToCart(product)
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={handleButtonClick}>
        ADD TO CART
      </Button>
    </div>
  )
}

export default ProductCard
