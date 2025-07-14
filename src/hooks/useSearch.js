import { useState, useMemo } from 'react'

export const useSearch = (items, searchFields = ['name', 'description']) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return items
    }

    const lowercaseSearch = searchTerm.toLowerCase()
    
    return items.filter(item => {
      return searchFields.some(field => {
        const fieldValue = item[field]
        return fieldValue && fieldValue.toString().toLowerCase().includes(lowercaseSearch)
      })
    })
  }, [items, searchTerm, searchFields])

  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  return {
    searchTerm,
    filteredItems,
    handleSearchChange,
    clearSearch
  }
} 