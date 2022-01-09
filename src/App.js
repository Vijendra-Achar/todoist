import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Content } from './components/layout/Content/Content';
import { Header } from './components/layout/Header/Header';
import { Login } from './components/layout/Users/Login/Login';

import './App.scss';

export const App = () => {
  return (
    <div>
      {/* Main Header */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
