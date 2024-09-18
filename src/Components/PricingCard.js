import React from "react";
import { useNavigate } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = ({ title, price, items }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pricing");
  };

  return (
    <div className="pricing-card" onClick={handleClick}>
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
