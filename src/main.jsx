import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './style.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider'
import { router } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)