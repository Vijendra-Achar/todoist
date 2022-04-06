import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/modules/Header/Header.jsx";
import Login from "./components/pages/Login/Login.jsx";
import Home from "./components/pages/Home/Home.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
