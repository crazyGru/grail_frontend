import benefit_logo from "./benefit.png";
import frame_img from "./frame.png";
import "./App.css";
import PricingCard from "./Components/PricingCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const [selectedContent, setSelectedContent] = useState({
    section1: {
      title: "Word-of-mouth",
      content: "Unique services often generate buzz, leading to increased referrals and word-of-mouth marketing, which is invaluable for growing your business."
    },
    section2: {
      title: "Perceived Value",
      content: "Lenticular photo booth could be marketed as a luxury or high-end service, thus increasing the perceived value of your overall offerings."
    },
    section3: {
      title: "Diversification",
      content: "Adding lenticular photo booth to your portfolio diversifies your product range, making your business more versatile and appealing to a broader audience."
    },
    section4: {
      title: "Diversification",
      content: "Adding lenticular photo booth to your portfolio diversifies your product range, making your business more versatile and appealing to a broader audience."
    },
    section5: {
      title: "Memorable Experience",
      content: "By offering something that leaves a lasting impression, like lenticular photo booth, you can create memorable experiences for your clients."
    },
    section6: {
      title: "Viral Content",
      content: "Unique services like lenticular photo booth are likely to be shared on social media, especially by clients who want to showcase something different."
    }
  });

  const contentData = {
    section1: [
      { title: "Unique Selling Point", content: "Highlighting your unique selling points can attract more customers and differentiate you from competitors." },
      { title: "Word-of-mouth", content: "Unique services often generate buzz, leading to increased referrals and word-of-mouth marketing, which is invaluable for growing your business." }
    ],
    section2: [
      { title: "Premium Pricing", content: "Lenticular photo booth could be marketed as a luxury or high-end service, thus increasing the perceived value of your overall offerings." },
      { title: "Perceived Value", content: "This can justify a higher price point not only for this service but for your other packages as well." }
    ],
    section3: [
      { title: "Diversification", content: "Adding lenticular photo booth to your portfolio diversifies your product range, making your business more versatile and appealing to a broader audience." },
      { title: "Upselling Opportunities", content: "This can help attract new clients who are specifically interested in this unique service." }
    ],
    section4: [
      { title: "Diversification", content: "Adding lenticular photo booth to your portfolio diversifies your product range, making your business more versatile and appealing to a broader audience." },
      { title: "Upselling Opportunities", content: "This can help attract new clients who are specifically interested in this unique service." }
    ],
    section5: [
      { title: "Memorable Experience", content: "By offering something that leaves a lasting impression, like lenticular photo booth, you can create memorable experiences for your clients." },
      { title: "Customized Services", content: "This can lead to organic marketing and increase your online presence." }
    ],
    section6: [
      { title: "Viral Content", content: "Unique services like lenticular photo booth are likely to be shared on social media." },
      { title: "Marketing Material", content: "This can lead to organic marketing and increase your online presence." }
    ]
  };

  const handleTitleClick = (section, index) => {
    setSelectedContent(prevState => ({
      ...prevState,
      [section]: contentData[section][index]
    }));
  };

  return (
    <div className="App">
      <Header />
      <MainSlide
        title={"Let the Grail Propel Your Photo Booth Biz to the Next Level"}
      >
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
      <div className="mx-auto container  border-b-2 border-t-2 border-blue-950">
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
        <div className="flex flex-col lg:flex-col items-start justify-between p-6 md:p-10 lg:p-16 gap-8">
          <div className="text-xl md:text-3xl 2xl:text-5xl font-bold text-start">Stand out from competitors</div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-4 shrink-0">
              {contentData.section1.map((section, index) => (
                <h2
                  key={index}
                  className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900 cursor-pointer"
                  onClick={() => handleTitleClick("section1", index)}
                >
                  {section.title}
                </h2>
              ))}
            </div>
            <div className="w-full md:w-2/3 pl-0 md:pl-8">
              <h3 className="text-lg font-semibold">{selectedContent.section1.title}</h3>
              <p className="text-base leading-relaxed">
                {selectedContent.section1.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950">
        <div className="flex flex-col lg:flex-col items-start justify-between p-6 md:p-10 lg:p-16 gap-8">
          <div className="text-xl md:text-3xl 2xl:text-5xl font-bold text-start">Increase in selling price</div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-4">
              {contentData.section2.map((section, index) => (
                <h2
                  key={index}
                  className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900 cursor-pointer"
                  onClick={() => handleTitleClick("section2", index)}
                >
                  {section.title}
                </h2>
              ))}
            </div>
            <div className=" w-full md:w-2/3 pl-0 md:pl-8">
              <h3 className="text-lg font-semibold">{selectedContent.section2.title}</h3>
              <p className="text-base leading-relaxed">
                {selectedContent.section2.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950">
        <div className="flex flex-col lg:flex-cole items-start justify-between p-6 md:p-10 lg:p-16 gap-8">
          <div className="text-xl md:text-3xl 2xl:text-5xl font-bold text-start">Expand product offering</div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-4">
              {contentData.section3.map((section, index) => (
                <h2
                  key={index}
                  className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900 cursor-pointer"
                  onClick={() => handleTitleClick("section3", index)}
                >
                  {section.title}
                </h2>
              ))}
            </div>
            <div className=" w-full md:w-2/3 pl-0 md:pl-8">
              <h3 className="text-lg font-semibold">{selectedContent.section3.title}</h3>
              <p className="text-base leading-relaxed">
                {selectedContent.section3.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950 p-6 md:p-10 lg:p-16 ">
        <div className="text-xl md:text-3xl 2xl:text-5xl font-bold text-start">Enhanced brand image</div>
        <div className="flex flex-col md:flex-row items-start justify-between py-8 gap-4">
          <div className="w-full md:w-1/3 ">
            <img src={frame_img} className="w-full h-auto" alt="logo" />
          </div>
          <div className="w-full md:w-2/3 flex flex-col md:flex-col gap-4 pl-0 md:pl-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col gap-4">
              {contentData.section4.map((section, index) => (
                <h2
                  key={index}
                  className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900 cursor-pointer"
                  onClick={() => handleTitleClick("section4", index)}
                >
                  {section.title}
                </h2>
              ))}
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold">{selectedContent.section4.title}</h3>
              <p className="text-base leading-relaxed">
                {selectedContent.section4.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950">
        <div className="flex flex-col lg:flex-cole items-start justify-between p-6 md:p-10 lg:p-16 gap-8">
          <div className="text-xl md:text-3xl 2xl:text-5xl font-bold text-start">Increased Customer Loyality</div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-4">
              {contentData.section5.map((section, index) => (
                <h2
                  key={index}
                  className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900 cursor-pointer"
                  onClick={() => handleTitleClick("section5", index)}
                >
                  {section.title}
                </h2>
              ))}
            </div>
            <div className=" w-full md:w-2/3 pl-0 md:pl-8">
              <h3>{selectedContent.section5.title}</h3>
              <p className="text-base leading-relaxed">
                {selectedContent.section5.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container border-b-2 border-blue-950 p-6 md:p-10 lg:p-16 ">
        <div className="text-xl md:text-3xl 2xl:text-5xl font-bold text-start">Social media and marketing potential</div>
        <div className="flex flex-col md:flex-row items-start justify-between py-8 gap-4">
          <div className="w-full md:w-2/3 flex flex-col md:flex-col gap-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col gap-4">
              {contentData.section6.map((section, index) => (
                <h2
                  key={index}
                  className="text-xl font-semibold w-full border-b-2 border-blue-950 text-blue-900 cursor-pointer"
                  onClick={() => handleTitleClick("section6", index)}
                >
                  {section.title}
                </h2>
              ))}
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold">{selectedContent.section6.title}</h3>
              <p className="text-base leading-relaxed">
                {selectedContent.section6.content}
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
        <div className="text-xl md:text-3xl 2xl:text-5xl font-bold text-start">Pricing Plan</div>
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
