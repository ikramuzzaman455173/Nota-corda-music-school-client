// react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// react-loader-spinner

import { Audio } from 'react-loader-spinner';

<Audio
  height="80"
  width="80"
  radius="9"
  color='green'
  ariaLabel='three-dots-loading'
  wrapperStyle
  wrapperClass
/>

//React Icons
import { FaBeer } from 'react-icons/fa';

// react router dom
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

// moment js
// import moment from 'moment';
// moment().format();

// sweeet alert 2

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})

//React Query Initial Setup
// npm i react-query
// import { QueryClientProvider, QueryClient } from 'react-query'
// Create a client
// const queryClient = new QueryClient()
{/* <QueryClientProvider client={queryClient}> */}
{/* </QueryClientProvider> */ }


// React Helpmet Crete Dynamic Page Title
import { HelmetProvider } from 'react-helmet-async'
  <HelmetProvider>
</HelmetProvider>

// use for pages
{/* <Helmet>
<title>simple page || Home</title>
</Helmet> */}

// Initial Setup Axios

