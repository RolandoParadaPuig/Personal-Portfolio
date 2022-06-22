import React from "react";
import "./interactiveLayout.css";
import { InteractiveBody } from "../interactiveBody/InteractiveBody";
import { InteractiveHeader } from "../interactiveHeader/InteractiveHeader";
export const InteractiveLayout = () => {
  return (
    <main className="interactive__layout">
      <InteractiveHeader />
      <InteractiveBody />
    </main>
  );
};
