import { Col } from "antd";
import React from "react";
import moment from "moment";
export const Bars = (props) => {
  const divisor = 7;
  const data = props.data;
  let maxValue = 0;
  for (let i = 0; i < data.length; i++) {
    if (maxValue < data[i].amount) maxValue = data[i].amount;
  }

  const onEnter = (e) => {
    const element = e.target.classList;
    element.toggle("active");
    const amountElem = document.getElementById(`bar-${e.target.id}`);
    amountElem.classList.toggle("active-amount");
  };
  const onLeave = (e) => {
    const element = e.target.classList;
    element.toggle("active");
    const amountElem = document.getElementById(`bar-${e.target.id}`);
    amountElem.classList.toggle("active-amount");
  };
  return data.map((e) => {
    const dayStr =
      moment()._locale._weekdaysShort[moment().day() == 7 ? 0 : moment().day()];

    const index = data.indexOf(e);
    return (
      <Col className="chart--bar" key={index}>
        <div className="bar--amount active-amount" id={`bar-${index}`}>
          {data[index].amount}
        </div>
        <div
          id={`${index}`}
          className={`bar ${
            data[index].day == dayStr.toLowerCase() ? "bar--blue" : "bar--red"
          }`}
          style={{ height: `${data[index].amount / divisor}rem` }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        />
        {data[index].day}
      </Col>
    );
  });
};
