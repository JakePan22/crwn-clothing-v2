import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles"
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
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleDecrementClick}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleIncrementClick}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={handleRemovalClick}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
