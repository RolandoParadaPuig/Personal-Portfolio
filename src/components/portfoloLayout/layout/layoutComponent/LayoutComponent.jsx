import React from "react";
import { Outlet } from "react-router";
import { ContentComponent } from "../contentComponent/ContentComponent";
import { FooterComponent } from "../footerComponent/FooterComponent";
import { HeaderComponent } from "../headerComponent/HeaderComponent";
import "./layoutComponent.css";
export const LayoutComponent = () => {
  return (
    <div className={"portfolio--lauyot-component"}>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
};
