import { useSelector } from "react-redux";
import { authSelectorsSlice } from "../features/auth/authSlice";

const UseAuth = () => {
  const { user } = useSelector(authSelectorsSlice);
  return { auth: user };
};

export default UseAuth;
