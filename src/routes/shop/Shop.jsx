import { useContext } from "react"
import { CategoriesContext } from "../../contexts/CategoriesContext"

import "./shop-styles.scss"
import CategoryPreview from "../../components/category-preview/CategoryPreview"

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        )
      })}
    </div>
  )
}

export default Shop
