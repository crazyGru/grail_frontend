import React from "react";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ title, price, items }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pricing");
  };

  return (
    <div
      className="pricing-card border border-[#2b4099] p-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto bg-[#f9f9f9] cursor-pointer transition-transform duration-300 hover:bg-[#e0e0e0] hover:shadow-lg hover:scale-105"
      onClick={handleClick}
    >
      <div className="card-header text-center mb-4 border-b border-[#2b4099] pb-2">
        <div className="pricing-title font-bold text-xl md:text-2xl text-black">
          {title}
        </div>
        <div className="pricing-price font-bold text-3xl text-[#2b4099]">
          {price}
        </div>
      </div>
      <ul className="flex flex-col items-start justify-start list-disc pl-5">
        {items.map((item, index) => (
          <div className="text-lg md:text-base text-gray-800 mb-2" key={index}>
            - {item}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
