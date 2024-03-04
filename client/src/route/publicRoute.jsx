import Layout from "../component/layouts/Layout";
import DonerRegister from "../pages/auth/DonerRegister";
import Loigin from "../pages/auth/Loigin";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashbord/Dashboard";

// create public route
export const publicRoute = [
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Loigin />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/doner-register",
        element: <DonerRegister />,
      },
    ],
  },
];
