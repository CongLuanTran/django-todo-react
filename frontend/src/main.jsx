import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

