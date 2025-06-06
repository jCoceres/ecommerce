import React from 'react'
import "./styleCart.css"

const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Carrito de compras</h2>
        <button
          className="close-button"
          onClick={onClose}
        >×</button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>El carrito está vacío</p>
            <p>¡Agrega algunos productos para empezar!</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                  <div className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button onClick={() => borrarProducto(item)}>
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart