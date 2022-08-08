import { DirectoryContainer } from "./directory-menu.styles"
import DirectoryItem from "../directory-item/DirectoryItem"
import categories from "../../constants/categories"

const DirectoryMenu = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />
      })}
    </DirectoryContainer>
  )
}

export default DirectoryMenu
