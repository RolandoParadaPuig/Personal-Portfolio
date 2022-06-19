import React from "react";
import "./contentComponent.css";

import { About } from "./about/About";
import { Tecnologies } from "./tecnologies/Tecnologies";
import { MyWork } from "./myWork/MyWork";
import { Contact } from "./contact/Contact";
import { Social } from "./social/Social";
export const ContentComponent = () => {
  return (
    <main className="portfolio--main-content">
      <About />
      <Tecnologies />
      <MyWork />
      <Contact />
      <Social />
    </main>
  );
};
