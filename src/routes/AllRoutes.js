import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ProductsList from "../pages/Products/ProductsList"
import ProductDetail from "../pages/ProductDetail"
export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>

    </>
  )
}
