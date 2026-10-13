// tienda-online/src/App.jsx
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
            imagen="https://static.wikia.nocookie.net/memes-pedia/images/1/17/Descarga-3.jpg/revision/latest?cb=20200818170944&path-prefix=es"
          />
          <ProductCard
            nombre="FIFA 26"
            precio="199.900"
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9g24sLED3F5V4BN50Tl2swVg4L1ULJzNv7l1YI3660w0b32e2qBxRN8&s=10"
          />
          <ProductCard
            nombre="Mario Kart"
            precio="159.900"
            imagen="https://es.kotaku.com/app/uploads/2025/07/170a3a61fd181633f0c38f20bbebfc74.jpg"
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App