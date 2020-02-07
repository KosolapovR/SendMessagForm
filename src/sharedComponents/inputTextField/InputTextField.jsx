import React from "react";
import s from "./inputTextField.module.css";

let InputTextField = props => {
  return (
    <div className={s.input_name_email}>
      <label>{props.title}</label>
      <div className={s.input_wrapper}>
        <input type="text" />
      </div>
    </div>
  );
};

export default InputTextField;
