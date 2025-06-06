import React from 'react'
import Productos from './Productos'
import "./styleProductList.css"

const ProductList = ({ products, agregarCarrito }) => {

  return (
    <>
      <h2 className="section-title">Lista de productos</h2>
      <div className="products-grid">
        {products.map(product => <Productos product={product} key={product.id} agregarCarrito={agregarCarrito} />)}
      </div>
    </>
  )
}

export default ProductList