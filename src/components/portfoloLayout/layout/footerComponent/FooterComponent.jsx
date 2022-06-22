import React from "react";
import "./footerComponent.css";
export const FooterComponent = () => {
  const onClick = (e) => {
    const footerElem = document.getElementById("portfolio--footer");
    const footerBtn = document.getElementById("portfolio-btn-expand");
    const footertoggleArrow = document.getElementById(
      "porfolio-footer-btn-icon"
    );
    const footerContent = document.getElementById("portfolio-footer-content");
    footerContent.classList.toggle("expanded");
    footerElem.classList.toggle("expanded");
    footerBtn.classList.toggle("expanded--btn");
    footerBtn.classList.toggle("portfolio--footer-btn");

    footertoggleArrow.classList.toggle("arrow-down");
    footertoggleArrow.classList.toggle("arrow-up");
  };
  return (
    <footer id="portfolio--footer" className="portfolio--footer">
      <button
        id="portfolio-btn-expand"
        onClick={onClick}
        className="portfolio--footer-btn"
      >
        <div
          id="porfolio-footer-btn-icon"
          className="portfolio--footer-icon-container arrow-up"
        />
      </button>
      <div id="portfolio-footer-content" className="portfolio--footer-content">
        <div>
          <span>
            web developed by <br />
            <a
              href="https://www.linkedin.com/in/rolando-parada-puig/"
              target="_blank"
            >
              @RolandoParadaPuig
            </a>
          </span>
        </div>
        <div>
          <span>
            Web hosted with <br />
            <a href="https://firebase.google.com/" target="_blank">
              @Firebase
            </a>{" "}
            hosting servises
          </span>
          <br />
          <span>
            mail servises by{" "}
            <a href="https://www.emailjs.com/" target="_blank">
              @emailJs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
