import React from "react";
import s from "./textAreaField.module.css";

let TextAreaField = props => {
  return (
    <div className={s.textAreaField}>
      <label>{props.title}</label>
      <div className={s.input_wrapper}>
        <textarea />
      </div>
    </div>
  );
};

export default TextAreaField;
