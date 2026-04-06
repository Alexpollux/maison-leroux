'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-leroux-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-leroux-bg pointer-events-none" />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-12 right-12 h-px bg-leroux-gold/20 origin-left"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-sans text-xs tracking-[0.4em] uppercase text-leroux-gold mb-6"
        >
          Paris · Depuis 1987
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-leroux-ivory leading-tight mb-8"
        >
          L'Art de la
          <br />
          <em className="text-leroux-gold not-italic">Joaillerie</em>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-sans text-base md:text-lg text-leroux-ivory-muted font-light max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Création sur-mesure, restauration et gravure. Chaque pièce est une
          œuvre façonnée à la main dans notre atelier du Marais.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#atelier"
            className="inline-block px-10 py-4 border border-leroux-gold text-leroux-gold font-sans text-sm tracking-widest uppercase hover:bg-leroux-gold hover:text-leroux-bg transition-all duration-300"
          >
            Découvrir l'atelier
          </a>
          <a
            href="#contact"
            className="inline-block px-10 py-4 font-sans text-sm tracking-widest uppercase text-leroux-ivory-muted hover:text-leroux-ivory transition-colors duration-300"
          >
            Prendre contact
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ delay: scrolled ? 0 : 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-leroux-ivory/30">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-leroux-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
