import Footer from '@/components/footer'
import Header from '@/components/header'
import { Outlet } from 'react-router'

export default function Structure() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
