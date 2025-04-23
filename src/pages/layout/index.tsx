import Footer from '@/components/footer'
import Header from '@/components/header'
import { setCartStorage } from '@/store/features/cart'
import { loadCart, saveCart } from '@/scripts/loadCartFromStorage'
import { RootState } from '@/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

export default function Layout() {
  const cart = useSelector((state: RootState) => state.cart)
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()

  console.log(
    'Olá recrutador! 👀 Que bom te ver por aqui no console haha 😄 Espero que goste do meu site. Qualquer feedback é super bem-vindo!',
  )

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
      <Toaster />
      <Footer />
    </main>
  )
}
