import { useContext, useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/ProductCard"
import { CategoriesContext } from "../../contexts/CategoriesContext"

import "./category-styles.scss"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </div>
    </Fragment>
  )
}

export default Category
