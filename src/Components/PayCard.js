import "./PayCard.css";
import { LuCheckCircle } from "react-icons/lu";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../utilis/api";
import { useSelector } from "react-redux";

const PayCard = ({
  title,
  price,
  duration,
  description,
  items,
  selected,
  planId,
}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleGetStarted = async () => {
    if (!user) {
      alert("Please sign in to proceed.");
      navigate("/signin");
      return;
    }

    try {
      const session = await fetch(
        `${
          process.env.REACT_APP_BACKEND_URL
        }/subscriptions/create-checkout-session?user_mail=${encodeURIComponent(
          user
        )}&plan_id=${planId}`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
          body: JSON.stringify({}), // Empty body as per the sample
        }
      );
      window.location.href = session.url; // Redirect to Stripe checkout
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div className={`pay-card ${selected ? "selected" : ""}`}>
      {selected && <div className="badge">⭐Most Popular</div>}
      <div className="pay-card-header">
        <div className="pay-title">{title}</div>
        <div className="pay-price">{price}</div>
        <div className="description">{description}</div>
        <div>{duration}</div>
      </div>
      {/* <div className="horizontal-grid" /> */}
      <div className="items-list">
        {items.map((item, index) => (
          <div key={index} className="price-item">
            <LuCheckCircle />
            {item}
          </div>
        ))}
      </div>
      <div className="button-container">
        <Button onClick={handleGetStarted}>Get Started</Button>
      </div>
    </div>
  );
};

export default PayCard;
