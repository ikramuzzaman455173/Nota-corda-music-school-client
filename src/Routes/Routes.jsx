import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp'
import DashboardLayout from '../layouts/DashBoardLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
      path: '/',
      element:<HomePage/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/signUp',
        element:<SignUp/>
      },
    ],
  },
  {
    path: '/dashboard',
    element:<DashboardLayout/>
  }
])

