import React from 'react'
import ReactDOM from 'react-dom/client'
import Tabs from './Tabs'
import Bar from './statusBar'
import './CSS/index.css'
import { MemoryRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryRouter>
          <Bar />
          <Tabs />
    </MemoryRouter>
  </React.StrictMode>,
)
