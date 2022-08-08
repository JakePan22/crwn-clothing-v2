import ProductCard from "../product-card/ProductCard"

import "./category-preview.styles.scss"

const CategoryPreview = ({ title, products }) => {
  const filteredProducts = products.filter((_, idx) => idx < 4)
  return (
    <>
      <div className="category-preview-container">
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
        <div className="preview">
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </>
  )
}

export default CategoryPreview
