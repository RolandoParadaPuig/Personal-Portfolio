import React from "react";
import { NavComponent } from "../navComponent/NavComponent";
import "./headerComponent.css";
export const HeaderComponent = () => {
  const onClick = (e) => {
    const navMenu = document.getElementById("navMenu");
    const mobileBtn = e.target.classList;
    mobileBtn.toggle("portfolio--header-mobile-btn-open");
    mobileBtn.toggle("portfolio--header-mobile-btn-closed");
    console.log();
    navMenu.classList.toggle("portfolio--nav-container");
    navMenu.classList.toggle("portfolio--nav-container-hidden");
  };
  return (
    <header className="portfolio--header--component">
      <button onClick={onClick} className="portfolio--header-mobile-btn">
        <div className="portfolio--header-mobile-btn-open" />
      </button>
      <NavComponent />
    </header>
  );
};
