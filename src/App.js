import React from 'react';

import { Content } from './components/layout/Content/Content';
import { Header } from './components/layout/Header/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};
