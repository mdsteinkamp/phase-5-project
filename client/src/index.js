import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { UserProvider } from './components/UserContext'
import { FoodstuffsProvider } from './components/FoodstuffsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <UserProvider>
    <FoodstuffsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FoodstuffsProvider>
  </UserProvider>
)

