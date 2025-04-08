import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Structure from './pages/structure'

import Home from './pages/home'
import Shop from './pages/shop'
import OnSale from './pages/on-sale'
import ServicePage from './pages/service-page'
import Arrivals from './pages/arrivals'
import Brands from './pages/brands'

import './index.css'
import Product from './pages/product'
import ChooseProduct from './pages/choose-product'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
