import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/estaticos/Footer';
import Header from './components/estaticos/Header';
import Productos from './components/Productos';
import AcercaDe from './pages/AcercaDe';
import Contactos from './pages/Contactos';
import GaleriaDeProductos from './pages/GaleriaDeProductos';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleAddToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id)
    if (productInCart) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const handleDeleteFromCart = (product) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === product.id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return null
        }
      } else {
        return item
      }
    }).filter(item => item !== null))
  }

  useEffect(() => {
    fetch('https://684247f7e1347494c31c4ecb.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Router>
      <Header cartItems={cart} borrarProducto={handleDeleteFromCart} />
      <Routes>
        <Route path='/' element={<Home products={products} loading={loading} error={error} agregarCarrito={handleAddToCart} />} />
        <Route path='/acerca-de' element={<AcercaDe />} />
        <Route path='/contactos' element={<Contactos />} />
        <Route path='/galeria-de-productos' element={<GaleriaDeProductos products={products} loading={loading} error={error} agregarCarrito={handleAddToCart} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
