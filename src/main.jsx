import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './CSS/index.css'
import { StoreProvider } from './store'
import { MemoryRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
    <MemoryRouter>
      <App></App>
    </MemoryRouter>
</StoreProvider>
  </React.StrictMode>,
)
