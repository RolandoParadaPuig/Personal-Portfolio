import React, { useState } from "react";
import "./adviceFooter.css";
export const AdviceFooter = (props) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const setAdvice = props.setAdvice;
  const setAdviceNumber = props.setAdviceNumber;
  const randomClick = async () => {
    setBtnDisabled(true);
    setAdvice("");
    try {
      const url = "https://api.adviceslip.com/advice";
      const res = await fetch(url);
      const data = await res.json();
      setAdvice(data.slip.advice);
      setAdviceNumber(data.slip.id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <footer className={"advice--footer"}>
      <div className={"advice--footer-separator"}></div>
      <button
        disabled={btnDisabled}
        onClick={randomClick}
        className={"advice--footer-button"}
      >
        <div className={"advice--footer-dice"} />
      </button>
    </footer>
  );
};
