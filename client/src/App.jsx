import { RouterProvider } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "./App.css";
import router from "./route/route";

function App() {
  return (
    <>
      <ToastContainer
        style={{ zIndex: "999999" }}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
