import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import PromiseBand from '@/components/PromiseBand/PromiseBand'
import Products from '@/components/Products/Products'
import Orders from '@/components/Orders/Orders'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <PromiseBand />
        <Products />
        <Orders />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
