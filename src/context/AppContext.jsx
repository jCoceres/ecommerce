import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  
  const handleAddToCart = (product, quantity = 1) => {
    const productExist = cart.find(item => item.id === product.id);
    if (productExist) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      toast.success(`Se agregó ${quantity} más de "${product.name}" al carrito`)
    } else {
      setCart([...cart, { ...product, quantity: quantity }]);
      toast.success(`"${product.name}" agregado al carrito`)
    }
  }

  const handleRemoveProductFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
    toast.info(`"${product.name}" eliminado del carrito`)
  }

  const handleClearCart = () => {
    setCart([]);
    toast.info('Carrito vaciado')
  }

  const handleAddProduct = async (productData) => {
    try {
    
      const response = await fetch('https://684247f7e1347494c31c4ecb.mockapi.io/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productData.name,
          price: parseFloat(productData.price),
          image: productData.image,
          description: productData.description,
          stock: parseInt(productData.stock)
        })
      })

      if (!response.ok) {
        throw new Error('Error al crear producto en MockAPI');
      }

      const newProduct = await response.json()
      
    
      const updatedProducts = [...products, newProduct]
      setProducts(updatedProducts)
      toast.success('Producto creado exitosamente')
      return newProduct
    } catch (error) {
      console.error('❌ Error al crear producto:', error)
      toast.error('Error al crear el producto')
      throw error 
    }
  }

  const handleUpdateProduct = async (productData) => {
    try {
      
      const response = await fetch(`https://684247f7e1347494c31c4ecb.mockapi.io/api/v1/products/${productData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productData.name,
          price: parseFloat(productData.price),
          image: productData.image,
          description: productData.description,
          stock: parseInt(productData.stock)
        })
      })

      if (!response.ok) {
        throw new Error('Error al actualizar producto en MockAPI')
      }

      const updatedProduct = await response.json()
      
      const updatedProducts = products.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
      setProducts(updatedProducts)
      toast.success('Producto actualizado exitosamente')
      return updatedProduct
    } catch (error) {
      console.error('❌ Error al actualizar producto:', error)
      toast.error('Error al actualizar el producto')
      throw error 
    }
  }

  const handleDeleteProduct = async (productId) => {
    try {

      const response = await fetch(`https://684247f7e1347494c31c4ecb.mockapi.io/api/v1/products/${productId}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Error al eliminar producto de MockAPI')
      }


      const updatedProducts = products.filter(product => product.id !== productId)
      setProducts(updatedProducts)
      
      toast.success('Producto eliminado exitosamente')
    } catch (error) {
      console.error('❌ Error al eliminar producto:', error)
      toast.error('Error al eliminar el producto')
      throw error // Re-lanzar el error para que el componente lo maneje
    }
  }

  useEffect(() => {
  
    fetch('https://684247f7e1347494c31c4ecb.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
      .catch(() => {
        setError(true)
        toast.error('Error al cargar productos')
      })
      .finally(() => setLoading(false))
  }, [])

  
  const value = {
    cart,
    products,
    loading,
    error,
    
    handleAddToCart,
    handleRemoveProductFromCart,
    handleClearCart,
    
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de AppProvider')
  }
  return context;
}

export { AppProvider }
export default AppContext 