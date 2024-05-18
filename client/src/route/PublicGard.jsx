import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicGard = () => {
  const { user } = useSelector((state) => state.auth);

  if (localStorage.getItem("loginUser")) {
    return user ? <Navigate to="/dashboard" /> : <Outlet />;
  } else {
    return <Outlet />;
  }
};

// export default
export default PublicGard;
