import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./Styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// // export
export { Route, Routes } from "react-router-dom";

// // components
export { Home } from "./Pages/Home/Provider";
export { About } from "./Pages/About/Provider";
export { House } from "./Pages/House/Provider";
export { Members } from "./Pages/Members/container";
export { Photos } from "./Pages/Photos/container";
export { Cookies } from "./Pages/Cookies/container";
export { Census } from "./Pages/Census/container";
export { Links } from "./Pages/Links/container";

// Menu
export { MenuProvider } from "./Contexts/MenuContext";
export { FreeCompanyProvider } from "./Contexts/FreeCompanyContext";
