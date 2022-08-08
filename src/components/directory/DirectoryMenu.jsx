import "./directory-menu.styles.scss"
import DirectoryItem from "../directory-item/DirectoryItem"
import categories from "../../constants/categories"

const DirectoryMenu = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />
      })}
    </div>
  )
}

export default DirectoryMenu
