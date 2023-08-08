import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import Root from "./components/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import UserProvider from "./context/UserProvider";
import SearchProvider from "./context/SearchProvider";
import Error from "./components/404";
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <>
      <UserProvider>
        <SearchProvider>
          <BrowserRouter>
            <React.Fragment>
              <Routes>
                <Route path="/homepage" element={<Root />} />
                <div className="appBg">
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/" element={<Login />} />
                </div>
                <Route path="/error" element={<Error />} />
              </Routes>
            </React.Fragment>
          </BrowserRouter>
        </SearchProvider>
      </UserProvider>
    </>
  );
}

export default App;
