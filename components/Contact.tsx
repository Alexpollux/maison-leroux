'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const inputClass =
  'w-full bg-transparent border-b border-leroux-gold/30 focus:border-leroux-gold outline-none py-3 font-sans text-sm md:text-base text-leroux-ivory placeholder-leroux-ivory/30 transition-colors duration-300'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-leroux-bg py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-leroux-gold mb-4">
            Nous écrire
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-leroux-ivory mb-6">
            Contact
          </h2>
          <div className="w-16 h-px bg-leroux-gold mb-10" />

          <div className="space-y-8 font-sans text-leroux-ivory-muted font-light">
            <div>
              <p className="text-xs tracking-widest uppercase text-leroux-gold mb-2">
                Atelier
              </p>
              <p>14 rue de Bretagne, 75003 Paris</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-leroux-gold mb-2">
                Horaires
              </p>
              <p>Mardi – Samedi : 10h – 19h</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-leroux-gold mb-2">
                Email
              </p>
              <p>contact@maisonleroux.fr</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Votre nom"
            className={inputClass}
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Votre adresse email"
            className={inputClass}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Votre message"
            rows={5}
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-10 py-4 border border-leroux-gold text-leroux-gold font-sans text-sm tracking-widest uppercase hover:bg-leroux-gold hover:text-leroux-bg transition-all duration-300 disabled:opacity-50"
          >
            {status === 'loading' ? 'Envoi...' : 'Envoyer'}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-sans text-sm text-leroux-gold"
            >
              Message envoyé. Nous vous répondrons sous 48h.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-sans text-sm text-red-400"
            >
              Une erreur est survenue. Veuillez réessayer.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
