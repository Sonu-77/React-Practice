import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Name from './profile.jsx'
import Buttons from './button.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Name></Name>
    <App />
    <Buttons></Buttons>
  </React.StrictMode>
)
