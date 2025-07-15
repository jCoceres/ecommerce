import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AcercaDe from './pages/AcercaDe/AcercaDe';
import Contactos from './pages/Contactos/Contactos';
import GaleriaDeProductos from './pages/GaleriaDeProductos/GaleriaDeProductos';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Admin from './pages/Admin/Admin';
import ProductDetails from './components/ProductDetails/ProductDetails';
import RutasProtegidas from './auth/RutasProtegidas';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <AppProvider>
          <Router>
            <Header />
            <div className="app-content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/acerca-de' element={<AcercaDe />} />
                <Route path='/contactos' element={<Contactos />} />
                <Route path='/galeria-de-productos' element={<GaleriaDeProductos />} />
                <Route path='/productos/:id' element={<ProductDetails />} />
                <Route path='/admin' element={<RutasProtegidas requiredRole="admin"><Admin /></RutasProtegidas>} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Router>
        </AppProvider>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App
