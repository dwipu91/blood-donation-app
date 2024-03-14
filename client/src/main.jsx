import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import "./assets/froentend/css/bootstrap.min.css";
import "./assets/froentend/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/froentend/plugins/fontawesome/css/all.min.css";
import "./assets/froentend/css/feather.css";
import "./assets/froentend/plugins/apex/apexcharts.css";
import "./assets/froentend/css/custom.css";

import "./index.css";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
