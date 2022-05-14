import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/modules/Header/Header.jsx";
import Login from "./components/pages/Login/Login.jsx";
import Signup from "./components/pages/Signup/Signup.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Sidebar from "./components/modules/Sidebar/Sidebar.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="App__container">
        <div className="App__sidebar">
          <Sidebar />
        </div>

        <div className="App__pages">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
