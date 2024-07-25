import React from 'react'
import { AppContext } from './context'

export const useClientContext = () => {
  const context = React.useContext(AppContext)
  if (!context) {
    alert('Tu ta mexendo onde não deve, meu fi!')
  }
  return context
}
