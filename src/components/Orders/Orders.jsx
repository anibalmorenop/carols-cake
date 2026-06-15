import Image from 'next/image'
import { orderWhatsappUrl } from '@/data/products'
import { WhatsAppIcon } from '@/components/Icons/Icons'

export default function Orders() {
  return (
    <section id="encargos" className="orders-section">
      <div className="orders-copy">
        <h2>Postres para tus momentos especiales</h2>
        <p>
          Escribenos por WhatsApp con la fecha, cantidad de personas y el postre
          que tienes en mente. Te ayudamos a elegir una opcion bonita y deliciosa.
        </p>
        <a className="button-primary" href={orderWhatsappUrl} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          Hacer pedido
        </a>
      </div>
      <div className="orders-images">
        <Image
          src="/img/publicaciones/torta-cubierta-de-chocolate-los-dulcitos-de-caro.png"
          alt="Torta cubierta de chocolate"
          width={420}
          height={420}
        />
        <Image
          src="/img/publicaciones/galletas-rellenas-los-dulcitos-de-caro.png"
          alt="Galletas rellenas"
          width={260}
          height={260}
        />
        <Image
          src="/img/publicaciones/torta-pina-cereza-los-dulcitos-de-caro.png"
          alt="Torta de pina y cereza"
          width={260}
          height={260}
        />
      </div>
    </section>
  )
}
