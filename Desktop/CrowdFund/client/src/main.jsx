import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChainId,ThirdwebProvider } from '@thirdweb-dev/react'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThirdwebProvider activeChain={ChainId.sepolia}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
)
