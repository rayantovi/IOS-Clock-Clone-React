import React from 'react'
import ReactDOM from 'react-dom/client'
import Tabs from './Tabs'
import Bar from './statusBar'
import './index.css'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryRouter>
          <Bar />
          <Tabs />
    </MemoryRouter>
  </React.StrictMode>,
)
