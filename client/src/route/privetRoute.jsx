import Layout from "../component/layouts/Layout";
import PrivetGard from "./PrivetGard";
import Dashboard from "../pages/dashbord/Dashboard";

// create privet router card
export const privetRoute = [
  {
    element: <PrivetGard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            element: <Dashboard />,
            path: "/dashboard",
            children: [
              {
                path: "profile-setting",
                element: "",
              },
            ],
          },
        ],
      },
    ],
  },
];
