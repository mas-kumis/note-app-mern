import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");
    if (!adminInfo) {
      navigate("/login");
    }
  }, [navigate]);

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
export default PrivateRoute;
