import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../modules/Sidebar/Sidebar";

import "./TodosMain.scss";

const Home = () => {
  return (
    <div className="main__container">
      <div className="main__sidebar">
        <Sidebar />
      </div>
      <div className="main__outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
