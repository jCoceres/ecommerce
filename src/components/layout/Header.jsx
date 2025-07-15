import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap'
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUserShield, FaHome, FaInfoCircle, FaImages, FaPhone } from 'react-icons/fa'
import styled from 'styled-components'
import Cart from '../Cart/Cart';
import { useAppContext } from '../../context/AppContext'
import { useAuthContext } from '../../hooks/useAuthContext'

const StyledNavbar = styled(Navbar)`
  background: linear-gradient(135deg, #e8d5ff 0%, #d4b5ff 50%, #c29dff 100%);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 0.75rem 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  
  .navbar-brand {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .navbar-nav {
    align-items: center;
  }
  
  .navbar-collapse {
    align-items: center;
    
    /* Estilos para el menú desplegable en móviles */
    @media (max-width: 991.98px) {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      margin-top: 1rem;
      padding: 1rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      
      .navbar-nav {
        align-items: stretch;
        gap: 0.5rem;
        
        &.me-auto {
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(194, 157, 255, 0.3);
        }
        
        &.ms-auto {
          align-items: stretch;
        }
      }
    }
  }

  /* Estilos personalizados para el menú hamburguesa */
  .navbar-toggler {
    border: 2px solid rgba(255, 255, 255, 0.3) !important;
    border-radius: 8px !important;
    padding: 6px 10px !important;
    transition: all 0.3s ease !important;
    background: rgba(255, 255, 255, 0.1) !important;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2) !important;
      border-color: rgba(255, 255, 255, 0.5) !important;
      transform: translateY(-1px);
    }
    
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25) !important;
      border-color: rgba(255, 255, 255, 0.5) !important;
    }
    
    &:not(.collapsed) {
      background: rgba(255, 255, 255, 0.3) !important;
      border-color: rgba(255, 255, 255, 0.6) !important;
    }
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
    width: 20px !important;
    height: 20px !important;
  }
`

const StyledNavLink = styled(Nav.Link)`
  color: rgba(60, 60, 60, 0.8) !important;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 1rem;
  padding: 8px 0 !important;
  border-radius: 0;
  position: relative;
  text-decoration: none;
  background: transparent;
  border: none;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #c29dff;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: rgba(40, 40, 40, 1) !important;
    background: transparent;
    text-decoration: none;
    transform: none;
    
    &::after {
      width: 100%;
    }
  }
  
  &:active {
    transform: none;
  }
  
  &.active {
    color: #c29dff !important;
    background: transparent;
    
    &::after {
      width: 100%;
    }
  }
  
  /* Estilos específicos para móvil */
  @media (max-width: 991.98px) {
    margin: 0;
    padding: 12px 16px !important;
    border-radius: 8px;
    background: rgba(194, 157, 255, 0.1);
    margin-bottom: 0.5rem;
    
    &::after {
      display: none;
    }
    
    &:hover {
      background: rgba(194, 157, 255, 0.2);
      color: #2d1b4e !important;
    }
    
    &.active {
      background: rgba(194, 157, 255, 0.3);
      color: #2d1b4e !important;
    }
  }
`

const LoginButton = styled(Button)`
  background: transparent;
  border: none;
  color: rgba(60, 60, 60, 0.8);
  border-radius: 0;
  padding: 8px 0;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #c29dff;
    transition: width 0.3s ease;
  }
  
  &:hover {
    background: transparent;
    border: none;
    color: rgba(40, 40, 40, 1);
    transform: none;
    text-decoration: none;
    
    &::after {
      width: 100%;
    }
  }
  
  &:active {
    transform: none;
  }
  
  /* Estilos específicos para móvil */
  @media (max-width: 991.98px) {
    margin: 0;
    padding: 12px 16px !important;
    border-radius: 8px;
    background: rgba(194, 157, 255, 0.1);
    margin-bottom: 0.5rem;
    color: #2d1b4e !important;
    justify-content: center;
    
    &::after {
      display: none;
    }
    
    &:hover {
      background: rgba(194, 157, 255, 0.2);
      color: #2d1b4e !important;
    }
  }
`

const AdminButton = styled(Button)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(45, 27, 78, 0.1);
  border: 2px solid rgba(45, 27, 78, 0.2);
  color: #2d1b4e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  text-decoration: none;
  
  &:hover {
    background: rgba(45, 27, 78, 0.2);
    border-color: rgba(45, 27, 78, 0.3);
    color: #1a0f2e;
    transform: translateY(-2px);
    text-decoration: none;
  }
  
  &:focus {
    text-decoration: none;
    box-shadow: 0 0 0 0.2rem rgba(45, 27, 78, 0.25);
  }
  
  /* Estilos específicos para móvil */
  @media (max-width: 991.98px) {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 0 0 0.5rem 0;
    padding: 12px 16px;
    gap: 0.5rem;
    font-size: 1.1rem;
    
    &::after {
      content: ' Panel Admin';
      font-size: 1rem;
    }
    
    &:hover {
      transform: none;
    }
  }
`

const LogoutButton = styled(Button)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(220, 53, 69, 0.1);
  border: 2px solid rgba(220, 53, 69, 0.2);
  color: #dc3545;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  
  &:hover {
    background: rgba(220, 53, 69, 0.2);
    border-color: rgba(220, 53, 69, 0.3);
    color: #c82333;
    transform: translateY(-2px);
  }
  
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }
  
  /* Estilos específicos para móvil */
  @media (max-width: 991.98px) {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 0 0 0.5rem 0;
    padding: 12px 16px;
    gap: 0.5rem;
    font-size: 1.1rem;
    
    &::after {
      content: ' Cerrar Sesión';
      font-size: 1rem;
    }
    
    &:hover {
      transform: none;
    }
  }
`

const CartButton = styled(Button)`
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.3);
  color: white;
  border-radius: 25px;
  padding: 8px 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255,255,255,0.3);
    border-color: rgba(255,255,255,0.5);
    transform: translateY(-2px);
  }
  
  /* Estilos específicos para móvil */
  @media (max-width: 991.98px) {
    background: rgba(194, 157, 255, 0.2);
    border: 2px solid rgba(194, 157, 255, 0.3);
    color: #2d1b4e;
    border-radius: 8px;
    padding: 12px 16px;
    margin: 0;
    justify-content: center;
    width: 100%;
    
    &:hover {
      background: rgba(194, 157, 255, 0.3);
      border-color: rgba(194, 157, 255, 0.4);
      color: #2d1b4e;
      transform: none;
    }
  }
`

const UserInfo = styled.div`
  color: white;
  font-weight: 500;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  /* Estilos específicos para móvil */
  @media (max-width: 991.98px) {
    color: #2d1b4e;
    margin: 0 0 0.5rem 0;
    padding: 8px 16px;
    background: rgba(194, 157, 255, 0.15);
    border-radius: 8px;
    justify-content: center;
    font-size: 0.9rem;
  }
`

const Header = () => {
  const { cart, handleRemoveProductFromCart, handleClearCart } = useAppContext()
  const { isAuthenticated, user, logout } = useAuthContext()
  const [cartOpen, setCartOpen] = useState(false)
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <StyledNavbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
            Mi tienda
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <StyledNavLink as={Link} to="/">
                Inicio
              </StyledNavLink>
              <StyledNavLink as={Link} to="/acerca-de">
                Sobre nosotros
              </StyledNavLink>
              <StyledNavLink as={Link} to="/galeria-de-productos">
                Galería de Productos
              </StyledNavLink>
              <StyledNavLink as={Link} to="/contactos">
                Contacto
              </StyledNavLink>
            </Nav>
            
            <Nav className="ms-auto align-items-center">
              {!isAuthenticated ? (
                <LoginButton as={Link} to="/login" aria-label="Iniciar sesión en la cuenta">
                  <FaSignInAlt aria-hidden="true" /> Iniciar Sesión
                </LoginButton>
              ) : (
                <>
                  {user?.role === 'admin' && (
                    <AdminButton as={Link} to="/admin" aria-label="Ir al panel de administración">
                      <FaUserShield aria-hidden="true" /> 
                    </AdminButton>
                  )}
                  <UserInfo aria-label={`Usuario conectado: ${user?.email}`}>
                    Hola, {user?.email}
                  </UserInfo>
                  <LogoutButton onClick={logout} size="sm" aria-label="Cerrar sesión">
                    <FaSignOutAlt aria-hidden="true" />
                  </LogoutButton>
                </>
              )}
              
              <CartButton onClick={() => setCartOpen(true)} className="ms-2" aria-label={`Abrir carrito de compras (${totalItems} productos)`}>
                <FaShoppingCart aria-hidden="true" />
                <Badge bg="secondary" aria-label={`${totalItems} productos en el carrito`}>{totalItems}</Badge>
              </CartButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
      
      {/* Espaciador para navbar fijo */}
      <div style={{ height: '70px' }}></div>
      
      <Cart 
        cartItems={cart} 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        eliminarProducto={handleRemoveProductFromCart} 
        vaciarCarrito={handleClearCart} 
      />
    </>
  )
}

export default Header