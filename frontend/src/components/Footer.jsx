import { Link } from "react-router-dom";
import insta from "../constants/images/insta.jpeg";
import facebook from "../constants/images/facebook.png";
import twitter from "../constants/images/twitter.png";
// import { FacebookIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="flex-col bg-gray-200 px-12">
      <div className=" mb-6 p-4">
        <img src={facebook} className="w-20 h-20" alt="" />
      </div>
      <div className="flex justify-between  ">
        <div className="flex gap-12 ">
          <div className="mr-0    lg:block">
            <h2 className="mb-2 text-2xl font-semibold text-black uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-600 text-xl dark:text-gray-400 font-medium">
              <li className="mb-2">
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="hover:underline">
                  Terms & conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/anti-discrimination" className="hover:underline">
                  Anti-discrimination
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-0 hidden    lg:block">
            <h2 className="mb-2 text-2xl font-semibold text-black uppercase dark:text-white">
              For Partners
            </h2>
            <ul className="text-gray-600 text-xl dark:text-gray-400 font-medium">
              <li className="mb-2">
                <Link to="/registerfortradies" className="hover:underline">
                  Register for tradies
                </Link>
              </li>
            </ul>
          </div>

          <div className="ml-2 hidden    lg:block">
            <h2 className="mb-2 text-2xl font-semibold text-black uppercase dark:text-white">
              For Customers
            </h2>
            <ul className="text-gray-600 text-xl dark:text-gray-400 font-medium">
              <li className="mb-2">
                <Link to="/review" className="hover:underline">
                  Review
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block flex-col  justify-between">
          <div className="text-center">
            <div className="text-black text-3xl">Social Media</div>
            <div className="sm:flex justify-center gap-4 ">
              <Link to="/instagram">
                <img src={insta} className="w-12 rounded-full" alt="" />
              </Link>
              <Link to="/facebook">
                <img src={facebook} className="w-12 rounded-full" alt="" />
              </Link>
              <Link to="/instagram">
                <img src={twitter} className="w-14 rounded-full" alt="" />
              </Link>
            </div>
          </div>

          <div className="text-2xl text-center p-2">Download app on</div>
          <div className="flex gap-2 p-2">
            <Link
              className="flex items-center justify-center w-48 text-black
            bg-transparent border border-black h-14 rounded-xl hover:bg-gray-300"
            >
              {" "}
              <div className="w-4">
                <img
                  className="h-full w-full"
                  src="https://www.svgrepo.com/show/394180/google-play.svg"
                />
              </div>
              <div className="">
                <div className="text-sm font-extrabold">Download on the</div>
                <div className="text-2xl">Google Play</div>
              </div>
            </Link>
            <Link
              type="button"
              className="flex items-center justify-center w-48 text-black bg-transparent border border-black h-14 rounded-xl hover:bg-gray-300"
            >
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width={30}>
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-2xl font-semibold">
                  App Store
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="underline border border-gray-400 shadow-2xl  text-black"></div>
        <footer className="footer footer-center p-2 mt-6 bg-base-300 text-lg text-black">
          <aside>
            <p>Copyright © 2023 Tradies Company - All right reserved </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
