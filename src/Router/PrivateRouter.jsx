import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvide";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};
export default PrivateRouter;
