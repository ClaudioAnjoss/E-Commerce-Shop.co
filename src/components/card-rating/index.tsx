import { Star, Check } from 'lucide-react'

export default function CardRating() {
  return (
    <div className="border p-8 flex-shrink-0 flex flex-col gap-4  rounded-3xl bg-white">
      <span className="flex">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>

      <h1 className="text-2xl font-bold">
        Sarah M. <Check />
      </h1>

      <p className="md:max-w-80">
        &quot;I&apos;m blown away by the quality and style of the clothes I
        received from Shop.co. From casual wear to elegant dresses, every piece
        I&apos;ve bought has exceeded my expectations.”
      </p>
    </div>
  )
}
