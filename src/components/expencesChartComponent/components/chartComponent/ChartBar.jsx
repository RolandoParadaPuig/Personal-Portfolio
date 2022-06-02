import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { data } from "../../data/data.json";
import { Bars } from "./Bars";
import "./chartBar.css";
export const ChartBar = (props) => {
  useEffect(() => {}, []);
  return (
    <Row align="bottom" justify="space-between">
      <Bars data={data} />
    </Row>
  );
};
