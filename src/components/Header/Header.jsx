import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="shadow-[0_6px_8px_rgba(0,0,0,0.6)]">
      <nav className="p-4 bg-gray-100  container">
        <ul className=" list-none p-0 m-0 flex justify-between">
          <li>
            <NavLink
              to="/"
              className="no-underline font-bold text-xl lg:text-2xl transition-colors duration-300 hover:text-orange-500 flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faHouse} /> <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="no-underline  font-bold text-xl lg:text-2xl transition-colors duration-300 hover:text-orange-500 flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Search Movies</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
