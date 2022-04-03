import React, { useState } from "react";

import TodoistLogo from "../../../assets/icons/todoist_logo.svg";

import { FaPlus } from "react-icons/fa";

import "./Header.scss";

const Header = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left-side">
          <div className="header__logo">
            <img src={TodoistLogo} alt="todoist_logo" />
          </div>
          <div className="header__search-bar"></div>
        </div>

        <div className="header__right-side">
          <div className="header__add-task">
            <FaPlus />
          </div>
          <div className="header__help"></div>
          <div className="header__authentication">
            {userIsLoggedIn && <div className="header__authentication__user-avatar"></div>}

            {!userIsLoggedIn && (
              <div className="header__authentication__buttons">
                <div className="header__authentication__button button button-outline">Login</div>
                <div className="header__authentication__button button button-outline">Sign up</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
