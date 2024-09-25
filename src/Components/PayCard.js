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
      const session = await fetchAPI(
        `/subscriptions/create-checkout-session?user_mail=${encodeURIComponent(
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
    <div
      className={`relative bg-white text-[#2b4099]  ${
        selected ? "border-2 border-[#7e58fc]" : "border-gray-300"
      } min-w-[280px] min-h-[600px] border p-2 py-4 w-4/5 rounded-md md:w-1/5 h-auto flex flex-col items-center`}
    >
      {selected && (
        <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-[#7e58fc] text-white font-medium px-2 py-1 rounded">
          ⭐Most Popular
        </div>
      )}
      <div className="flex flex-col items-center justify-center h-1/3 border-b border-[#1a2a4d] w-full overflow-auto basis-[200px]">
        <div className="font-bold text-2xl text-black">{title}</div>
        <div className="text-[#2b4099] font-bold text-4xl">{price}</div>
        <div className="text-gray-600 font-semibold text-lg text-center">
          {description}
        </div>
        <div className="text-center">{duration}</div>
      </div>
      <div className="flex flex-col items-start justify-start w-full p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-base font-semibold my-2 w-[280px]"
          >
            <LuCheckCircle className="text-[#2b4099] mr-2" />
            {item}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 w-full flex items-center justify-center">
        <Button
          onClick={handleGetStarted}
          className="bg-[#2b4099] text-white rounded-lg py-2 px-4 w-1/2 hover:bg-[#1a2a4d] transition duration-300"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PayCard;
