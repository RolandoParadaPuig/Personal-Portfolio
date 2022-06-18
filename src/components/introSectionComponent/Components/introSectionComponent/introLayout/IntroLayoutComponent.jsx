import React from "react";
import { IntroBodyComponent } from "../introBody/IntroBodyComponent";
import { IntroHeaderComponent } from "../introHeader/IntroHeaderComponent";
import "./introLayoutComponent.css";
export const IntroLayoutComponent = () => {
  return (
    <section className={"intro--Layout"}>
      <IntroHeaderComponent />
      <IntroBodyComponent />
    </section>
  );
};
