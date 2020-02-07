import React from "react";
import s from "./historyBlock.module.css";

let HistoryBlock = () => {
  return (
    <div className={s.history_block_wrapper}>
      <div className={s.history_block_content} />
    </div>
  );
};

export default HistoryBlock;
