import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <>
      {/* <!-- component --> */}
      <section>

        <div className="bg-white">
          <div className="flex h-screen">
            <div className="m-auto text-center">
              <img className='w-screen h-screen' src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="error img" />
              <h1 className="md:text-7xl text-4xl mx-2 relative bottom-20 text-slate-600 font-bold">oops! Page not found</h1>
              <Link to="/" className="awesome-btn px-10 py-4 relative bottom-10 rounded-md">
                BACK To HOME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;