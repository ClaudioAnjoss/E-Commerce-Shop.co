import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'

interface iRating {
  ratingValue: number
}

export default function Rating({ ratingValue }: iRating) {
  const totalStars = 5
  const fullStars = Math.floor(ratingValue)
  const hasHalfStar = ratingValue % 1 !== 0
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index}>
          <FaStar color="#FFC633" />
        </span>
      ))}

      {hasHalfStar && (
        <span>
          <FaStarHalfAlt color="#FFC633" />
        </span>
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <span key={index}>
          <FaRegStar color="#FFC633" />
        </span>
      ))}

      <span className="font-light ml-1">{ratingValue}/5</span>
    </div>
  )
}
