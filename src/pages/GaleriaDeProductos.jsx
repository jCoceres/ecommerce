import React from 'react'
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'
import { useAppContext } from '../context/AppContext'
import { useSearch } from '../hooks/useSearch'
import { usePagination } from '../hooks/usePagination'
import ProductList from '../components/ProductList'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import styled from 'styled-components'

const PageContainer = styled(Container)`
  padding: 2rem 0;
  min-height: 80vh;
`

const PageTitle = styled.h1`
  text-align: center;
  color: #1a202c;
  margin-bottom: 2.5rem;
  font-weight: 700;
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
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

const NoResultsContainer = styled.div`
  text-align: center;
  padding: 3rem;
  color: #4a5568;
  
  h3 {
    color: #2d3748;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 600;
  }
  
  p {
    font-size: 1.2rem;
    font-weight: 500;
  }
`

const ResultsInfo = styled.div`
  text-align: center;
  margin: 1rem 0;
  color: #4a5568;
  font-style: italic;
  font-size: 1.1rem;
  font-weight: 500;
`

const GaleriaDeProductos = () => {
  const { products, loading, error } = useAppContext()
  const { searchTerm, filteredItems, handleSearchChange, clearSearch } = useSearch(products, ['name', 'description'])
  
  // Hook de paginación - 8 productos por página
  const {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    goToFirstPage,
    goToLastPage,
    goToPreviousPage,
    goToNextPage,
    getPageNumbers,
    hasNextPage,
    hasPreviousPage,
    startIndex,
    endIndex,
    totalItems
  } = usePagination(filteredItems, 8)

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer role="status" aria-live="polite">
          <Spinner animation="border" variant="primary" size="lg" aria-hidden="true" />
          <p>Cargando productos...</p>
        </LoadingContainer>
      </PageContainer>
    )
  }

  if (error) {
    return (
      <PageContainer>
        <Alert variant="danger" className="text-center" role="alert">
          <Alert.Heading>Error al cargar productos</Alert.Heading>
          <p>No se pudieron cargar los productos. Por favor, intenta más tarde.</p>
        </Alert>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <Row>
        <Col>
          <PageTitle>Galería de Productos</PageTitle>
          
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onClearSearch={clearSearch}
          />
          
          {searchTerm && (
            <ResultsInfo role="status" aria-live="polite">
              {filteredItems.length > 0 
                ? `Encontrados ${filteredItems.length} resultado${filteredItems.length !== 1 ? 's' : ''} para "${searchTerm}"`
                : `No se encontraron resultados para "${searchTerm}"`
              }
            </ResultsInfo>
          )}
          
          {filteredItems.length === 0 && searchTerm ? (
            <NoResultsContainer role="status">
              <h3>🔍 No se encontraron productos</h3>
              <p>Intenta con otros términos de búsqueda</p>
            </NoResultsContainer>
          ) : (
            <>
              <ProductList products={paginatedItems} />
              
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
                onPreviousPage={goToPreviousPage}
                onNextPage={goToNextPage}
                onFirstPage={goToFirstPage}
                onLastPage={goToLastPage}
                hasNextPage={hasNextPage}
                hasPreviousPage={hasPreviousPage}
                getPageNumbers={getPageNumbers}
                startIndex={startIndex}
                endIndex={endIndex}
                totalItems={totalItems}
              />
            </>
          )}
        </Col>
      </Row>
    </PageContainer>
  )
}

export default GaleriaDeProductos