import React from 'react';

import { FaSun, FaPlusCircle } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="./images/logo.png" alt="Todoist" />
        </div>

        <div className="settings">
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
