import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivetGard = () => {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivetGard;
