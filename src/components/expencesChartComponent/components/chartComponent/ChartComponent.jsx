import { Col, Layout, Row } from "antd";
import React from "react";
import { ChartBody } from "./ChartBody";
import { ChartHeader } from "./ChartHeader";
import "./chartComponent.css";
export const ChartComponent = () => {
  return (
    <div className={"chart--component"}>
      <ChartHeader />
      <ChartBody />
    </div>
  );
};
