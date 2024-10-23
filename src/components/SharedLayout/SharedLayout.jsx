import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SharedLayout = () => {
  return (
    <>
      <header className="p-4 bg-gray-100 shadow-[0_6px_8px_rgba(0,0,0,0.6)]">
        <nav>
          <ul className="list-none p-0 m-0 flex justify-between">
            <li>
              <NavLink
                to="/"
                className="no-underline font-bold text-2xl transition-colors duration-300 hover:text-orange-500 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faHouse} /> <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className="no-underline  font-bold text-2xl transition-colors duration-300 hover:text-orange-500 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span>Search Movies</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="bg-gray-100 p-5 shadow-[0_6px_8px_rgba(0,0,0,0.6)]">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default SharedLayout;
