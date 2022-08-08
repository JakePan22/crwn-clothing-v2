import ProductCard from "../product-card/ProductCard"

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles"

const CategoryPreview = ({ title, products }) => {
  const filteredProducts = products.filter((_, idx) => idx < 4)
  return (
    <>
      <CategoryPreviewContainer>
        <h2>
          <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </Preview>
      </CategoryPreviewContainer>
    </>
  )
}

export default CategoryPreview
