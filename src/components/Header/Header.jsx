import Image from 'next/image'
import { whatsappUrl } from '@/data/products'
import { WhatsAppIcon } from '@/components/Icons/Icons'

const navLinks = [
  { href: '#productos', label: 'Productos' },
  { href: '#encargos', label: 'Por encargo' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  return (
    <header className="site-header" aria-label="Navegacion principal">
      <a className="brand-link" href="#inicio" aria-label="Ir al inicio">
        <Image
          className="brand-logo"
          src="/img/logo/los-dulcitos-de-caro-logo-boutique.png"
          alt="Los Dulcitos de Caro"
          width={210}
          height={78}
          priority
        />
      </a>

      <nav className="nav-links" aria-label="Secciones">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        <WhatsAppIcon />
        <span>Pedir por WhatsApp</span>
      </a>
    </header>
  )
}
