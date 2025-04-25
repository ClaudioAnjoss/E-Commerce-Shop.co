import { Link } from 'react-router'

type CategoryCardProps = {
  title: string
  image: string
  wide?: boolean
  navigation: string
}

export default function CardMenuStyle({
  title,
  image,
  wide = false,
  navigation,
}: CategoryCardProps) {
  return (
    <div
      className={`${
        wide ? 'col-span-2' : ''
      } max-h-[190px] w-full cursor-pointer overflow-hidden rounded-2xl bg-white relative`}
    >
      <Link to={navigation}>
        <span className="font-bold absolute top-5 left-5 z-10 text-black">
          {title}
        </span>
        <img
          src={image}
          alt={`${title} style category`}
          className="w-full h-full object-cover md:object-contain md:object-right"
        />
      </Link>
    </div>
  )
}
