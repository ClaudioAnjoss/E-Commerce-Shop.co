import { Separator } from '@/components/ui/shadcn/separator'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Brands } from '@/components/brands'
import ClothingList from '@/components/clothing-list'
import Title from '@/components/title'
import BannerHome from './banner-home'
import category1 from '@/assets/categorys/image-1.png'
import category2 from '@/assets/categorys/image-2.png'
import category3 from '@/assets/categorys/image-3.png'
import category4 from '@/assets/categorys/image-4.png'
import CategoryCard from './category-card'
import CardComent from '@/components/comments'
import Container from '@/components/container'

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

        <section className="bg-[#F2F0F1] rounded-3xl px-4 mx-4 py-6 flex flex-col gap-4">
          <h2 className="text-center md:text-start text-2xl font-bold">
            BROWSE BY dress STYLE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <CategoryCard title="Casual" image={category1} />
            <CategoryCard title="Formal" image={category2} wide />
            <CategoryCard title="Party" image={category3} wide />
            <CategoryCard title="Gym" image={category4} />
          </div>
        </section>
      </Container>
      <CardComent />
    </section>
  )
}
