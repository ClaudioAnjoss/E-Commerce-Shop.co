import { BrowserRouter, Route, Routes } from 'react-router'
import CartPage from './pages/cart-page'
import ChooseProduct from './pages/chose-product-page'
import Product from './pages/product-page'
import Shop from './pages/shop-page'
import Layout from './pages/layout'
import Home from './pages/home-page'
import AboutPage from './pages/about-page'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<ChooseProduct />} />
            <Route path=":id/:name" element={<Product />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
