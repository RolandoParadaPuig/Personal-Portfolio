import { Col, Row } from "antd";
import React from "react";
import "./chartFooter.css";
export const ChartFooter = () => {
  return (
    <div className={"chart--footer"}>
      <Row justify="space-between" align="bottom">
        <Col span={10}>
          <p className="chart--footer--p">
            Total this month
            <br />
            <span className="chart--footer--value">$478.33</span>
          </p>
        </Col>
        <Col span={10} style={{ textAlign: "end" }}>
          <p className="chart--footer--p">
            <span className="chart--footer--persentage">+2.4%</span>
            <br />
            from last month
          </p>
        </Col>
      </Row>
    </div>
  );
};
