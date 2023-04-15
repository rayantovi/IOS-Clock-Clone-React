import React from 'react'
import ReactDOM from 'react-dom/client'
import Tabs from './Tabs'
import Bar from './statusBar'
import './CSS/index.css'
import { StoreProvider } from './store'
import { MemoryRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
    <MemoryRouter>
          <Bar />
          <Tabs />
    </MemoryRouter>
</StoreProvider>
  </React.StrictMode>,
)
