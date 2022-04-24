import React from "react";

import "./Button.scss";

const Button = ({ label, type, style, icon }) => {
  return (
    <button type={type} className={`button button-${style}`}>
      {icon ? icon : ""} {label ? label : ""}
    </button>
  );
};
export default Button;
