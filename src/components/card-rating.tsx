import { IReview } from '@/interfaces/iProduct'
import { GrStatusGood } from 'react-icons/gr'
import Rating from './rating'

export default function CardRating({
  comment,
  date,
  rating,
  reviewerName,
}: IReview) {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  })
  return (
    <div className="border p-8 flex-shrink-0 flex flex-col gap-4  rounded-3xl bg-white">
      <Rating ratingValue={rating} />
      <h1 className="flex items-center gap-2 text-2xl font-bold">
        {reviewerName} <GrStatusGood size={22} color="#01AB31" />
      </h1>

      <p className="max-w-[320px] line-clamp-3">{comment}</p>
      <p>Posted on {formattedDate}</p>
    </div>
  )
}
