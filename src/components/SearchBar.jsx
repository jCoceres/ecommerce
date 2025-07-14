import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { FaSearch, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const SearchContainer = styled.div`
  margin: 20px 0;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
`

const StyledInputGroup = styled(InputGroup)`
  .form-control {
    border-radius: 20px 0 0 20px;
    border: 2px solid #e9ecef;
    padding: 10px 18px;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: #c29dff;
      box-shadow: 0 0 0 0.2rem rgba(194, 157, 255, 0.25);
    }
    
    &::placeholder {
      color: #4a5568;
      font-weight: 500;
    }
  }
`

const SearchButton = styled.button`
  background: #d4b5ff;
  border: 2px solid #d4b5ff;
  color: #2d1b4e;
  padding: 10px 18px;
  border-radius: 0 20px 20px 0;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.95rem;
  
  &:hover {
    background: #c29dff;
    border-color: #c29dff;
    color: #1a0f2e;
  }
`

const ClearButton = styled.button`
  background: #e8d5ff;
  border: 2px solid #e8d5ff;
  color: #2d1b4e;
  padding: 10px 14px;
  border-radius: 0;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.95rem;
  
  &:hover {
    background: #d4b5ff;
    border-color: #d4b5ff;
    color: #1a0f2e;
  }
`

const SearchBar = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <SearchContainer>
      <StyledInputGroup>
        <Form.Control
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <ClearButton
            type="button"
            onClick={onClearSearch}
            title="Limpiar búsqueda"
          >
            <FaTimes />
          </ClearButton>
        )}
        <SearchButton type="button" title="Buscar">
          <FaSearch />
        </SearchButton>
      </StyledInputGroup>
    </SearchContainer>
  )
}

export default SearchBar 