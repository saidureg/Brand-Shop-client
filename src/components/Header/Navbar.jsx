import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-nav.png";
import Theme from "../Theme/Theme";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvide";
import swal from "sweetalert";
import { AiOutlineSetting, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        return swal(
          "Thanks for visiting the site",
          "Sign-out successful",
          "warning"
        );
      })
      .catch((error) => {
        return swal("Oops!", error.message, "error");
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/my-cart">My Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-[120px] md:w-[150px]" src={logo} alt="brand logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        <div className="mr-2 md:mr-5 hidden md:flex">
          <Theme />
        </div>

        {user ? (
          <>
            <div className="dropdown dropdown-end md:mr-5">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 md:w-10 rounded-full">
                  <img className="" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-1 divide-y-2 space-y-4 md:p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-48 md:w-52 lg:w-56"
              >
                <li>
                  <a className="gap-3 text-sm md:text-base lg:text-lg">
                    <CgProfile />
                    {user?.displayName}
                  </a>
                </li>
                <li>
                  <a className="gap-3 text-base md:text-lg lg:text-xl">
                    <AiOutlineHome /> Dashboard
                  </a>
                </li>
                <li>
                  <a className="gap-3 text-base md:text-lg lg:text-xl">
                    <AiOutlineSetting /> Settings
                  </a>
                </li>
                <div className="flex md:hidden justify-evenly items-center text-xs">
                  <p>Change theme</p>
                  <span>
                    <Theme />
                  </span>
                </div>
              </ul>
            </div>
            <button
              onClick={handleLogOut}
              className="btn hover:text-[#7B014C] bg-[#7B014C] text-[#F1EAEA]"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn hover:text-[#7B014C] bg-[#7B014C] text-[#F1EAEA]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
