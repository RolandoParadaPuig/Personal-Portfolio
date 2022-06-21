import React from "react";
import "./footerComponent.css";
export const FooterComponent = () => {
  return (
    <footer className="portfolio--footer-content">
      <div>
        <span>
          web developed by <br />
          <a href="#" target="_blank">
            @RolandoParadaPuig
          </a>
        </span>
      </div>
      <div>
        <span>
          Web hosted with <br />
          <a href="#" target="_blank">
            @Firebase
          </a>
          hosting servises
        </span>
        <br />
        <span>
          mail servises by{" "}
          <a href="#" target="_blank">
            @emailJs
          </a>
        </span>
      </div>
    </footer>
  );
};
