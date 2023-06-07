import { Outlet } from "react-router-dom"

import { Helmet } from "react-helmet-async"
import NavBar from "../Components/SharedComponents/NavBar/NavBar"

const MainPage = () => {
  return (
    <>
        <Helmet>
        <title>Music School || Home Page</title>
      </Helmet>
      <NavBar />
      <div className='min-h-[calc(100vh-68px)] pt-24 pb-10'>
      <Outlet></Outlet>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default MainPage
