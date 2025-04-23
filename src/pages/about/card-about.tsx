import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface iCardAbout {
  icon: ReactNode
  title: string
  titleLink?: string
  description: string
  link?: string
}

export default function CardAbout({
  icon,
  title,
  titleLink,
  description,
  link,
}: iCardAbout) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm underline hover:text-blue-800"
        >
          {titleLink}
        </a>
      )}
    </motion.div>
  )
}
