import MainSlide from "../Components/MainSlide";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./HowItWorks.css";
import capture from "../1.png";
import move from "../2.png";
import paste from "../1.png";

const ReasonCard = ({ title, content }) => {
  return (
    <div className="reason_card">
      <div className="card_header">{title}</div>
      <div className="card_title">{content}</div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <Header />
      <MainSlide
        title="How It Works: Capture Your Perfect Moment"
        description="Welcome to The Grail! We’ve made it super simple to capture memories and transform them into something special. Follow these three easy steps to take your photo, add it to our software, and create stunning visuals you’ll love to share."
      ></MainSlide>
      <div className="slide-steps">
        <div className="slide-step">
          <div style={{ width: "50%" }}>
            <img src={capture} className="App-logo" alt="logo" />
          </div>
          <div className="step-info">
            <div className="step-header">Step 1: Capture the Moment </div>
            <div className="step-content">
              Choose your favorite photo booth software and get ready to strike
              a pose! Whether you're using Snappic or any other compatible app,
              taking photos is a breeze.
            </div>
            <div className="step-content">
              Capture your shot with your preferred photo booth software and let
              The Grail do the rest!
            </div>
          </div>
        </div>
        <div className="slide-step">
          <div className="step-info">
            <div className="step-header">
              Step 2: Drag and Drop into the App{" "}
            </div>
            <div className="step-content">
              Now that you've taken your amazing photos, it’s time to work some
              magic! Drag and drop your images directly into our software—no
              technical skills required:
            </div>
            <div className="step-content">
              <ul>
                <li>Open The Grail on your device.</li>
                <li>
                  Drag your photos from the booth gallery and drop them into the
                  software’s editing space.
                </li>
              </ul>
            </div>
            <div className="step-content">
              Our drag-and-drop functionality makes the process seamless and
              incredibly fast.
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <img src={move} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="slide-step">
          <div style={{ width: "50%" }}>
            <img src={paste} className="App-logo" alt="logo" />
          </div>
          <div className="step-info">
            <div className="step-header">Step 3: Paste & Roll </div>
            <div className="step-content">
              Once your photo is ready, it’s time to make it shine!
            </div>
            <div className="step-content">
              Simply paste your lenticular onto the printed image and after
              you’re happy with the placement, roll out your photocards
            </div>
            <div className="step-content">
              Your masterpiece is complete, and you’re ready to show it off!
            </div>
          </div>
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
      <div className="slide-button">
        <div className="m_button">
          Click Here For The Member's Exclusive Tutorial
        </div>
      </div>
      <div className="why-choose-us">
        <h1>Why Choose Us?</h1>
        <div className="reason-container">
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
