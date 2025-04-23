import { BrowserRouter, Route, Routes } from 'react-router'
import CartPage from './pages/cart'
import ChooseProduct from './pages/choose-product'
import Product from './pages/product'
import Shop from './pages/shop'
import Structure from './pages/structure'
import Home from './pages/home'
import AboutPage from './pages/about/aboutPage'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />}>
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
