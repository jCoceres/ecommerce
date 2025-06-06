import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart'
import "./styleEstatico.css"

const Header = ({ cartItems, borrarProducto }) => {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <nav>
      <ul>
        <li className="link-nav"><Link to="/">Inicio</Link></li>
        <li className="link-nav"><Link to="/acerca-de">Sobre nosotros</Link></li>
        <li className="link-nav"><Link to="/galeria-de-productos">Galeria de Productos</Link></li>
        <li className="link-nav"><Link to="/productos">Productos</Link></li>
        <li className="link-nav"><Link to="/contactos">Contacto</Link></li>
        <li className="cart-nav">
          <button className="btn-cart" onClick={() => setCartOpen(true)}>
            🛒 Carrito ({cartItems.length})
          </button>
          <Cart cartItems={cartItems} isOpen={cartOpen} onClose={() => setCartOpen(false)} borrarProducto={borrarProducto} />
        </li>
      </ul>
    </nav>
  )
}

export default Header