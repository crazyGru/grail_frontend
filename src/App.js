import logo from "./logo.png";
import left from "./left.png";
import right from "./right.png";
import benefit_logo from "./benefit.png";
import frame_img from "./frame.png";
import "./App.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
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
      <div className="slide">
        <div className="slide-first">
          Let the Grail Propel Your Photo <br />
          Booth Biz to the Next Level
          {user ? (
            <></>
          ) : (
            <div className="button" onClick={() => navigate("/signin")}>
              Get Started
            </div>
          )}
          <img src={left} className="left_logo" alt="" />
          <img src={right} className="right_logo" alt="" />
        </div>
      </div>
      <div className="slide-video">
        <iframe
          width="1440"
          height="820"
          src="https://www.youtube.com/embed/kS5mQJXCfPU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="slide-benefit">
        <div className="slide-part" style={{ paddingRight: "20px" }}>
          <div className="benefit-h1">
            Benefit from years of our expertise in photo booth industry
          </div>
          <div className="benefit-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco labrois niri,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco labrois
          </div>
        </div>
        <div className="slide-part" style={{ paddingLeft: "20px" }}>
          <img src={benefit_logo} className="benefit-img" alt="" />
        </div>
      </div>
      <div className="slide-competitor">
        <div className="competitor-h1">Stand out from competitors</div>
        <div className="slide-container">
          <div className="slide-part">
            <part-h2>Unique Selling Point </part-h2>
            <part-h2>Word-of-mouth</part-h2>
          </div>
          <div
            className="slide-part"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <part-h3>Word-of-mouth</part-h3>
            <content>
              Unique services often generate buzz, leading to increased
              referrals and word-of-mouth marketing, which is invaluable for
              growing your business.
            </content>
          </div>
        </div>
      </div>
      <div className="slide-competitor">
        <div className="competitor-h1">Increase in selling price</div>
        <div className="slide-container">
          <div className="slide-part">
            <part-h2>Premium Pricing </part-h2>
            <part-h2>Perceived Value</part-h2>
          </div>
          <div
            className="slide-part"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <part-h3>Perceived Value</part-h3>
            <content>
              Lenticular photo booth could be marketed as a luxury or high-end
              service, thus increasing the perceived value of your overall
              offerings. This can justify a higher price point not only for this
              service but for your other packages as well.
            </content>
          </div>
        </div>
      </div>
      <div className="slide-competitor">
        <div className="competitor-h1">Expand product offering</div>
        <div className="slide-container">
          <div className="slide-part">
            <part-h2>Diversification</part-h2>
            <part-h2>Upselling Opportunities</part-h2>
          </div>
          <div
            className="slide-part"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <part-h3>Diversification</part-h3>
            <content>
              adding lenticular photo booth to your portfolio diversifies your
              product range, making your business more versatile and appealing
              to a broader audience. This can help attract new clients who are
              specifically interested in this unique service
            </content>
          </div>
        </div>
      </div>
      <div className="slide-competitor">
        <div className="competitor-h1">Enhanced brand image</div>
        <div className="slide-container">
          <div
            className="slide-part"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={frame_img} className="frame-img" alt="logo" />
          </div>
          <div
            className="slide-part"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <part-h2>Diversification</part-h2>
            <part-h2>Upselling Opportunities</part-h2>
            <div style={{ height: "40px" }}></div>
            <part-h3>Diversification</part-h3>
            <content>
              adding lenticular photo booth to your portfolio diversifies your
              product range, making your business more versatile and appealing
              to a broader audience. This can help attract new clients who are
              specifically interested in this unique service
            </content>
          </div>
        </div>
      </div>
      <div className="slide-competitor">
        <div className="competitor-h1">Increased Customer Loyality</div>
        <div className="slide-container">
          <div className="slide-part">
            <part-h2>Memorable Experience</part-h2>
            <part-h2>Customized Services</part-h2>
          </div>
          <div
            className="slide-part"
            style={{ paddingLeft: "60px", paddingTop: "40px" }}
          >
            <part-h3>Memorable Experience</part-h3>
            <content>
              By offering something that leaves a lasting impression, like
              lenticular photo booth, you can create memorable experiences for
              your clients, increasing their likelihood of returning for future
              events or referring you to others.
            </content>
          </div>
        </div>
      </div>
      <div className="slide-competitor">
        <div className="competitor-h1">
          Social media and marketing potential
        </div>
        <div className="slide-container">
          <div className="slide-part">
            <part-h2>Viral Content</part-h2>
            <part-h2>Marketing Material</part-h2>
            <div style={{ height: "40px" }}></div>
            <part-h3>Viral Client</part-h3>
            <content>
              Unique services like lenticular photo booth are likely to be
              shared on social media, especially by clients who wnat to showcase
              something different. this can lead to organic marketing and
              increase your online presence
            </content>
          </div>
          <div
            className="slide-part"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kS5mQJXCfPU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="slide-pricing">
        <div className="competitor-h1">Pricing Plan</div>
        <div style={{ height: "30px" }} />
        <div className="card-container">
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
      <div className="slide-footer">
        <img src={logo} className="App-logo" alt="logo" onClick={scrollToTop} />
        <div style={{ height: "30px" }} />
        <div className="info-container">
          <div className="info-item">
            <FaLocationDot className="icon" />
            140 Paya Lebar Rd, #06-23, Singapore 409015
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            +65 9187 2817
          </div>
          <div className="info-item">
            <IoMdMail className="icon" />
            hello@thegrail.com
          </div>
          <div className="info-item">
            <AiFillInstagram className="icon" />
            @thegrail
          </div>
        </div>
        <img src={right} className="right_logo" alt="logo" />
      </div>
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
      </Routes>
    </Router>
  );
}

export default AppWrapper;
