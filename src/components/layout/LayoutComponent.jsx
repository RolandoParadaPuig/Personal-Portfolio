import React from "react";
import { ContentComponent } from "../contentComponent/ContentComponent";
import { HeaderComponent } from "../headerComponent/HeaderComponent";
import { NavComponent } from "../navComponent/NavComponent";

export const LayoutComponent = () => {
  return (
    <>
      <HeaderComponent />
      <NavComponent />
      <ContentComponent />
    </>
  );
};
