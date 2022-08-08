import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles"

const DirectoryItem = ({ category }) => {
  const { title, id, imageUrl } = category
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
