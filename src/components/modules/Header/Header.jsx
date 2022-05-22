import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TodoistLogo from "../../../assets/icons/todoist_logo.svg";

import { BsPlus } from "react-icons/bs";

import "./Header.scss";

import Button from "../Button/Button";

const Header = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const routerNavigate = useNavigate();

  const handleLoginClickEvent = (event) => {
    routerNavigate("/login");
  };

  const handleSignupClickEvent = (event) => {
    routerNavigate("/signup");
  };

  const handleLogoClickEvent = (event) => {
    routerNavigate("/todos");
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left-side">
          <div className="header__logo">
            <img onClick={handleLogoClickEvent} src={TodoistLogo} alt="todoist_logo" />
          </div>
          <div className="header__search-bar"></div>
        </div>

        <div className="header__right-side">
          <div className="header__icon">
            <BsPlus />
          </div>
          <div className="header__help"></div>
          <div className="header__authentication">
            {userIsLoggedIn && <div className="header__authentication__user-avatar"></div>}

            {!userIsLoggedIn && (
              <div className="header__authentication__buttons">
                <div className="header__authentication__button">
                  <Button buttonClickHandler={handleLoginClickEvent} label="Login" type="button" style="outline" />
                </div>
                <div className="header__authentication__button">
                  <Button buttonClickHandler={handleSignupClickEvent} label="Sign up" type="button" style="outline" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
