import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvide";

import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineSetting,
  AiOutlineHeart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const LeftSideNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
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
  return (
    <div className="border py-6 mx-6 lg:mx-0">
      <div>
        {user && (
          <>
            <div className="p-2 lg:p-4">
              <div className="border-b text-center">
                <label tabIndex={0} className="avatar">
                  <div className="w-20 rounded-full mb-4">
                    <img className="w-full" src={user?.photoURL} />
                  </div>
                </label>
                <h3 className="text-xl font-semibold text-gray-700">
                  {user?.displayName}
                </h3>
                <p className="text-xl font-semibold text-gray-500 my-4">
                  {user?.email}
                </p>
              </div>
              <ul className="mt-10 p-1 space-y-12">
                <li>
                  <NavLink className="text-xl flex items-center gap-3">
                    <AiOutlineHome />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-cart"
                    className="text-xl flex items-center gap-3"
                  >
                    <AiOutlineShoppingCart /> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-xl flex items-center gap-3">
                    <AiOutlineSetting /> Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-xl flex items-center gap-3">
                    <AiOutlineHeart /> Wishlist
                  </NavLink>
                </li>
              </ul>
              <button
                onClick={handleSignOut}
                className="btn hover:text-[#7B014C] bg-[#7B014C] text-[#F1EAEA] w-full mt-10"
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSideNavbar;
