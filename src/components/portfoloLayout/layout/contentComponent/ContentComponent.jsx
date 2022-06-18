import React from "react";
import "./contentComponent.css";

import { About } from "./about/About";
import { Tecnologies } from "./tecnologies/Tecnologies";
export const ContentComponent = () => {
  return (
    <main className="portfolio--main-content">
      <About />
      <Tecnologies />
      <section id="work" className={"work"}>
        hi x 3
      </section>
      <section id="contact" className={"contact"}>
        hi x 4
      </section>
      <section id="social" className={"social"}>
        hi x 4
      </section>
    </main>
  );
};
