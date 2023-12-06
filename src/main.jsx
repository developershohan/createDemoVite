import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import './index.scss'
import MsgProvider from './provider/MsgProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MsgProvider>

    <App />
    </MsgProvider>
  </React.StrictMode>,
)
