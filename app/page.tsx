import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SavoirFaire from '@/components/SavoirFaire'
import Realisations from '@/components/Realisations'
import Atelier from '@/components/Atelier'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SavoirFaire />
      <Realisations />
      <Atelier />
      <Contact />
      <Footer />
    </main>
  )
}
