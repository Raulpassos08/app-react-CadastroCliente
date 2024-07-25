import { createContext, useState } from 'react'

// Criando o contexto com um valor inicial vazio
const ClientContext = createContext()

export const ClientProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const createItem = (item) => {
    const newItem = { id: Date.now(), ...item }
    setItems([...items, newItem])
    localStorage.setItem('items', JSON.stringify([...items, newItem]))
  }

  const readItems = () => {
    const savedItems = localStorage.getItem('items')
    return savedItems ? JSON.parse(savedItems) : items
  }

  const updateItem = (id, updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { id, ...updatedItem } : item
    )
    setItems(updatedItems)
    localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  return (
    <ClientContext.Provider
      value={{ items, createItem, readItems, updateItem, deleteItem }}
    >
      {children}
    </ClientContext.Provider>
  )
}
