import { createContext, useEffect, useState } from 'react'
import { key_start_js } from '../constants'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    const started = localStorage.getItem(key_start_js)
    if (started) {
      setIsStarted(true)
    }
  }, [])

  const handleStart = () => {
    localStorage.setItem(key_start_js, 'true')
    setIsStarted(true)
  }

  return (
    <AppContext.Provider value={{ isStarted, handleStart }}>
      {children}
    </AppContext.Provider>
  )
}
