import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

import 'normalize.css'
import './index.css'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
