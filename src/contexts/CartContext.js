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

const removeProduct = (cartItems, productToRemove) => {
  const modifiedCartItems = cartItems.filter(
    (item) => !(item.id === productToRemove.id)
  )

  return modifiedCartItems
}

const removeCartItem = (cartItems, productToRemove) => {
  // if current quantity > 1, reduce quantity
  // else remove product

  for (const item of cartItems) {
    if (item.id === productToRemove.id) {
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1
        return [...cartItems]
      }

      const newCartItems = removeProduct(cartItems, productToRemove)
      return newCartItems
    }
  }
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartNumber: 0,
  setCartNumber: () => null,
  cartAmount: 0,
  setCartAmount: () => null,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartNumber, setCartNumber] = useState(0)
  const [cartAmount, setCartAmount] = useState(0)

  useEffect(() => {
    // when cartItems is updated, then update the shopping cart count to the sum of quantity in items
    const newCartNumber = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    )
    setCartNumber(newCartNumber)
  }, [cartItems])

  useEffect(() => {
    // when cartItems is updated, then update the shopping cart amount
    const newCartAmount = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )
    setCartAmount(newCartAmount)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const removeProductFromCart = (productToRemove) => {
    setCartItems(removeProduct(cartItems, productToRemove))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartNumber,
    removeItemFromCart,
    removeProductFromCart,
    cartAmount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
