import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";
import { ContentComponent } from "../contentComponent/ContentComponent";
import { HeaderComponent } from "../headerComponent/HeaderComponent";
import { NavComponent } from "../navComponent/NavComponent";
const { Content } = Layout;
export const LayoutComponent = () => {
  return (
    <>
      <HeaderComponent />
      <NavComponent />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};
