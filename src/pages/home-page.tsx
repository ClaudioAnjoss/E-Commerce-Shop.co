import { Separator } from '@/components/ui/shadcn/separator'
import { Brands } from '@/components/brands'
import ClothingList from '@/components/clothing-list/clothing-list'
import BannerHome from '../components/home-components/banner-home'

import CardComent from '@/components/comments'
import Container from '@/components/container'
import MenuStyle from '@/components/home-components/menu-style'

export default function Home() {
  const randomCategory = [
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'sports-accessories',
    'sunglasses',
    'womens-bags',
    'womens-dresses',
    'womens-jewellery',
    'womens-shoes',
    'womens-watches',
  ].sort(() => 0.5 - Math.random())[0]

  return (
    <section>
      <BannerHome />

      <Brands />

      <Container>
        <ClothingList title="tops" category="tops" button="View All" />

        <Separator className="container mx-auto" />

        <ClothingList
          title={randomCategory}
          category={randomCategory}
          button="View All"
        />

        <MenuStyle />
      </Container>
      <CardComent />
    </section>
  )
}
