import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import Categorias from './components/Categorias'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <Banner />

      <Categorias />

      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-center mb-8">
          Videojuegos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <ProductCard
            nombre="maincra"
            precio="89.900"
            imagen="🥵"
          />

          <ProductCard
            nombre="FIFA 26"
            precio="199.900"
            imagen="😒"
          />

          <ProductCard
            nombre="Mario Kart"
            precio="159.900"
            imagen="🎮"
          />

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default App