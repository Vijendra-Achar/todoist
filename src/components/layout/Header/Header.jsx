import React from 'react';

import { FaSun, FaPlus, FaSignInAlt } from 'react-icons/fa';

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
              <FaPlus className="header__icon" />
            </li>
            <li>
              <FaSun className="header__icon" />
            </li>

            <li>
              <FaSignInAlt className="header__icon" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
