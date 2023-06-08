import { Outlet } from "react-router-dom"

import { Helmet } from "react-helmet-async"
import NavBar from "../Components/SharedComponents/NavBar/NavBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/SharedComponents/Footer";
import UseAuth from "../Hooks/UseAuth";
import LoadingSpinner from "../Components/SharedComponents/LoadingSpinner";
import ScrollToTopButton from "../Components/SharedComponents/ScrollToTopButton";
const MainPage = () => {
  const { loading } = UseAuth()
  if (loading) {
    return(<LoadingSpinner/>)
  }

  return (
    <div className="bg-white text-slate-600 dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728]">
        <Helmet>
        <title>Music School || Home Page</title>
      </Helmet>
      <NavBar />
      <div className='min-h-[calc(100vh-68px)] pt-24 pb-10 '>
        <ScrollToTopButton/>
      <Outlet></Outlet>
      </div>
      <Footer/>
      {/* <div className='text-center font-bold  text-4xl relative top-40'>This Is Our Home Components 😃</div> */}
      <ToastContainer />
    </div>
  )
}

export default MainPage
