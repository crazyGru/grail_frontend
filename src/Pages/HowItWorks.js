import MainSlide from "../Components/MainSlide";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./HowItWorks.css";
import capture from "../1.png";
import move from "../2.png";
import paste from "../1.png";
import { useNavigate } from "react-router-dom";

const ReasonCard = ({ title, content }) => {
  return (
    <div className="min-w-[300px] h-[350px] bg-white rounded-md p-4 w-1/4 overflow-auto">
      <div className="w-full text-center font-bold text-2xl text-blue-950 my-2">
        {title}
      </div>
      <div className="">{content}</div>
    </div>
  );
};

const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <div className="how-it-works">
      <Header />
      <MainSlide
        title="How It Works: Capture Your Perfect Moment"
        description="Welcome to The Grail! We’ve made it super simple to capture memories and transform them into something special. Follow these three easy steps to take your photo, add it to our software, and create stunning visuals you’ll love to share."
      ></MainSlide>
      <div className="mx-auto container">
        <div className="w-full flex flex-col items-center p-4 border-b border-blue-900 gap-2 md:flex-row">
          <div className="w-4/5 lg:w-[420px] flex justify-center">
            <img className="w-full h-auto" src={capture} alt="logo" />
          </div>
          <div className="w-auto p-4 flex flex-col gap-2">
            <div className="text-xl md:text-3xl font-bold text-start text-blue-900">
              Step 1: Capture the Moment{" "}
            </div>
            <div className="text-base leading-relaxed">
              Choose your favorite photo booth software and get ready to strike
              a pose! Whether you're using Snappic or any other compatible app,
              taking photos is a breeze.
            </div>
            <div className="text-base leading-relaxed">
              Capture your shot with your preferred photo booth software and let
              The Grail do the rest!
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse items-center p-4 border-b border-blue-900 gap-2 md:flex-row">
          <div className="w-auto p-4 flex flex-col gap-2">
            <div className="text-xl md:text-3xl font-bold text-start text-blue-900">
              Step 2: Drag and Drop into the App{" "}
            </div>
            <div className="text-base leading-relaxed">
              Now that you've taken your amazing photos, it’s time to work some
              magic! Drag and drop your images directly into our software - no
              technical skills required:
            </div>
            <div className="text-base leading-relaxed">
              <ul>
                <li>- Open The Grail on your device.</li>
                <li>
                  - Drag your photos from the booth gallery and drop them into
                  the software’s editing space.
                </li>
              </ul>
            </div>
            <div className="text-base leading-relaxed">
              Our drag-and-drop functionality makes the process seamless and
              incredibly fast.
            </div>
          </div>
          <div className="w-4/5 lg:w-[420px] flex justify-center">
            <img className="step-img" src={move} alt="logo" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center p-4 border-b border-blue-900 gap-2 md:flex-row">
          <div className="w-4/5 lg:w-[420px] flex justify-center">
            <img className="step-img" src={paste} alt="logo" />
          </div>
          <div className="w-auto p-4 flex flex-col gap-2">
            <div className="text-xl md:text-3xl font-bold text-start text-blue-900">
              Step 3: Paste & Roll{" "}
            </div>
            <div className="text-base leading-relaxed">
              Once your photo is ready, it’s time to make it shine!
            </div>
            <div className="text-base leading-relaxed">
              Simply paste your lenticular onto the printed image and after
              you’re happy with the placement, roll out your photocards
            </div>
            <div className="text-base leading-relaxed">
              Your masterpiece is complete, and you’re ready to show it off!
            </div>
          </div>
        </div>
      </div>
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
      <div className="w-full flex items-center justify-center p-2 py-4">
        <button
          className="w-auto bg-blue-900 rounded-md text-white text-center p-2"
          onClick={() => {
            navigate("/member-access");
          }}
        >
          Click Here For The Member's Exclusive Tutorial
        </button>
      </div>
      <div className="w-full py-6 flex flex-col justify-center items-center gap-4 bg-blue-900">
        <div className="text-xl md:text-3xl font-bold text-start text-white">
          Why Choose Us?
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 items-center overflow-auto lg:justify-center md:p-4">
          <ReasonCard
            title="Unmatched Clarity"
            content="Our software guarantees crystal-clear image effects that bring every photo to life. Unlike our competitors, who may struggle with fuzzy or distorted images, we ensure that your photos will look sharp, vibrant, and flawless every time. The lenticular effect will pop, giving you the best possible visual experience."
          />
          <ReasonCard
            title="Affordable Pricing"
            content="We believe that premium results don’t have to come with a premium price tag. Our software provides a top-tier experience at an affordable rate, helping you deliver the wow factor without breaking the bank. Maximize your profit margins while offering an unforgettable photo booth experience to your clients."
          />
          <ReasonCard
            title="Broad Compatibility"
            content="No matter what photo booth software you’re currently using, our solution integrates seamlessly. We’re compatible with a wide range of popular photo booth software, meaning you can start using our system with minimal setup or disruption. Convenience, flexibility, and top performance – that’s what we bring to the table."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
