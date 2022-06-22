import React, { useEffect, useState } from "react";
import "./interactiveBody.css";
export const InteractiveBody = () => {
  const [radioSelected, setRadioSelected] = useState(true);
  const [radioValue, setRadioValue] = useState("monthly");
  const [billingPrice, setBillingPrice] = useState(16);
  const onSubmit = (e) => {
    e.preventDefault();
    const formTarget = e.target;
    let billing = {};
    formTarget.billingTime.value == "monthly"
      ? (billing = {
          pageViews: billingPrice * 15 - 140,
          price: formTarget.billingPrice.value,
          time: formTarget.billingTime.value,
        })
      : (billing = {
          pageViews: billingPrice * 15 - 140,
          price:
            formTarget.billingPrice.value -
            formTarget.billingPrice.value * 0.25,
          time: formTarget.billingTime.value,
        });

    alert(
      `you have to pay $${billing.price}/month Billing ${billing.time} for ${billing.pageViews}K pageviews`
    );
  };
  const radioClick = () => {
    setRadioSelected(!radioSelected);
    const radioChecked = document.getElementById("radioChecked");
    radioChecked.classList.toggle("radio-checked-left");
  };
  const priceChange = (e) => {
    const target = e.target;
    setBillingPrice(target.value);
    const value = target.value;
    const min = target.min;
    const max = target.max;
    const bgWidthValue = ((value - min) / (max - min)) * 100;
    target.style.background = `linear-gradient(90deg, rgba(40, 55, 71, 0) 0%, rgba(54, 156, 224, 0) ${bgWidthValue}%, var(--Light-Grayish-Blue-Empty-Slider-Bar) ${bgWidthValue}%, var(--Light-Grayish-Blue-Empty-Slider-Bar) 100%)`;
  };
  useEffect(() => {}, [billingPrice, setBillingPrice]);
  return (
    <div>
      <form
        name="BillingForm"
        onSubmit={onSubmit}
        className="interactive__body--form"
      >
        <h2 className="interactive__body--title grayish-blue-text">
          {billingPrice * 15 - 140}K PAGEVIEWS
        </h2>
        <div className="interactive__body--slider-content">
          <label
            for="billingPrice"
            className="interactive__body--slider-fill"
          />
          <input
            onChange={priceChange}
            name="billingPrice"
            id="billingPrice"
            type="range"
            min={10.0}
            max={22.0}
            step={0.5}
            value={billingPrice}
            className="interactive__body--slider"
          />
        </div>
        <div className="interactive__body--price--text-container">
          <span className="dark-blue-color interactive__body--price-text">
            $
            {radioSelected
              ? `${billingPrice}`
              : `${billingPrice - billingPrice * 0.25}`}
          </span>
          <span className="grayish-blue-text">/month</span>
        </div>
        <div className="interactive__body--billing-time">
          <div
            onClick={radioClick}
            className="billing-radio-text grayish-blue-text"
          >
            Monthly Billing
          </div>
          <div className="interactive__body--biling-radio" onClick={radioClick}>
            <div id="radioChecked" className="radio-checked " />
            <input
              id="monthly"
              type="radio"
              value={"monthly"}
              name="billingTime"
              checked={radioSelected}
              onChange={radioClick}
            />
            <input
              id="yearly"
              type="radio"
              value={"yearly"}
              name="billingTime"
              checked={!radioSelected}
              onChange={radioClick}
            />
          </div>
          <div
            onClick={radioClick}
            className="billing-radio-text-right grayish-blue-text "
          >
            Yearly Billing <span className="billing-radio-discount">-25%</span>
          </div>
        </div>
        <div className="interactive__body-checked-text grayish-blue-text">
          <div>
            <div className="checked-icon" /> Unlimited Websites
          </div>
          <div>
            <div className="checked-icon" /> 100% data ownership
          </div>
          <div>
            <div className="checked-icon" /> Email reports
          </div>
        </div>
        <button className="interactive__body--submit-btn" type="submit">
          Start my trial
        </button>
      </form>
    </div>
  );
};
