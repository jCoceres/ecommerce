import React, { useEffect } from 'react'
import "./styleCart.css"

const Cart = ({ cartItems, isOpen, onClose, eliminarProducto, vaciarCarrito }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;
  
  return (
    <>
      <div className="cart-overlay" onClick={handleOverlayClick}>
        <div className={`cart-drawer ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <h2>Carrito de compras</h2>
            <button
              className="close-button"
              onClick={onClose}
              type="button"
              aria-label="Cerrar carrito"
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
                    <div key={item.id} className="cart-item" role="listitem">
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p aria-label={`Cantidad en carrito: ${item.quantity}`}>Cantidad: {item.quantity}</p>
                      </div>
                      <div className="cart-item-price" aria-label={`Precio total: $${(item.price * item.quantity).toFixed(2)}`}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button 
                        className="remove-btn" 
                        onClick={() => eliminarProducto(item)}
                        aria-label={`Eliminar ${item.name} del carrito`}
                      >
                        Eliminar
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <h3 aria-label={`Total del carrito: $${total.toFixed(2)}`}>Total: ${total.toFixed(2)}</h3>
                  <button 
                    className="clear-cart-button" 
                    onClick={vaciarCarrito}
                    aria-label="Vaciar todo el carrito de compras"
                  >
                    🗑️ Vaciar carrito
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart