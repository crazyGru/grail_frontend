import "./PayCard.css";
import { LuCheckCircle } from "react-icons/lu";

const PayCard = ({ title, price, duration, description, items, selected }) => {
  return (
    <div className={`pay-card ${selected ? "selected" : ""}`}>
      {selected && <div className="badge">⭐Most Popular</div>}
      <div className="pay-title">{title}</div>
      <div className="pay-price">{price}</div>
      <div className="description">{description}</div>
      <div>{duration}</div>
      <div className="horizontal-grid" />
      <div className="items-list">
        {" "}
        {/* Added unordered list for items */}
        {items.map((item, index) => (
          <div key={index} className="price-item">
            <LuCheckCircle />
            {item}
          </div> // Render each item
        ))}
      </div>
      <button className="get-started-button">Get Started</button>
    </div>
  );
};

export default PayCard;
