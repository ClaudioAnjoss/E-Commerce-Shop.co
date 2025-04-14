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

        <div className="flex justify-between px-4">
          <Title>OUR HAPPY CUSTOMERS</Title>
          <span className="flex">
            <button className="p-2 transition-all duration-500 cursor-pointer hover:bg-gray-200 rounded-full">
              <MoveLeft className="hover:scale-110 transition-all" />
            </button>
            <button className="p-2 transition-all duration-500 cursor-pointer hover:bg-gray-200 rounded-full">
              <MoveRight className="hover:scale-110 transition-all" />
            </button>
          </span>
        </div>
      </Container>
      <div className="relative overflow-hidden my-10">
        <div className="hidden md:flex pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white/80 to-transparent backdrop-blur-[2px]" />
        <div className="hidden md:flex pointer-events-none absolute right-0 top-0 h-full w-42 z-10 bg-gradient-to-l from-white/80 to-transparent backdrop-blur-[2px]" />
        <CardComent />
      </div>
    </section>
  )
}
