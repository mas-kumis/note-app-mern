import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { adminInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!adminInfo) {
      navigate("/login");
    }
  }, [adminInfo, navigate]);

  return children;
};

export default PrivateRoute;
