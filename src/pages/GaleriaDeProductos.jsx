import React from 'react'
import ProductList from '../components/ProductList'

const GaleriaDeProductos = ({ products, loading, error, agregarCarrito }) => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <h1>Galería de Productos</h1>
          <p>Explora toda nuestra colección de productos exclusivos</p>
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
          <ProductList products={products} loading={loading} error={error} agregarCarrito={agregarCarrito} />
        )}
      </main>
    </>
  )
}

export default GaleriaDeProductos