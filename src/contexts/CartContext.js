import { useState, createContext, useEffect } from "react"

const addCartItem = (cartItems, productToAdd) => {
  // if found then add increment to quantity
  // else add product and a quantity of 1

  for (const item of cartItems) {
    if (item.id === productToAdd.id) {
      item.quantity++

      return [...cartItems]
    }
  }

  const newProduct = { ...productToAdd, quantity: 1 }
  const newCartItems = [...cartItems, newProduct]

  return newCartItems
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartNumber: 0,
  setCartNumber: () => null,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartNumber, setCartNumber] = useState(0)

  useEffect(() => {
    // when cartItems is updated, then update the shopping cart count to the sum of quantity in items
    const newCartNumber = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    )

    setCartNumber(newCartNumber)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartNumber,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// i need a new function to create a new array of the cart items
// then i add it into my setter function
