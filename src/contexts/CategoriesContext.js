import { useState, createContext, useEffect } from "react"
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js"
import SHOP_DATA from "../constants/shop-data.js"

export const CategoriesContext = createContext({
  categoriesMap: [],
  setCategoriesMap: () => null,
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoriesMap)
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap, setCategoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
