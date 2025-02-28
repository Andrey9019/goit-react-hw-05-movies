import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 shadow-[0px_6px_10px_8px_rgba(0,0,0,1)]">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2025 Trending movies. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="/" className="hover:underline">
            <span> About us</span>
          </Link>
          <Link href="/" className="hover:underline">
            <span> Privacy policy</span>
          </Link>
          <Link href="/" className="hover:underline">
            <span> Terms of use</span>
          </Link>
        </div>
        <div>
          <p>Subscribe to our newsletter:</p>
          <form className="flex justify-center text-base  mt-2">
            <div className="flex  shadow-xl">
              <label className="flex font-medium">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-1 rounded-l-md flex border-none outline-none text-lg"
                />
              </label>
              <button className="px-4 rounded-r-md bg-orange-500 text-black transition-colors duration-300 hover:bg-orange-700 hover:text-white focus:bg-orange-700 focus:text-white">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
