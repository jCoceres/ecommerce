import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./styleProductos.css"

const Productos = ({ product, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1)

  const increase = () => {
    cantidad < product.stock ? setCantidad(prevCantidad => prevCantidad + 1) : product.stock
  }

  const decrease = () => {
    cantidad > 1 ? setCantidad(prevCantidad => prevCantidad - 1) : 1
  }

  const handleAgregarCarrito = () => {
    agregarCarrito(product, cantidad)
    setCantidad(1)
  }

  return (
    <section className="card">
      <div className="imagen-container">
        <Link to={`/productos/${product.id}`}>
          <img src={product.image} alt={product.name} className="imagen" />
        </Link>
      </div>
      <h3 className="nombre">
        <Link to={`/productos/${product.id}`} className="product-title-link">
          {product.name}
        </Link>
      </h3>
      <p className="precio">${product.price}</p>
      <p className="stock">Stock: {product.stock}</p>
      <div className="cantidad-container">
        <button className="qtyButton" onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className="qtyButton" onClick={increase}>+</button>
      </div>
      <div className="button-container">
        <button onClick={handleAgregarCarrito} disabled={product.stock === 0}>
          {product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
        </button>
        <Link to={`/productos/${product.id}`} className="details-link">
          Ver mas
        </Link>
      </div>
    </section>
  )
}

export default Productos