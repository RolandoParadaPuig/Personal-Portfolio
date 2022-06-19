import React from "react";
import "./tecnologies.css";
import { AiOutlineHtml5, AiFillApi } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
export const Tecnologies = () => {
  return (
    <section id="tecnologies" className={"portfolio--tecnologies"}>
      <h2 className="tecnlogies-title">Tecnologies i Use</h2>
      <div className="tecnologies-container">
        <a
          target="_blank"
          href="https://www.w3schools.com/html/default.asp"
          className="tecnologies-html"
        >
          <AiOutlineHtml5 />
        </a>
        <a
          target="_blank"
          href="https://www.w3schools.com/css/default.asp"
          className="tecnologies-css"
        >
          <IoLogoCss3 />
        </a>
        <a
          target="_blank"
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          className="tecnologies-js"
        >
          <IoLogoJavascript />
        </a>
        <a
          target="_blank"
          href="https://reactjs.org/"
          className="tecnologies-react"
        >
          <FaReact />
        </a>
        <a
          target="_blank"
          href="https://firebase.google.com/"
          className="tecnologies-firebase"
        >
          <SiFirebase />
        </a>
        <a
          target="_blank"
          href="https://aws.amazon.com/what-is/api/?nc1=h_ls"
          className="tecnologies-api"
        >
          <AiFillApi />
        </a>
        <a
          target="_blank"
          href="https://www.json.org/json-en.html"
          className="tecnologies-json"
        >
          <VscJson />
        </a>
      </div>
    </section>
  );
};
