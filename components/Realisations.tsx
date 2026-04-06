'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const pieces = [
  {
    id: 1,
    title: 'Collier de Perles',
    category: 'Création',
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
  },
  {
    id: 2,
    title: 'Pendentif Art Déco',
    category: 'Restauration',
    src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  },
  {
    id: 3,
    title: 'Bracelet Serti',
    category: 'Création',
    src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
  },
  {
    id: 4,
    title: 'Boucles d\'Oreilles',
    category: 'Création',
    src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    id: 5,
    title: 'Bague Diamant',
    category: 'Création',
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
  },
  {
    id: 6,
    title: 'Collection Sautoirs',
    category: 'Gravure',
    src: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80',
  },
]

export default function Realisations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="realisations" className="bg-leroux-bg py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-leroux-gold mb-4">
            Nos créations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-leroux-ivory">
            Réalisations
          </h2>
          <div className="w-16 h-px bg-leroux-gold mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-leroux-bg-light"
            >
              <Image
                src={piece.src}
                alt={piece.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-leroux-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <p className="font-sans text-xs tracking-widest uppercase text-leroux-gold mb-2">
                  {piece.category}
                </p>
                <p className="font-serif text-xl text-leroux-ivory">
                  {piece.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
