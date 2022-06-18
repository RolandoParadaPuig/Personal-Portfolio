import { message } from "antd";
import React from "react";
import "./introBodyComponent.css";

export const IntroBodyComponent = () => {
  return (
    <div className={"body--container"}>
      <div className={"body--image-container"}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/rolando-portfolio.appspot.com/o/intro-section-component%2Fimg-mobile%2Fimage-hero-mobile.png?alt=media&token=6d813d29-de0b-4ec6-9fcd-50388bf2ddd4"
          className="body--image-mobile"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/rolando-portfolio.appspot.com/o/intro-section-component%2Fimg-desktop%2Fimage-hero-desktop.png?alt=media&token=9e754a29-e031-4f13-b953-44d8de5caa72"
          className="body--image-desktop"
        />
      </div>
      <div className="body--main-container">
        <div className="body--text-container">
          <h1 className="body--title">Make remote work</h1>
          <p className="body--text-content">
            Get your team in sync, no matter your location. Streampline
            processes, create team rituals, and watch productivity soar
          </p>
          <button
            onClick={() => {
              message.success("you clicked!");
            }}
            className="body--button"
          >
            Learn more
          </button>
        </div>
        <div className="body--client-container">
          <div className="body--client databiz" />
          <div className="body--client audiophile" />
          <div className="body--client meet" />
          <div className="body--client maker" />
        </div>
      </div>
    </div>
  );
};
