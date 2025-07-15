import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductForm from '../components/ProductForm'
import './styleAdmin.css'

const Admin = () => {
  const { products, loading, error, handleDeleteProduct } = useAppContext()
  
  const [isEditing, setIsEditing] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [productToEdit, setProductToEdit] = useState(null)
  const [deleteError, setDeleteError] = useState('')
  const [deletingId, setDeletingId] = useState(null)

  const handleFormClose = () => {
    setShowForm(false)
    setIsEditing(false)
    setProductToEdit(null)
  }

  const handleEdit = (product) => {
    setProductToEdit(product)
    setIsEditing(true)
    setShowForm(true)
    setDeleteError('') 
  }

  const handleDelete = async (productId) => {
    
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      setDeletingId(productId)
      setDeleteError('')
      
      try {
        await handleDeleteProduct(productId)
        console.log('✅ Producto eliminado exitosamente')
      } catch (error) {
        console.error('❌ Error al eliminar producto:', error)
        setDeleteError('Error al eliminar el producto. Por favor, intenta nuevamente.')
      } finally {
        setDeletingId(null)
      }
    }
  }

  const handleAddProduct = () => {
    setProductToEdit(null)
    setIsEditing(false)
    setShowForm(true)
    setDeleteError('') // Limpiar errores previos
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>Cargando panel administrativo...</p>
      </div>
    )
  }

  if (error) {
    
    return (
      <div className="admin-error">
        <h3>Error al cargar los productos</h3>
        <p>No se pudieron cargar los productos. Por favor, intenta más tarde.</p>
      </div>
    )
  }

  return (
    <div className="admin-container">
      {/* Header del Admin */}
      <header className="admin-header">
        <div className="admin-nav">
          <h1 className="admin-title">Panel Administrativo</h1>
          <div className="admin-actions">
            <button 
              className="btn-primary"
              onClick={handleAddProduct}
            >
              Agregar Producto
            </button>
          </div>
        </div>
      </header>

     
      <ProductForm
        isVisible={showForm}
        isEditing={isEditing}
        productToEdit={productToEdit}
        onClose={handleFormClose}
      />

     
      <div className="admin-products-section">
        <h2>Productos ({products.length})</h2>
        
        {deleteError && (
          <div className="error-message" style={{
            background: '#fed7d7',
            color: '#721c24',
            padding: '0.75rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            border: '1px solid #f5c6cb'
          }}>
            {deleteError}
          </div>
        )}
        
        {products.length === 0 ? (
          <div className="empty-state">
            <p>No hay productos disponibles</p>
          </div>
        ) : (
          <div className="admin-products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-card-content">
                  <div className="product-card-header">
                    <h3 className="product-card-title">{product.name}</h3>
                    <div className="product-card-price">${product.price}</div>
                  </div>
                  <p className="product-card-description">{product.description}</p>
                  <div className="product-card-footer">
                    <span className={`stock-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                      {product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock'}
                    </span>
                    <div className="product-card-actions">
                      <button 
                        className="btn-edit"
                        onClick={() => handleEdit(product)}
                        title="Editar producto"
                        disabled={deletingId === product.id}
                        aria-label={`Editar producto ${product.name}`}
                      >
                        <i className="fa-solid fa-edit" aria-hidden="true"></i>
                      </button>
                      <button 
                        className="btn-delete"
                        onClick={() => handleDelete(product.id)}
                        title="Eliminar producto"
                        disabled={deletingId === product.id}
                        aria-label={`Eliminar producto ${product.name}`}
                      >
                        {deletingId === product.id ? (
                          <i className="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
                        ) : (
                          <i className="fa-solid fa-trash" aria-hidden="true"></i>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin