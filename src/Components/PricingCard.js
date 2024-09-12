import React from "react";
import "./PricingCard.css";

const PricingCard = ({ title, price, items }) => {
  return (
    <div className="pricing-card">
      <div className="card-header">
        <div className="pricing-title">{title}</div>
        <div className="pricing-price">{price}</div>
      </div>
      <ul className="pricing-items">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
