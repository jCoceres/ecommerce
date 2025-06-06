import React from 'react'
import ProductList from '../components/ProductList'

const Home = ({ products, loading, error, agregarCarrito, borrarProducto }) => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <h1>Bienvenido a nuestra tienda</h1>
          <p>Descubre nuestros productos de la más alta calidad con el mejor precio del mercado</p>
        </div>
      </div>
      
      <main className="container">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        ) : error ? (
          <div className="error-message">
            <h3>¡Oops! Algo salió mal</h3>
            <p>No pudimos cargar los productos. Por favor, intenta más tarde.</p>
          </div>
        ) : (
          <ProductList products={products} loading={loading} error={error} agregarCarrito={agregarCarrito} borrarProducto={borrarProducto} />
        )}
      </main>
    </>
  )
}

export default Home