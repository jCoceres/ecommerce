import React, { useState, useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import './styleProductForm.css'

const ProductForm = ({ isVisible, isEditing, productToEdit, onClose }) => {
  const { handleAddProduct, handleUpdateProduct } = useAppContext()
  
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    stock: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Agregar estado para errores de validación
  const [validationErrors, setValidationErrors] = useState({})

  // Función de validación
  const validateDescription = (value) => {
    if (!value || value.trim().length < 10) {
      return 'La descripción debe tener al menos 10 caracteres';
    }
    return ''
  }

  useEffect(() => {
    // logica para manejar los cambios en el formulario
    if (isEditing && productToEdit) {
      setForm({
        id: productToEdit.id,
        name: productToEdit.name,
        price: productToEdit.price,
        image: productToEdit.image,
        description: productToEdit.description,
        stock: productToEdit.stock
      })
    } else {
      setForm({
        name: '',
        price: '',
        image: '',
        description: '',
        stock: ''
      })
    }
    
    // Limpiar error cuando se cambia el producto a editar
    setError('')
  }, [isEditing, productToEdit])

  const handleInputChange = (e) => {
    // logica para manejar los cambios en el formulario
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Validar descripción en tiempo real
    if (name === 'description') {
      const error = validateDescription(value)
      setValidationErrors(prev => ({ ...prev, description: error }))
    }
    
    // Limpiar error cuando el usuario empieza a escribir
    if (error) {
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // Lógica de procesamiento del formulario
      if (isEditing) {
        // Actualizar producto existente
        await handleUpdateProduct(form)
      } else {
        // Crear nuevo producto
        await handleAddProduct(form)
      }
      
      // Cerrar el formulario 
      handleCancel()
    } catch (error) {
      console.error('❌ Error al procesar el formulario:', error)
      setError('Error al guardar el producto. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    setForm({
      name: '',
      price: '',
      image: '',
      description: '',
      stock: ''
    })
    setError('')
    
    // Notificar al componente padre que se cerró el formulario
    if (onClose) {
      onClose()
    }
  }

  // No renderizar si no es visible
  if (!isVisible) {
    return null
  }

  return (
    <div className="admin-form-section">
      <div className="admin-form-container">
        <h2>{isEditing ? 'Editar Producto' : 'Crear Nuevo Producto'}</h2>
        
        {error && (
          <div className="error-message" style={{
            background: '#fed7d7',
            color: '#721c24',
            padding: '0.75rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            border: '1px solid #f5c6cb'
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <div className="product-form-group">
              <label htmlFor="name">Nombre del Producto</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Ingresa el nombre del producto"
                disabled={isSubmitting}
                required
                aria-describedby={validationErrors.name ? "name-error" : undefined}
                aria-invalid={validationErrors.name ? "true" : "false"}
              />
              {validationErrors.name && (
                <span className="error-text" id="name-error" role="alert">{validationErrors.name}</span>
              )}
            </div>
            <div className="product-form-group">
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                id="price"
                name="price"
                value={form.price}
                onChange={handleInputChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                disabled={isSubmitting}
                required
                aria-describedby={validationErrors.price ? "price-error" : undefined}
                aria-invalid={validationErrors.price ? "true" : "false"}
              />
              {validationErrors.price && (
                <span className="error-text" id="price-error" role="alert">{validationErrors.price}</span>
              )}
            </div>
          </div>
          
          <div className="form-row">
            <div className="product-form-group">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={form.stock}
                onChange={handleInputChange}
                placeholder="0"
                min="0"
                disabled={isSubmitting}
                required
                aria-describedby={validationErrors.stock ? "stock-error" : undefined}
                aria-invalid={validationErrors.stock ? "true" : "false"}
              />
              {validationErrors.stock && (
                <span className="error-text" id="stock-error" role="alert">{validationErrors.stock}</span>
              )}
            </div>
            <div className="product-form-group">
              <label htmlFor="image">URL de la Imagen</label>
              <input
                type="url"
                id="image"
                name="image"
                value={form.image}
                onChange={handleInputChange}
                placeholder="https://ejemplo.com/imagen.jpg"
                disabled={isSubmitting}
                required
                aria-describedby={validationErrors.image ? "image-error" : undefined}
                aria-invalid={validationErrors.image ? "true" : "false"}
              />
              {validationErrors.image && (
                <span className="error-text" id="image-error" role="alert">{validationErrors.image}</span>
              )}
            </div>
          </div>
          
          <div className="product-form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Descripción del producto (mínimo 10 caracteres)"
              rows="3"
              disabled={isSubmitting}
              required
              className={validationErrors.description ? 'error' : ''}
              aria-describedby="description-error"
              aria-invalid={validationErrors.description ? "true" : "false"}
            />
            {validationErrors.description && (
              <span className="error-text" id="description-error" role="alert">{validationErrors.description}</span>
            )}
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className="product-form-btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  {isEditing ? ' Actualizando...' : ' Creando...'}
                </>
              ) : (
                isEditing ? 'Actualizar Producto' : 'Crear Producto'
              )}
            </button>
            <button 
              type="button" 
              className="product-form-btn-secondary" 
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm 