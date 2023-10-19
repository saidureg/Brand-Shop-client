import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
