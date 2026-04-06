export default function Footer() {
  const navLinks = ['Savoir-faire', 'Réalisations', "L'Atelier", 'Contact']

  return (
    <footer className="bg-leroux-bg border-t border-leroux-gold/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-xl text-leroux-ivory tracking-widest uppercase mb-4">
              Maison <span className="text-leroux-gold">Leroux</span>
            </p>
            <p className="font-sans text-sm text-leroux-ivory-muted font-light leading-relaxed max-w-xs">
              Joaillerie artisanale parisienne depuis 1987. Chaque pièce est
              unique.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-leroux-gold mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace("l'", '').trim()}`}
                    className="font-sans text-sm text-leroux-ivory-muted hover:text-leroux-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-leroux-gold mb-6">
              Atelier
            </p>
            <address className="not-italic font-sans text-sm text-leroux-ivory-muted font-light space-y-2">
              <p>14 rue de Bretagne</p>
              <p>75003 Paris</p>
              <p className="pt-2">contact@maisonleroux.fr</p>
            </address>
          </div>
        </div>

        <div className="border-t border-leroux-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-leroux-ivory/30">
            © {new Date().getFullYear()} Maison Leroux. Tous droits réservés.
          </p>
          <a
            href="https://meme-dev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-leroux-ivory/20 hover:text-leroux-gold/50 transition-colors"
          >
            Site réalisé par meme-dev.com
          </a>
        </div>
      </div>
    </footer>
  )
}
