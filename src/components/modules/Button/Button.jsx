import React from "react";

import "./Button.scss";

const Button = ({ label, type, buttonStyle, icon, buttonClickHandler }) => {
  return (
    <button onClick={buttonClickHandler} type={type} className={`button button-${buttonStyle}`}>
      {icon ? icon : ""} {label ? label : ""}
    </button>
  );
};
export default Button;
