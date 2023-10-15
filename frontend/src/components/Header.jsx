// import { useState } from "react";
// import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../constants/images/logo.png";

import { useState } from "react";

function Header() {
  //  const [isOpen, setIsOpen] = useState(false);
  // const [loggedIn, setLoggedIn] = useState("null");
  // const userLoggedIn = useSelector((store) => store.user.user);
  return (
    <div>
      <nav className="bg-gray-100   p-4">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img className="h-12 w-32" src={logo} alt="Tradies" />
                </Link>
                {/**/}
              </div>
              <div className="hidden md:block">
                <div className="mx-12 flex items-baseline space-x-4">
                  <Link to="/about">
                    <h2 className="text-black-300  ml-32 hover:bg-gray-500 hover:text-white px-3 py-2  rounded-md text-lg font-medium">
                      About
                    </h2>
                  </Link>
                  <Link to="/category">
                    <h2 className="text-black-300  hover:bg-gray-500 hover:text-white px-3 py-2  ml-4 rounded-md text-lg font-medium">
                      Category
                    </h2>
                  </Link>
                  <Link to="/cart">
                    <h2 className="text-black-300  hover:bg-gray-500 hover:text-white px-3 py-3 ml-4  rounded-md text-lg font-medium ">
                      Cart
                    </h2>
                  </Link>
                  <section className="mx-8">
                    <select className="py-5 px-16 border mx-8 rounded-lg ">
                      <option className="p-20">Bangalore</option>
                      <option>Chennai</option>
                      <option>Delhi</option>
                    </select>
                  </section>
                  <SearchBar />
                  <Link to="/login">
                    <h2 className="text-black-300  hover:bg-gray-500 hover:text-white px-3 py-3 ml-12 rounded-md text-lg font-medium border">
                      Login/Signup
                    </h2>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Opening main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/">
                  <h2 className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </h2>
                </Link>

                <Link to="/login">
                  {" "}
                  <h2 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </h2>
                </Link>

                <Link to="/register">
                  {" "}
                  <h2 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Register
                  </h2>
                </Link>
              </div>
            </div>
          )}
        </Transition> */}
      </nav>
    </div>
  );
}

export default Header;
