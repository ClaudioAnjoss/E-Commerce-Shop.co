import Cart from '@/components/cart-items/cart'
import OrderCart from '@/components/cart-items/order-cart'
import Container from '@/components/container'
import Title from '@/components/title'

export default function CartPage() {
  return (
    <Container classname="flex flex-col gap-4 p-4">
      <Title>Your cart</Title>
      <section className="grid gap-4 md:grid-cols-[2fr_1fr] justify-center">
        <Cart />
        <OrderCart />
      </section>
    </Container>
  )
}
