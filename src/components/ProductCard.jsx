function ProductCard({ nombre, precio, imagen }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">

      <div className="bg-gray-200 h-40 flex items-center justify-center text-6xl">
        {imagen}
      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold mb-2">
          {nombre}
        </h3>

        <p className="text-purple-600 text-lg font-bold mb-4">
          ${precio}
        </p>

        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          Comprar
        </button>

      </div>

    </div>
  )
}

export default ProductCard