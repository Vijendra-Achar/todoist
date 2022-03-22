import React from "react";

import TodoistLogo from "../../../assets/icons/todoist_logo.svg";

import { MdMenu } from "react-icons/md";

import "./Header.scss";

const Header = () => {
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
          <div className="header__add-task"></div>
          <div className="header__help"></div>
          <div className="header__authentication">
            <div className="header__authentication__user-avatar"></div>
            <div className="header__authentication__buttons">
              <div className="header__authentication__button">Login</div>
              <div className="header__authentication__button">Sign up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
