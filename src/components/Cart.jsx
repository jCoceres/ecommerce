import React, { useEffect } from 'react'
import "./styleCart.css"

const Cart = ({ cartItems, isOpen, onClose, eliminarProducto, vaciarCarrito }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevenir scroll del body cuando el drawer está abierto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Cerrar al hacer clic fuera del drawer
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;
  
  return (
    <>
      {/* Overlay para cerrar al hacer clic fuera */}
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
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p>Cantidad: {item.quantity}</p>
                      </div>
                      <div className="cart-item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button className="remove-btn" onClick={() => eliminarProducto(item)}>
                        Eliminar
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <h3>Total: ${total.toFixed(2)}</h3>
                  <button className="clear-cart-button" onClick={vaciarCarrito}>
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