import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex bg-slate-50 shadow-xl">
        <Link to="/">
          {/* <img className="h-32" src="#" /> */}
          <h2 className="font-bold text-4xl p-5 m-3 ">Tradies</h2>
        </Link>
        <ul className="flex flex-wrap ml-0 lg: ml-50 md:ml-50 xl:ml-50  text-2xl ">
          <li className="m-10">
            <Link to="/"> Home</Link>
          </li>
          <li className="m-10">
            <Link to="/login"> Login</Link>
          </li>
          <li className="m-10">
            <Link to="/register"> Register</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
