import React from 'react';

import { VscAdd, VscSymbolColor, VscSignIn } from 'react-icons/vsc';

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
              <VscAdd className="header__icon" />
            </li>
            <li>
              <VscSymbolColor className="header__icon" />
            </li>

            <li>
              <VscSignIn className="header__icon" />
              <p> Sign In </p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
