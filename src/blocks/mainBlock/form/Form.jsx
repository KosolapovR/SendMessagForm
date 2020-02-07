import React from "react";
import s from "./form.module.css";
import InputNameEmailField from "../../../sharedComponents/inputNameEmailField/InputNameEmailField";
import InputTextField from "../../../sharedComponents/inputTextField/InputTextField";
import TextAreaField from "../../../sharedComponents/textAreaField/TextAreaField";
import UploadFile from "../../../sharedComponents/uploadFile/UploadFile";
import SendButton from "../../../sharedComponents/buttons/sendButton/SendButton";

let Form = () => {
  return (
    <div className={s.form}>
      <InputNameEmailField title="От кого" />
      <InputNameEmailField title="Кому" />
      <InputTextField title="Тема письма" />
      <TextAreaField title="Сообщение" />
      <UploadFile />
      <SendButton title="Отправить" />
    </div>
  );
};

export default Form;
