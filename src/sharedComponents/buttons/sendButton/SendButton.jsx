import React from "react";
import s from "./sendButton.module.css";

let SendButton = props => {
  return <button className={s.sendButton}>{props.title}</button>;
};

export default SendButton;
