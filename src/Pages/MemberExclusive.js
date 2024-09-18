import Header from "../Components/Header";
import MainSlide from "../Components/MainSlide";
import Footer from "../Components/Footer";
import "./MemberExclusive.css";

const MemberExclusive = () => {
  return (
    <div className="member-exclusive">
      <Header />
      <MainSlide
        title="Welcome to the Member’s Exclusive Lenticular GIF Print Tutorial"
        description="Welcome to The Grail! We’ve made it super simple to capture memories and transform them into something special. In this member’s exclusive page, we will guide you through step-by-step and get you started on your path to creating your very own lenticular GIF print outs. "
      ></MainSlide>
      <div className="slide-to-start">
        <div className="slide-title" style={{ color: "#2B4099" }}>
          What You Need To Get Started:
        </div>
        <div className="info-card-container">
          <div className="info-card">
            <div className="info-card-header">Windows Based Photo Booth </div>
            <div className="info-card-content">
              The software requires a Windows operating system.
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-header">A Printer </div>
            <div className="info-card-content">
              Any printer that works with with the listed photo booth software
              will work. We use DNP printers.
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-header">
              Choice of Photo Booth Software{" "}
            </div>
            <div className="info-card-content">
              Here are the photo booth software options that are compatible with
              our lenticular prints:
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-header">Lenticular Frames</div>
            <div className="info-card-content">
              This is the most important material that will elevate your GIF to
              the next level! Dimensions:
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
      <div className="slide-additional-resource">
        <div className="slide-title">Additional Resources</div>
        <div className="card-container">
          <div className="card-resource">
            <div className="resource-card-header">Downloadable Resources</div>
            <div className="resource-card-content">
              We know that having quick access to a written guide can be just as
              important as a video. Our exclusive, detailed step-by-step PDF
              ensures you’ll never miss a beat when creating your lenticular
              prints. What’s Inside the PDF:
              <ul>
                <li>
                  A detailed guide on aligning, pasting, and securing your
                  lenticular lens for flawless prints every time.
                </li>
                <li>
                  Bonus sections on troubleshooting common issues, such as
                  misaligned prints or image distortions.
                </li>
              </ul>
            </div>

            <div className="button-container">
              <div className="card-button">Download Your PDF Guide Here</div>
            </div>
          </div>
          <div className="card-resource">
            <div className="resource-card-header">
              Your Exclusive Access to Community Support
            </div>
            <div className="resource-card-content">
              You’re not just part of a tutorial—you’re part of an expert
              community. As a member, you gain access to our exclusive forum
              where you can:
              <ul>
                <li>
                  Ask Questions: Get advice from seasoned professionals and
                  fellow members who have mastered the lenticular print process.
                  Whether it’s troubleshooting or seeking creative ideas, the
                  community is here to help.
                </li>
                <li>
                  Share Your Creations: We’d love to see what you create! Upload
                  your lenticular prints and get feedback from the community.
                  Share tips and ideas to inspire others.
                </li>
              </ul>
            </div>
            <div className="button-container">
              <div className="card-button">Download Your PDF Guide Here</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MemberExclusive;
