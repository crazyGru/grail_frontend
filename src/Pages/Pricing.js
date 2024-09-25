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
      />
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 items-center sm:overflow-auto xl:justify-center py-4 sm:p-4 lg:py-16">
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
