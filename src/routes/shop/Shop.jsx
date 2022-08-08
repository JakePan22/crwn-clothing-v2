import { useContext, Fragment } from "react"
import { CategoriesContext } from "../../contexts/CategoriesContext"
import ProductCard from "../../components/product-card/ProductCard"

import "./shop-styles.scss"

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => {
                return <ProductCard key={product.id} product={product} />
              })}
            </div>
          </Fragment>
        )
      })}
    </>
  )
}

export default Shop
