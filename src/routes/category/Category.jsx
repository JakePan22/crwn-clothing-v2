import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/ProductCard"
import { CategoriesContext } from "../../contexts/CategoriesContext"

import "./category-styles.scss"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap)

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (
    <div className="category-container">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
    </div>
  )
}

export default Category
