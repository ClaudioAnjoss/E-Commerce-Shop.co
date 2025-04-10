import CardRating from '@/components/card-rating'
import ClothingList from '@/components/clothing-list'
import ProductDetails from '@/components/product-details'
import { Button } from '@/components/ui/shadcn/button'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/shadcn/tabs'
import { iProduct } from '@/interfaces/iProduct'
import { getById } from '@/services/get-by-id'
import { SlidersVertical } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Product() {
  const [product, setProduct] = useState<iProduct>()
  const { id } = useParams()

  console.log(product)

  useEffect(() => {
    async function fetchData() {
      const res = await getById(Number(id))
      setProduct(res)
    }

    fetchData()
  }, [id])

  return (
    <>
      {product && <ProductDetails {...product} />}

      <Tabs defaultValue="rating" className="w-full">
        <TabsList className="w-full flex justify-between bg-transparent">
          <TabsTrigger
            className="flex items-center justify-center w-full bg-transparent active:bg-none"
            value="product"
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            className="flex items-center justify-center  w-full"
            value="rating"
          >
            Rating & Reviews
          </TabsTrigger>
          <TabsTrigger
            className="flex items-center justify-center  w-full"
            value="faq"
          >
            FAQs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="product" className="space-y-4 py-4">
          <h2 className="text-xl font-semibold">Product Description</h2>
          <p className="text-gray-600 leading-relaxed">
            Elevate your style with our One Life Graphic T-shirt, crafted from
            premium cotton fabric for superior comfort. Designed to be both
            breathable and durable, this shirt is perfect for everyday wear,
            lounging, or stepping out in confidence. The bold graphic print adds
            a touch of individuality and pairs effortlessly with jeans or
            shorts.
          </p>

          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>100% Organic Cotton</li>
            <li>Pre-shrunk Fabric</li>
            <li>Tag-free Comfort</li>
            <li>Available in multiple colors</li>
            <li>Unisex fit for all body types</li>
          </ul>

          <h2 className="text-xl font-semibold">Material & Care</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Machine wash cold with like colors</li>
            <li>Tumble dry low or hang to dry</li>
            <li>Do not bleach</li>
            <li>Cool iron if needed (avoid graphic)</li>
          </ul>
        </TabsContent>
        <TabsContent value="rating" className=" flex flex-col gap-4 ">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-[20px]">
              All Reviews <span>({product?.reviews.length})</span>
            </h1>
            <Button
              className="rounded-full bg-gray-100 border-none"
              variant={'outline'}
              size={'icon'}
            >
              <SlidersVertical />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 items-center gap-4 max-h-[92vh] overflow-auto">
            {product?.reviews.map((data, index) => (
              <CardRating key={index} {...data} />
            ))}
          </div>
          <Button
            className="max-w-[200px] mx-auto p-6 rounded-4xl"
            variant={'outline'}
          >
            Load More Reviews
          </Button>
        </TabsContent>
        <TabsContent value="faq" className="space-y-6 py-4">
          <div>
            <h3 className="font-semibold text-lg">What sizes are available?</h3>
            <p className="text-gray-600">
              Our T-shirts are available in sizes ranging from S to XXL. Refer
              to the size guide for exact measurements to find your perfect fit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Can I return the product?</h3>
            <p className="text-gray-600">
              Yes, we offer a 30-day return policy. Items must be unused, in
              original packaging, and with tags attached.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Is the material eco-friendly?
            </h3>
            <p className="text-gray-600">
              Absolutely! We use 100% organic cotton certified by global
              standards to ensure sustainability.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              How should I wash this T-shirt?
            </h3>
            <p className="text-gray-600">
              Machine wash cold with like colors. Tumble dry on low or hang dry.
              Avoid bleach and do not iron directly on the print.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <section className="grid">
        <h1 className="text-[32px] font-integral-bold">You might also like</h1>
        <div>
          <ClothingList category="sports-accessories" />
        </div>
      </section>
    </>
  )
}
