import { cn } from '@/lib/utils'
import { Marquee } from '@/components/ui/magic-ui/marquee'

const reviews = [
  {
    img: './images/brands/calvin-klein.png',
  },
  {
    img: './images/brands/gucci.png',
  },
  {
    img: './images/brands/prada.png',
  },
  {
    img: './images/brands/versace.png',
  },
  {
    img: './images/brands/zara.png',
  },
  {
    img: './images/brands/calvin-klein.png',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-6',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="">
        <img alt="" src={img} />
      </div>
    </figure>
  )
}

export function Brands() {
  return (
    <div className="bg-black relative flex w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  )
}
