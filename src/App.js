import React from 'react';

import { Content } from './components/layout/Content/Content';
import { Header } from './components/layout/Header/Header';

import './App.scss';

export const App = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};
