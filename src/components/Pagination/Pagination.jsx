import React from 'react'
import { Button } from 'react-bootstrap'
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  gap: 0.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    gap: 0.3rem;
  }
`

const PaginationButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive'
})`
  min-width: 40px;
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid #e2e8f0;
  background: ${props => props.isActive ? '#c29dff' : 'white'};
  color: ${props => props.isActive ? 'white' : '#4a5568'};
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  @media (max-width: 576px) {
    min-width: 35px;
    height: 35px;
    font-size: 0.8rem;
  }
  
  &:hover:not(:disabled) {
    background: ${props => props.isActive ? '#a855f7' : '#f7fafc'};
    border-color: #c29dff;
    color: ${props => props.isActive ? 'white' : '#2d3748'};
    transform: translateY(-1px);
  }
  
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(194, 157, 255, 0.25);
    border-color: #c29dff;
  }
  
  &:disabled {
    background: #f7fafc;
    border-color: #e2e8f0;
    color: #a0aec0;
    cursor: not-allowed;
    transform: none;
  }
`

const NavButton = styled(PaginationButton)`
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 576px) {
    padding: 0 8px;
    gap: 0.3rem;
    
    .nav-text {
      display: none;
    }
  }
  
  &:hover:not(:disabled) {
    background: #e8d5ff;
    border-color: #c29dff;
  }
`

const EllipsisSpan = styled.span`
  color: #a0aec0;
  font-weight: 600;
  padding: 0 8px;
  display: flex;
  align-items: center;
  height: 40px;
  
  @media (max-width: 576px) {
    height: 35px;
    padding: 0 4px;
  }
`

const PaginationInfo = styled.div`
  text-align: center;
  color: #4a5568;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`

const MobilePaginationContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    gap: 1rem;
  }
`

const PageInfo = styled.div`
  color: #4a5568;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  flex: 1;
`

const DesktopPagination = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPreviousPage,
  onNextPage,
  onFirstPage,
  onLastPage,
  hasNextPage,
  hasPreviousPage,
  getPageNumbers,
  startIndex,
  endIndex,
  totalItems
}) => {
  if (totalPages <= 1) return null

  const pageNumbers = getPageNumbers()

  return (
    <>
      <PaginationInfo>
        Mostrando {startIndex} - {endIndex} de {totalItems} productos
      </PaginationInfo>
      
      {/* Paginación para desktop */}
      <DesktopPagination>
        <PaginationContainer role="navigation" aria-label="Navegación de páginas">
          {/* Botón Primera Página */}
          <NavButton
            onClick={onFirstPage}
            disabled={!hasPreviousPage}
            title="Primera página"
            aria-label="Ir a la primera página"
          >
            <FaAngleDoubleLeft aria-hidden="true" />
            <span className="nav-text">Primera</span>
          </NavButton>

          {/* Botón Página Anterior */}
          <NavButton
            onClick={onPreviousPage}
            disabled={!hasPreviousPage}
            title="Página anterior"
            aria-label="Ir a la página anterior"
          >
            <FaChevronLeft aria-hidden="true" />
            <span className="nav-text">Anterior</span>
          </NavButton>

          {/* Números de Página */}
          {pageNumbers.map((pageNumber, index) => (
            pageNumber === '...' ? (
              <EllipsisSpan key={`ellipsis-${index}`} aria-hidden="true">
                ...
              </EllipsisSpan>
            ) : (
              <PaginationButton
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                isActive={pageNumber === currentPage}
                title={`Página ${pageNumber}`}
                aria-label={`${pageNumber === currentPage ? 'Página actual, ' : ''}Ir a la página ${pageNumber}`}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
              >
                {pageNumber}
              </PaginationButton>
            )
          ))}

          {/* Botón Página Siguiente */}
          <NavButton
            onClick={onNextPage}
            disabled={!hasNextPage}
            title="Página siguiente"
            aria-label="Ir a la página siguiente"
          >
            <span className="nav-text">Siguiente</span>
            <FaChevronRight aria-hidden="true" />
          </NavButton>

          {/* Botón Última Página */}
          <NavButton
            onClick={onLastPage}
            disabled={!hasNextPage}
            title="Última página"
            aria-label="Ir a la última página"
          >
            <span className="nav-text">Última</span>
            <FaAngleDoubleRight aria-hidden="true" />
          </NavButton>
        </PaginationContainer>
      </DesktopPagination>

      {/* Paginación simplificada para móviles */}
      <MobilePaginationContainer role="navigation" aria-label="Navegación de páginas">
        <NavButton
          onClick={onPreviousPage}
          disabled={!hasPreviousPage}
          title="Página anterior"
          aria-label="Ir a la página anterior"
        >
          <FaChevronLeft aria-hidden="true" />
        </NavButton>

        <PageInfo>
          Página {currentPage} de {totalPages}
        </PageInfo>

        <NavButton
          onClick={onNextPage}
          disabled={!hasNextPage}
          title="Página siguiente"
          aria-label="Ir a la página siguiente"
        >
          <FaChevronRight aria-hidden="true" />
        </NavButton>
      </MobilePaginationContainer>
    </>
  )
}

export default Pagination 