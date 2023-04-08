import React from 'react'
import ReactDOM from 'react-dom/client'
import Tabs from './Tabs'
import Bar from './statusBar'
import store from './store'
import './index.css'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryRouter>
        <Provider store={store}>
          <Bar />
          <Tabs />
        </Provider>
    </MemoryRouter>
  </React.StrictMode>,
)
