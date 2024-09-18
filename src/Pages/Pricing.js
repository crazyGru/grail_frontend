import Header from "../Components/Header";
import MainSlide from "../Components/MainSlide";
import PayCard from "../Components/PayCard";
import Footer from "../Components/Footer";
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
        <PayCard
          title="Yearly License"
          price="$1,500 / Year"
          description="For established businesses looking to cut costs while maximizing long-term profitability."
          items={[
            "Yearly Subscription",
            "Unlimited Access for 365 days ",
            "One Device ",
          ]}
        />
        <PayCard
          title="Monthly License"
          price="$150 / Month"
          description="Ideal for businesses with consistent bookings that need flexibility month-to-month."
          items={[
            "Monthly Subscription",
            "Unlimited Access for 30 days ",
            "One Device ",
          ]}
          selected={true}
        />
        <PayCard
          title="Daily License"
          price="$40 / Day"
          description="Perfect for short-term usage and is perfect for pop-up events, trade shows, or festivals."
          items={[
            "Daily Subscription",
            "Unlimited Access for 24 hours ",
            "One Device ",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
