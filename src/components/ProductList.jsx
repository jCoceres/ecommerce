import React from 'react'
import { Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { FaShoppingCart, FaEye, FaTag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from '../context/AppContext'

const ProductCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`

const ProductImage = styled(Card.Img)`
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

const ProductTitle = styled(Card.Title)`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  height: 3rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ProductDescription = styled(Card.Text)`
  color: #666;
  font-size: 0.9rem;
  height: 4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #28a745;
`

const StockBadge = styled(Badge).withConfig({
  shouldForwardProp: (prop) => prop !== 'inStock',
})`
  font-size: 0.8rem;
  background-color: ${props => props.inStock ? '#e8d5ff' : '#fed7d7'} !important;
  color: ${props => props.inStock ? '#2d1b4e' : '#721c24'} !important;
  border: 1px solid ${props => props.inStock ? '#d4b5ff' : '#feb2b2'};
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`

const AddToCartButton = styled(Button)`
  flex: 2;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.5rem 0.75rem;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`

const ViewButton = styled(Button)`
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0;
  transition: all 0.3s ease;
  background: rgba(45, 27, 78, 0.1);
  border: 1px solid rgba(45, 27, 78, 0.2);
  color: #2d1b4e;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(45, 27, 78, 0.2);
    border-color: rgba(45, 27, 78, 0.3);
    color: #1a0f2e;
    transform: translateY(-2px);
  }
`

const ProductList = ({ products }) => {
  const { handleAddToCart } = useAppContext()

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-5">
        <h3>No hay productos disponibles</h3>
        <p>Vuelve pronto para ver nuestros productos.</p>
      </div>
    )
  }

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <ProductCard>
            <div style={{ overflow: 'hidden' }}>
              <ProductImage 
                variant="top" 
                src={product.image} 
                alt={product.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x250?text=Imagen+no+disponible'
                }}
              />
            </div>
            
            <Card.Body className="d-flex flex-column">
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              
              <PriceContainer>
                <Price>
                  <FaTag className="me-1" />
                  ${parseFloat(product.price).toFixed(2)}
                </Price>
                <StockBadge inStock={product.stock > 0}>
                  {product.stock > 0 ? `Stock: ${product.stock}` : 'Agotado'}
                </StockBadge>
              </PriceContainer>
              
              <ActionButtons>
                <AddToCartButton 
                  variant="primary" 
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  <FaShoppingCart className="me-1" />
                  Agregar
                </AddToCartButton>
                
                <ViewButton 
                  variant="outline-secondary" 
                  as={Link} 
                  to={`/productos/${product.id}`}
                >
                  <FaEye />
                </ViewButton>
              </ActionButtons>
            </Card.Body>
          </ProductCard>
        </Col>
      ))}
    </Row>
  )
}

export default ProductList
