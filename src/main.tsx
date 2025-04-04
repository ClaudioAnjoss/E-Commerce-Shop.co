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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/on-sale" element={<OnSale />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/brands" element={<Brands />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
