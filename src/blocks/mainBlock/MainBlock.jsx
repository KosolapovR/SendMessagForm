import React from "react";
import s from "./mainBlock.module.css";
import Form from "./form/Form";

let MainBlock = () => {
  return (
    <div className={s.main_block}>
      <h1>Отправлялка сообщений</h1>
      <Form />
    </div>
  );
};

export default MainBlock;
