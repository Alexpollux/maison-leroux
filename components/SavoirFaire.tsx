'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Création sur-mesure',
    description:
      "De l'esquisse à la pièce finale, chaque bijou est imaginé en collaboration avec vous. Nos orfèvres donnent vie à vos idées avec des matériaux d'exception.",
  },
  {
    number: '02',
    title: 'Restauration',
    description:
      'Vos bijoux anciens méritent une seconde vie. Notre atelier prend soin de chaque pièce avec le même respect que lors de sa création originelle.',
  },
  {
    number: '03',
    title: 'Gravure & Personnalisation',
    description:
      'Une date, des initiales, un message secret. La gravure à la main transforme un bijou en souvenir impérissable.',
  },
]

export default function SavoirFaire() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="savoir-faire" className="bg-leroux-bg-section py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-leroux-gold mb-4">
            Notre expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-leroux-ivory">
            Savoir-faire
          </h2>
          <div className="w-16 h-px bg-leroux-gold mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
              className="group"
            >
              <span className="font-serif text-6xl text-leroux-gold/20 group-hover:text-leroux-gold/40 transition-colors duration-500 block mb-6">
                {service.number}
              </span>
              <h3 className="font-serif text-2xl text-leroux-ivory mb-4">
                {service.title}
              </h3>
              <div className="w-8 h-px bg-leroux-gold mb-6 group-hover:w-16 transition-all duration-500" />
              <p className="font-sans text-leroux-ivory-muted font-light leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
