import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import './styleProductDetails.css'

const ProductDetails = () => {
  const { products, handleAddToCart } = useAppContext()
  const { id } = useParams()
  
  if (!products || products.length === 0) {
    return <div className="loading">Cargando productos...</div>
  }
  
  const producto = products.find(product => product.id === id)
  
  const handleAddToCartClick = () => {
    if (producto && producto.stock > 0) {
      handleAddToCart(producto)
    }
  }
  
  return (
    <div className="product-details-container">
      {
        producto ? (
          <div className="product-details">
            <div className="product-image">
              <img src={producto.image} alt={producto.name} />
            </div>
            <div className="product-info">
              <h1 className="product-title">{producto.name}</h1>
              <p className="product-price">${producto.price}</p>
              <p className="product-description">{producto.description}</p>
              <div className="product-stock">
                <span className={`stock-badge ${producto.stock > 0 ? 'in-stock' : 'out-of-stock'}`} aria-label={`Stock disponible: ${producto.stock > 0 ? `${producto.stock} unidades` : 'Sin stock'}`}>
                  {producto.stock > 0 ? `${producto.stock} en stock` : 'Sin stock'}
                </span>
              </div>
              <button 
                className="add-to-cart-btn" 
                disabled={producto.stock === 0}
                onClick={handleAddToCartClick}
                aria-label={producto.stock === 0 ? `${producto.name} sin stock` : `Agregar ${producto.name} al carrito`}
              >
                {producto.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
              </button>
            </div>
          </div>
        ) : (
          <div className="product-not-found">
            <h2>Producto no encontrado</h2>
            <p>El producto que buscas no existe o ha sido eliminado.</p>
          </div>
        )
      }
    </div>
  )
}

export default ProductDetails