import React from "react";

const InputTextBox = ({ type }) => {
  return (
    <div className="input-box">
      <input className="input-box__text" type={type} />
    </div>
  );
};

export default InputTextBox;
