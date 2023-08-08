import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Error from "./components/404";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import App from './components/Layout';
// import App from "./components/Layout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Root from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";
import Auth from "./components/Auth";
import UserProvider from "./context/UserProvider";
import SearchProvider from "./context/SearchProvider";
import PrivateRoutes from "./utils/PrivateRoute";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <UserProvider>
      <SearchProvider>
        <BrowserRouter>
          <React.StrictMode>
            <React.Fragment>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/homepage" element={<Root />} />
                </Route>

                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<Login />} />
                <Route path="/error" element={<Error />} />
              </Routes>
            </React.Fragment>
          </React.StrictMode>
        </BrowserRouter>
      </SearchProvider>
    </UserProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
