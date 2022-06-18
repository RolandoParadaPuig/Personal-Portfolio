import React from "react";
import "./contentComponent.css";

import { About } from "./about/About";
import { Tecnologies } from "./tecnologies/Tecnologies";
import { MyWork } from "./myWork/MyWork";
export const ContentComponent = () => {
  return (
    <main className="portfolio--main-content">
      <About />
      <Tecnologies />
      <MyWork />
      <section id="contact" className={"portfolio--contact"}>
        hi x 4
      </section>
      <section id="social" className={"portfolio--social"}>
        hi x 4
      </section>
    </main>
  );
};
