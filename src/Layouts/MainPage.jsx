// import { Outlet } from "react-router-dom"
// import NavBar from "../Components/Shared/NavBar/NavBar"
// import Footer from "../Components/Shared/Footer"

import { Helmet } from "react-helmet-async"

const MainPage = () => {
  return (
    <>
        <Helmet>
        <title>Music School || Home Page</title>
      </Helmet>
      <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Home Components 😃</div>
      {/* <NavBar /> */}
      {/* <div className="pt-28 pb-20">
      <Outlet/>
      </div> */}
      {/* <div className='min-h-[calc(100vh-68px)] pt-24 pb-10'> */}
      {/* <Outlet></Outlet> */}
      {/* </div> */}
      {/* <Footer/> */}
    </>
  )
}

export default MainPage
