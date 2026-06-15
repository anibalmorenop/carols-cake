import Image from 'next/image'
import { InstagramIcon, WhatsAppIcon } from '@/components/Icons/Icons'
import { instagramUrl, whatsappUrl } from '@/data/products'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <Image
          className="hero-logo"
          src="/img/logo/los-dulcitos-de-caro-logo-boutique.png"
          alt="Los Dulcitos de Caro"
          width={360}
          height={360}
          priority
        />
        <h1>Tortas y postres caseros por encargo</h1>
        <p>
          Hechos con amor por Carolina: dulces cuidados, bonitos y listos para
          compartir en cumpleaños, reuniones o antojos especiales.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Pedir por WhatsApp
          </a>
          <a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon />
            los_dulcitosdecaro
          </a>
        </div>
      </div>

      <div className="hero-gallery" aria-label="Postres destacados">
        <Image
          className="hero-main"
          src="/img/publicaciones/torta-matilda-los-dulcitos-de-caro.png"
          alt="Torta Matilda"
          width={560}
          height={560}
          priority
        />
        <Image
          className="hero-side top"
          src="/img/publicaciones/brookies-los-dulcitos-de-caro.png"
          alt="Brookies"
          width={260}
          height={260}
        />
        <Image
          className="hero-side bottom"
          src="/img/publicaciones/cafecitos-sopresa-los-dulcitos-de-caro.png"
          alt="Cafecitos Sopresa"
          width={260}
          height={260}
        />
      </div>
    </section>
  )
}
