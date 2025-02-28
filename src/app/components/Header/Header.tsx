import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow-[0_6px_8px_0px_rgba(0,0,0,0.6)]">
      <nav className="p-4 bg-gray-100  container">
        <ul className=" list-none p-0 m-0 flex justify-between">
          <li>
            <Link
              href="/"
              className="no-underline font-bold text-xl lg:text-2xl transition-colors duration-300 hover:text-orange-500 flex items-center space-x-2"
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className="no-underline  font-bold text-xl lg:text-2xl transition-colors duration-300 hover:text-orange-500 flex items-center space-x-2"
            >
              <span>Search Movies</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
