import React from "react";

import InputTextBox from "../../modules/InputTextBox/InputTextBox";

import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__title">
        <InputTextBox type="text" />
      </div>
    </div>
  );
};

export default Login;
