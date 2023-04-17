import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import App from "./Components/App/App";

import "./fonts/Montserrat-Medium.ttf";
import "./fonts/Montserrat-SemiBold.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/tweets-test">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
