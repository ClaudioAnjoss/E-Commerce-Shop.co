type CategoryCardProps = {
  title: string
  image: string
  wide?: boolean
}

export default function CategoryCard({
  title,
  image,
  wide = false,
}: CategoryCardProps) {
  return (
    <div
      className={`${
        wide ? 'col-span-2' : ''
      } max-h-[190px] w-full cursor-pointer overflow-hidden rounded-2xl bg-white relative`}
    >
      <span className="font-bold absolute top-5 left-5 z-10 text-black">
        {title}
      </span>
      <img
        src={image}
        alt={`${title} style category`}
        className="w-full h-full object-cover md:object-contain md:object-right"
      />
    </div>
  )
}
