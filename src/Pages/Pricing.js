import Header from "../Components/Header";
import MainSlide from "../Components/MainSlide";
import PayCard from "../Components/PayCard";
import Footer from "../Components/Footer";
import { pricingPlans } from "../utilis/pricingPlans";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <Header />
      <MainSlide
        title="Pricing Plans Tailored for Your Photo Booth Business"
        description="Get the perfect solution for your photo booth business with flexible pricing options that cater to events of all sizes and durations. Whether you need a one-time setup or ongoing access, we’ve got you covered."
      ></MainSlide>
      <div className="pay-card-container">
        {pricingPlans.map((plan) => (
          <PayCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            items={plan.items}
            selected={plan.isSelected}
            planId={plan.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
