import { BrowserRouter, Route, Routes } from 'react-router'
import { Brands } from './components/brands'
import Arrivals from './pages/arrivals'
import CartPage from './pages/cart'
import ChooseProduct from './pages/choose-product'
import OnSale from './pages/on-sale'
import Product from './pages/product'
import ServicePage from './pages/service-page'
import Shop from './pages/shop'
import Structure from './pages/structure'
import Home from './pages/home'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<ChooseProduct />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/on-sale" element={<OnSale />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
