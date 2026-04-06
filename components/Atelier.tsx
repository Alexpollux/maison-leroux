'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '39+', label: "Années d'expérience" },
  { value: '1 200', label: 'Pièces créées' },
  { value: '100%', label: 'Sur-mesure' },
]

export default function Atelier() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="atelier" className="bg-leroux-bg-section py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-0 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] lg:h-[650px] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80"
            alt="L'atelier Maison Leroux"
            fill
            className="object-cover"
          />
          <div className="absolute inset-4 border border-leroux-gold/30 pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:pl-20 pt-12 lg:pt-0"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-leroux-gold mb-4">
            Notre histoire
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-leroux-ivory mb-6 leading-tight">
            L'Atelier
          </h2>
          <div className="w-16 h-px bg-leroux-gold mb-10" />

          <div className="space-y-6 font-sans text-leroux-ivory-muted font-light leading-relaxed">
            <p>
              Au cœur du Marais, dans un atelier dont les murs gardent la mémoire
              de quatre décennies de création, Henri Leroux perpétue un art
              transmis de maître en apprenti.
            </p>
            <p>
              Chaque pièce naît d'un dialogue. Une rencontre, une histoire, une
              intention — traduits en or, en argent, en pierres précieuses
              choisies avec soin sur les marchés de Genève et d'Anvers.
            </p>
            <p>
              Maison Leroux ne produit pas en série. Nous façonnons des objets
              uniques, destinés à traverser les générations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-leroux-gold/20 pt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-leroux-gold mb-1">
                  {stat.value}
                </p>
                <p className="font-sans text-xs md:text-sm text-leroux-ivory-muted leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
