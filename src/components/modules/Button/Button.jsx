import React from "react";

import "./Button.scss";

const Button = ({ label, type, style, icon, buttonClickHandler }) => {
  return (
    <button onClick={buttonClickHandler} type={type} className={`button button-${style}`}>
      {icon ? icon : ""} {label ? label : ""}
    </button>
  );
};
export default Button;
