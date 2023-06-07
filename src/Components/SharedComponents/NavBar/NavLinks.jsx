import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';
import ImgTooltip from '../../ImgTooltip';
import UseAuth from '../../../Hooks/UseAuth';
const NavLinks = ({open}) => {
  const { user, logOut } = UseAuth()
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Instructors", link: "/instructors" },
    { name: "Classes", link: "/classes" },
  ];
  const location = useLocation();
  return (
    <>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
        {Links.map((link) => (
          <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
            <NavLink to={link.link} className={({ isActive }) => isActive ? 'active active-style' : 'default'}>{link.name}</NavLink>
          </li>
        ))}
        {user && (
          <>
            <li className='md:ml-8 md:my-0 my-7 font-semibold'>
              <NavLink
                to="/dashboard"
                className={`text-gray-800 hover:text-blue-400 duration-500 ${location.pathname === '/myToys' ? 'text-blue-400' : ''}`}
              >
                Dashboard
              </NavLink>
            </li>
            <div className='flex gap-2 items-center md:ml-4 ml-0'>
              <button onClick={logOut} className="login-btn" >Log Out <MdLogout className='w-5 h-5 ml-2 -mr-1' /></button>
              <ImgTooltip />
            </div>
          </>
        )}
        {!user && (
          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <NavLink
              to="/login"
              className={`text-gray-800 duration-500 ${location.pathname === '/login' ? 'login-active' : 'login-btn'}`}
            >
              Login <FaSignInAlt className='pl-2 text-2xl' />
            </NavLink>
          </li>
        )}
      </ul>
    </>
  )
}

export default NavLinks