import DonerRegister from "../pages/auth/DonerRegister";
import Layout from "../component/layouts/Layout";
import Login from "../pages/auth/Login";
import PublicGard from "./PublicGard";
import Dashboard from "../pages/dashbord/Dashboard";
import Register from "../pages/auth/Register";

// create public route
export const publicRoute = [
  {
    element: <PublicGard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/doner-register",
            element: <DonerRegister />,
          },
        ],
      },
    ],
  },
];
// PublicGard
