import CardMenuStyle from './card-menu-style'
import linksNavgtions from '@/database/links-navigation-menu-style.json'

export default function MenuStyle() {
  return (
    <section className="bg-[#F2F0F1] rounded-3xl px-4 mx-4 py-6 flex flex-col gap-4">
      <h2 className="text-center md:text-start text-2xl font-bold">
        BROWSE BY dress STYLE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {linksNavgtions.map((card, index) => (
          <CardMenuStyle
            key={card.id}
            title={card.name}
            image={card.image}
            wide={index === 1 || index === 2}
            navigation={`/shop?tag=${card.url.toLowerCase()}`}
          />
        ))}
      </div>
    </section>
  )
}
