import React from "react";
import s from "./inputField.module.css";

let InputNameEmailField = props => {
  return (
    <div className={s.input_name_email}>
      <label>{props.title}</label>
      <div className={s.input_name_email_wrapper}>
        <div className={s.input_wrapper}>
          <input type="text" placeholder="Имя" />
        </div>
        <div className={s.input_wrapper}>
          <input type="email" placeholder="Email" />
        </div>
      </div>
    </div>
  );
};

export default InputNameEmailField;
