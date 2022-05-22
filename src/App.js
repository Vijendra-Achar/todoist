import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/modules/Header/Header.jsx";
import Login from "./components/pages/Login/Login.jsx";
import Signup from "./components/pages/Signup/Signup.jsx";
import TodosMain from "./components/pages/TodosMain/TodosMain.jsx";
import TodosToday from "./components/pages/TodosMain/TodosToday/TodosToday.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="App__container">
        <Routes>
          <Route path="/" element={<Navigate replace to="/todos" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todos" element={<TodosMain />}>
            <Route path="today" element={<TodosToday />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
