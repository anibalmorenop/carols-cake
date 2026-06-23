import { CakeIcon, GiftIcon, HeartIcon } from '@/components/Icons/Icons'

const items = [
  {
    title: 'Hechos con amor',
    text: 'Cada postre se prepara artesanalmente por Carolina.',
    icon: HeartIcon,
  },
  {
    title: 'Para compartir',
    text: 'Detalles dulces para regalar, celebrar o consentirse.',
    icon: GiftIcon,
  },
  {
    title: 'Por encargo',
    text: 'Cuentanos que necesitas y para que fecha lo quieres.',
    icon: CakeIcon,
  },
]

export default function PromiseBand() {
  return (
    <section className="promise-band" aria-label="Promesa de marca">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <article key={item.title}>
            <span className="icon-badge">
              <Icon />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        )
      })}
    </section>
  )
}
