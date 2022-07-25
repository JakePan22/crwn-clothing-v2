import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductContext"

const Shop = ({}) => {
  const { products } = useContext(ProductContext)

  return (
    <>
      {products.map(({ id, name }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        )
      })}
    </>
  )
}

export default Shop
