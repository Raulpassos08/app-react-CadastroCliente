import React from 'react'
import { AppContext } from './context'

export const useContextProvider = () => {
  const context = React.useContext(AppContext)
  if (!context) {
    alert('Tu ta mexendo onde não deve, meu fi!')
  }
  return context
}
