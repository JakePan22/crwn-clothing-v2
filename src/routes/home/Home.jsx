import { Routes, Route } from "react-router-dom"
import React from "react"

import DirectoryMenu from "../../components/directory/DirectoryMenu"
import Navigation from "../../components/navigation/Navigation"
import Authentication from "../authentication/Authentication"
import Shop from "../shop/Shop"
import Checkout from "../checkout/Checkout"

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<DirectoryMenu />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}

export default Home
