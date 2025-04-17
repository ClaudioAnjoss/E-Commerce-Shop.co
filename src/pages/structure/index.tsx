import Footer from '@/components/footer'
import Header from '@/components/header'
import { setCartStorage } from '@/features/cart'
import { loadCart, saveCart } from '@/scripts/loadCartFromStorage'
import { RootState } from '@/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'

export default function Structure() {
  const cart = useSelector((state: RootState) => state.cart)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const storedCart = loadCart()
    dispatch(setCartStorage(storedCart))
    setLoaded(true)
  }, [dispatch])

  useEffect(() => {
    if (loaded) {
      saveCart(cart)
    }
  }, [cart, loaded])

  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
