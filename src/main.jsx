import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ClientProvider } from './config/context/client/ClientContext.jsx'
import { AppProvider } from './config/context/initialize/context.jsx'
import './config/styles/reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ClientProvider>
        <App />
      </ClientProvider>
    </AppProvider>
  </React.StrictMode>
)
