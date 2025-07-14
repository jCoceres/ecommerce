import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Navigate } from 'react-router-dom'

const RutasProtegidas = ({ children, requiredRole }) => {
  const { isAuthenticated, user, loading } = useAuthContext()
  
  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>Verificando autenticación...</div>
      </div>
    )
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  // Si se requiere un rol específico, verificar que el usuario lo tenga
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/login" replace />
  }
  
  return children;
}

export default RutasProtegidas;