import left from "./left.png";
import right from "./right.png";
import benefit_logo from "./benefit.png";
import frame_img from "./frame.png";
import "./App.css";
import PricingCard from "./Components/PricingCard";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/userSlice";
import HowItWorks from "./Pages/HowItWorks";
import Header from "./Components/Header";
import MemberAccess from "./Pages/MemberAccess";
import MemberExclusive from "./Pages/MemberExclusive";
import CaseStudy from "./Pages/CaseStudy";
import Pricing from "./Pages/Pricing";
import { pricingPlans } from "./utilis/pricingPlans";
import Success from "./Pages/Success";
import Footer from "./Components/Footer";
import MainSlide from "./Components/MainSlide";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />
      <MainSlide
        title={"Let the Grail Propel Your Photo Booth Biz to the Next Level"}
      >
        {user ? (
          <></>
        ) : (
          <div className="button" onClick={() => navigate("/signin")}>
            Get Started
          </div>
        )}
        <a
          href={`${process.env.REACT_APP_BACKEND_URL}/subscriptions/download-app`}
          className="app-download"
        >
          Click here to Download the App
        </a>
      </MainSlide>
      <div className="slide-video">
        <div className="responsive-iframe">
          <iframe
            src="https://www.youtube.com/embed/kS5mQJXCfPU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mx-auto container  border-b-2 border-blue-950">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 md:p-10 lg:p-16 gap-4">
          <div className="w-full">
            <h2 className="benefit-h1 text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-[#2b4099] mb-4">
              Benefit from years of our expertise in photo booth industry
            </h2>
            <p className="benefit-content text-base md:text-base lg:text-lg 2xl:text-2xl text-black leading-relaxed">
              With a proven track record of powering countless successful events,
              we bring cutting-edge technology and deep industry insights to every
              project. Our expertise ensures seamless software integration,
              exceptional photo clarity, and innovative solutions that elevate
              your event experience, making every moment memorable. Choose us for
              reliability, innovation, and results that stand out.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={benefit_logo}
              className="benefit-img w-full h-auto"
              alt="Benefit Logo"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950">
        <div className="flex flex-col lg:flex-cole items-start justify-between p-6 md:p-10 lg:p-16 gap-8">
          <div className="text-xl md:text-3xl font-bold text-start">
            Stand out from competitors
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-4">
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Unique Selling Point</h2>
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Word-of-mouth</h2>
            </div>
            <div className=" w-full md:w-2/3 pl-0 md:pl-8">
              <h3 className="text-lg font-semibold">Word-of-mouth</h3>
              <p className="text-base leading-relaxed">
                Unique services often generate buzz, leading to increased referrals and
                word-of-mouth marketing, which is invaluable for growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950">
        <div className="flex flex-col lg:flex-cole items-start justify-between p-6 md:p-10 lg:p-16 gap-8">
          <div className="text-xl md:text-3xl font-bold text-start">Increase in selling price</div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-4">
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Premium Pricing </h2>
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Perceived Value</h2>
            </div>
            <div className=" w-full md:w-2/3 pl-0 md:pl-8">
              <h3 className="text-lg font-semibold">Perceived Value</h3>
              <p className="text-base leading-relaxed">
                Lenticular photo booth could be marketed as a luxury or high-end
                service, thus increasing the perceived value of your overall
                offerings. This can justify a higher price point not only for this
                service but for your other packages as well.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950">
        <div className="flex flex-col lg:flex-cole items-start justify-between p-6 md:p-10 lg:p-16 gap-8">
          <div className="text-xl md:text-3xl font-bold text-start">Expand product offering</div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-4">
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Diversification</h2>
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Upselling Opportunities</h2>
            </div>
            <div className=" w-full md:w-2/3 pl-0 md:pl-8">
              <h3 className="text-lg font-semibold">Diversification</h3>
              <p className="text-base leading-relaxed">
                adding lenticular photo booth to your portfolio diversifies your
                product range, making your business more versatile and appealing
                to a broader audience. This can help attract new clients who are
                specifically interested in this unique service
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950 p-6 md:p-10 lg:p-16 ">
        <div className="text-xl md:text-3xl font-bold text-start">Enhanced brand image</div>
        <div className="flex flex-col md:flex-row items-start justify-between py-8 gap-4">
          <div className="w-full md:w-1/3 ">
            <img src={frame_img} className="w-full h-auto" alt="logo" />
          </div>
          <div className="w-full md:w-2/3 flex flex-col md:flex-col gap-4 pl-0 md:pl-8">
            <div className="w-full mb-4 md:mb-0 flex flex-col gap-4">
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Diversification</h2>
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Upselling Opportunities</h2>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold">Diversification</h3>
              <p className="text-base leading-relaxed">
                Adding lenticular photo booth to your portfolio diversifies your
                product range, making your business more versatile and appealing
                to a broader audience. This can help attract new clients who are
                specifically interested in this unique service
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950">
        <div className="flex flex-col lg:flex-cole items-start justify-between p-6 md:p-10 lg:p-16 gap-8">
          <div className="text-xl md:text-3xl font-bold text-start">Increased Customer Loyality</div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-4">
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Memorable Experience</h2>
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Customized Services</h2>
            </div>
            <div className=" w-full md:w-2/3 pl-0 md:pl-8">
              <h3>Memorable Experience</h3>
              <p className="text-base leading-relaxed">
                By offering something that leaves a lasting impression, like
                lenticular photo booth, you can create memorable experiences for
                your clients, increasing their likelihood of returning for future
                events or referring you to others.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950 p-6 md:p-10 lg:p-16 ">
        <div className="text-xl md:text-3xl font-bold text-start">Social media and marketing potential</div>
        <div className="flex flex-col md:flex-row items-start justify-between py-8 gap-4">
          <div className="w-full md:w-2/3 flex flex-col md:flex-col gap-4">
            <div className="w-full mb-4 md:mb-0 flex flex-col gap-4">
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Viral Content</h2>
              <h2 className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900">Marketing Material</h2>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold">Viral Client</h3>
              <p className="text-base leading-relaxed">
                Unique services like lenticular photo booth are likely to be
                shared on social media, especially by clients who wnat to showcase
                something different. this can lead to organic marketing and
                increase your online presence
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 pl-0 md:pl-8">
            <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/kS5mQJXCfPU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-6 flex flex-col justify-center items-center gap-4">
        <div className="text-xl md:text-3xl font-bold text-start">Pricing Plan</div>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 items-center overflow-auto xl:justify-center md:p-4">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              items={plan.items}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/member-access" element={<MemberAccess />} />
        <Route path="/member-exclusive" element={<MemberExclusive />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
