import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap'
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUserShield, FaHome, FaInfoCircle, FaImages, FaPhone } from 'react-icons/fa'
import styled from 'styled-components'
import Cart from '../Cart'
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
`

const UserInfo = styled.div`
  color: white;
  font-weight: 500;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
                <LoginButton as={Link} to="/login">
                  <FaSignInAlt /> Iniciar Sesión
                </LoginButton>
              ) : (
                <>
                  {user?.role === 'admin' && (
                    <AdminButton as={Link} to="/admin">
                      <FaUserShield /> 
                    </AdminButton>
                  )}
                  <UserInfo>
                    Hola, {user?.email}
                  </UserInfo>
                  <LogoutButton onClick={logout} size="sm">
                    <FaSignOutAlt />
                  </LogoutButton>
                </>
              )}
              
              <CartButton onClick={() => setCartOpen(true)} className="ms-2">
                <FaShoppingCart />
                <Badge bg="secondary">{totalItems}</Badge>
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