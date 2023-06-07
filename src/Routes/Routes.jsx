import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../Layouts/MainPage'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp'
import HomePage from '../Pages/HomePage/HomePage'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
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
  // {
  //   path: '/dashboard',
  //   element:<DashboardLayout/>
  // }
])

