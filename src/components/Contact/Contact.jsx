import { InstagramIcon, WhatsAppIcon } from '@/components/Icons/Icons'
import { instagramUrl, whatsappUrl } from '@/data/products'

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div>
        <h2>Endulcemos tu proxima ocasion</h2>
        <p>Pedidos por WhatsApp y novedades en Instagram.</p>
      </div>
      <div className="contact-actions">
        <a className="contact-item" href={whatsappUrl} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          <span>+58 416 656 9643</span>
        </a>
        <a className="contact-item" href={instagramUrl} target="_blank" rel="noreferrer">
          <InstagramIcon />
          <span>los_dulcitosdecaro</span>
        </a>
      </div>
    </section>
  )
}
