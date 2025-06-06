import React, { useState } from 'react'
import "./styleProductos.css"

const Productos = ({ product, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1)

  const increase = () => {
    if (cantidad < product.stock) {
      setCantidad(prevCantidad => prevCantidad + 1)
    }
  }

  const decrease = () => {
    if (cantidad > 1) {
      setCantidad(prevCantidad => prevCantidad - 1)
    }
  }

  return (
    <section className="card">
      <div className="imagen-container"><img src={product.image} alt="" className="imagen" /></div>
      <h3 className="nombre">{product.name}</h3>
      <p className="precio">${product.price}</p>
      <p className="stock">{product.stock}</p>
      <div className="cantidad-container">
        <button className="qtyButton" onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className="qtyButton" onClick={increase}>+</button>
      </div>
      <button onClick={() => agregarCarrito(product)}>Agregar al carrito</button>
    </section>
  )
}

export default Productos