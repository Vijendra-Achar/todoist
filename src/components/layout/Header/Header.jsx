import React from 'react';

import { FaSun, FaPlusCircle } from 'react-icons/fa';

import './Header.scss';
// import './../../../scss/_common.scss';

import TodoistLogo from './../../../assets/todoist_logo.svg';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav className="container">
        <div>
          <img className="header__logo" src={TodoistLogo} alt="Todoist" />
        </div>

        <div className="header__settings">
          <ul>
            <li>
              <FaPlusCircle />
            </li>
            <li>
              <FaSun />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
