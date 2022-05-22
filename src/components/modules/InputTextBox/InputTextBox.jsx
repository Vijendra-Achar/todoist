import React from "react";

import "./InputTextBox.scss";

const InputTextBox = ({ type, label }) => {
  return (
    <div className="input-box">
      <input className="input-box__text" type={type} />
      <span className="input-box__placeholder">{label}</span>
    </div>
  );
};

export default InputTextBox;
