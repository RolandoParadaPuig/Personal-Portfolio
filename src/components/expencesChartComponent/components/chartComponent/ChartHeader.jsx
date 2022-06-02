import { Col, Row } from "antd";
import React from "react";
import "./chartHeader.css";
export const ChartHeader = () => {
  return (
    <div className={"chart--header"}>
      <Row justify={"space-between"} align={"middle"}>
        <Col span={20}>
          <h2 className="chart--title">
            My balance <br />{" "}
            <span className="chart--title--balance">$921.48</span>
          </h2>
        </Col>
        <Col span={4}>
          <div className="chart--title--circle" />
        </Col>
      </Row>
    </div>
  );
};
