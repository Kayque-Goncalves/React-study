import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import styles from './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App style={{styles}} />
  </React.StrictMode>,
  document.getElementById('root')
)