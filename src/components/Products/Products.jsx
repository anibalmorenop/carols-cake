import Image from 'next/image'
import { products } from '@/data/products'

export default function Products() {
  return (
    <section id="productos" className="products-section">
      <div className="section-heading">
        <h2>Nuestros postres</h2>
        <p>
          Una seleccion de tortas, galletas y antojos caseros con presentacion
          dulce y lista para publicar.
        </p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <Image src={product.image} alt={product.name} width={420} height={420} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
