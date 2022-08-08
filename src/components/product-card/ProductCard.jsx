import Button from "../button/Button"
import {
  ProductCardContainer,
  Name,
  Price,
  Footer,
} from "./product-card.styles.jsx"
import { CartContext } from "../../contexts/CartContext"

import { useContext } from "react"

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product

  const { addItemToCart } = useContext(CartContext)

  const handleButtonClick = () => {
    addItemToCart(product)
  }

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={"inverted"} onClick={handleButtonClick}>
        ADD TO CART
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
