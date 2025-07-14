import React from 'react'
import { Container, Row, Col, Spinner, Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa'
import styled from 'styled-components'
import { useAppContext } from '../context/AppContext'
import { useSearch } from '../hooks/useSearch'
import ProductList from '../components/ProductList'
import SearchBar from '../components/SearchBar'
import SEO from '../components/SEO'

const HeroSection = styled.section`
  background: linear-gradient(135deg, #718096 0%, #4a5568 50%, #2d3748 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 3rem;
`

const HeroTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const HeroButton = styled(Button)`
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.3);
  color: white;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(255,255,255,0.3);
    border-color: rgba(255,255,255,0.5);
    color: white;
    transform: translateY(-2px);
    text-decoration: none;
  }
  
  &:focus {
    text-decoration: none;
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  color: #1a202c;
  margin-bottom: 3rem;
  font-weight: 700;
  font-size: 2.8rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #e8d5ff 0%, #d4b5ff 50%, #c29dff 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  flex-direction: column;
  gap: 1rem;
`

const ResultsInfo = styled.div`
  text-align: center;
  margin: 1rem 0;
  color: #4a5568;
  font-style: italic;
  font-size: 1.1rem;
  font-weight: 500;
`

const ViewAllButton = styled(Button)`
  background: linear-gradient(135deg, #e8d5ff 0%, #d4b5ff 50%, #c29dff 100%);
  border: 2px solid #c29dff;
  color: #2d1b4e;
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: linear-gradient(135deg, #d4b5ff 0%, #c29dff 50%, #a855f7 100%);
    border-color: #a855f7;
    color: #1a0f2e;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(194, 157, 255, 0.4);
  }
  
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(194, 157, 255, 0.25);
  }
`

const Home = () => {
  const { products, loading, error } = useAppContext()
  const { searchTerm, filteredItems, handleSearchChange, clearSearch } = useSearch(products, ['name', 'description'])
  
  // Mostrar solo los primeros 8 productos en home
  const featuredProducts = filteredItems.slice(0, 8)

  return (
    <>
      <SEO 
        title="Inicio - E-Commerce"
        description="Bienvenido a nuestra tienda online. Encuentra los mejores productos con calidad garantizada y envío rápido."
        keywords="ecommerce, tienda online, productos, inicio, ofertas, compras"
      />
      
      <HeroSection>
        <Container>
          <Row>
            <Col>
              <HeroTitle>Bienvenido a Mi Tienda</HeroTitle>
              <HeroSubtitle>
                Encuentra los mejores productos con calidad garantizada y envío rápido
              </HeroSubtitle>
              <HeroButton as={Link} to="/galeria-de-productos" size="lg">
                <FaShoppingBag className="me-2" />
                Explorar Productos
                <FaArrowRight className="ms-2" />
              </HeroButton>
            </Col>
          </Row>
        </Container>
      </HeroSection>

      <Container>
        <Row>
          <Col>
            <SectionTitle>Productos Destacados</SectionTitle>
            
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              onClearSearch={clearSearch}
            />
            
            {loading ? (
              <LoadingContainer>
                <Spinner animation="border" variant="primary" size="lg" />
                <p>Cargando productos...</p>
              </LoadingContainer>
            ) : error ? (
              <Alert variant="danger" className="text-center">
                <Alert.Heading>Error al cargar productos</Alert.Heading>
                <p>No se pudieron cargar los productos. Por favor, intenta más tarde.</p>
              </Alert>
            ) : (
              <>
                <ProductList products={featuredProducts} />
                
                {products.length > 8 && !searchTerm && (
                  <div className="text-center mt-4">
                    <ViewAllButton 
                      as={Link} 
                      to="/galeria-de-productos" 
                      size="lg"
                    >
                      Ver todos los productos
                      <FaArrowRight className="ms-2" />
                    </ViewAllButton>
                  </div>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home