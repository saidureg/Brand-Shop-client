import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Header/Navbar";

const Root = () => {
  return (
    <div className="font-poppins">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Root;
