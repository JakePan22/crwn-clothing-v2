import { useContext, useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/ProductCard"
import { CategoriesContext } from "../../contexts/CategoriesContext"

import { CategoryTitle, CategoryContainer } from "./category-styles"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </CategoryContainer>
    </Fragment>
  )
}

export default Category
