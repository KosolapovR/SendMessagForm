import React from "react";
import "./styles.css";
import Logo from "./sharedComponents/logo/Logo";
import MainBlock from "./blocks/mainBlock/MainBlock";
import HistoryBlock from "./blocks/historyBlock/HistoryBlock";

export default function App() {
  return (
    <div className="App">
      <div className="content_wrapper">
        <Logo />
        <MainBlock />
        <HistoryBlock />
      </div>
    </div>
  );
}
