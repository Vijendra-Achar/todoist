import React from 'react';

import './Login.scss';

import TodoistFullLogo from '../../../../assets/todoist_logo_full.svg';

import { FaGoogle, FaFacebookSquare } from 'react-icons/fa';

export const Login = () => {
  return (
    <div className="login container">
      <div className="login__box-container">
        {/* Logo */}
        <div className="login__logo">
          <img className="login__logo__image" src={TodoistFullLogo} alt="" />
        </div>

        <div className="login__title">
          <h2>Log in</h2>
        </div>

        {/* Social Logins */}
        <div className="login__socials">
          <div className="login__socials__button">
            <FaGoogle className="login__socials__icon google" />
            Continue with Google
          </div>
          <div className="login__socials__button">
            <FaFacebookSquare className="login__socials__icon facebook" />
            Continue with Facebook
          </div>
        </div>

        {/* divider */}
        <div className="login__divider">
          <span className="login__divider__text">OR</span>
        </div>

        {/* Login with Email and Password */}
        <div className="login__manual">
          <div className="login__manual input">
            <div className="input__label">Email</div>
            <input className="input__text" type="text" name="email" id="email" />
          </div>

          <div className="login__manual input">
            <div className="input__label">Password</div>
            <input className="input__password" type="password" name="password" id="password" />
          </div>

          {/* Forgot password */}
          <div className="login__forgot-password">Forgot your password?</div>
        </div>

        {/* Divider */}
        <div>
          <hr />
        </div>

        {/* Click for sign up */}
        <div className="login__signup">
          Don't hav an account? <span className="login__signup__button">Sign up</span>
        </div>
      </div>
    </div>
  );
};
