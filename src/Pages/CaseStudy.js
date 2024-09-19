import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainSlide from "../Components/MainSlide";
import "./CaseStudy.css";
import TimelineItem from "../Components/TimelineItem";

const timelineData = [
  {
    year: "2017",
    title: "Revolutionizing the Photo booth Industry",
    description:
      "In 2017, The Holograil made a bold entrance into Singapore’s photobooth industry, offering an innovative and immersive experience that quickly gained traction. With its unique lenticular phot technology designed to be both accessible and affordable, The Holograil's service allows clients to elevate their event experiences without stretching their budgets.",
  },
  {
    year: "2018-2019",
    title: "Rapid Growth and Market Penetration",
    description:
      "From its debut in 2017, The Holograil quickly became a game-changer in the events industry. In just its first year, it was featured in over 200 events across Singapore, captivating clients with its cutting-edge, personalized photo experiences. By 2018, demand more than doubled, with the service reaching over 400 events. This rapid adoption solidified The Holograil as a must-have for premium events, securing its place as a leader in the competitive events market.",
  },
  {
    year: "2019",
    title: "Entering Jakarta’s Thriving Market",
    description:
      "With a solid foundation in Singapore, The Holograil looked to expand its footprint. In 2019, it strategically entered the Jakarta market, tapping into Southeast Asia’s bustling events scene. The move was a resounding success, with the combined number of events in both cities surpassing 800 bookings in just one year. This expansion marked a major milestone for The Holograil, positioning it as a leader in the region and further strengthening its brand presence in Southeast Asia.",
  },
  {
    year: "2020-2022",
    title: "Navigating the COVID-19 Pandemic",
    description:
      "The global pandemic brought unprecedented challenges to the events industry, with widespread cancellations and restrictions. Like many businesses, The Holograil faced a tough landscape. However, the company demonstrated remarkable resilience and adaptability during this period. While events were on hold, The Holograil focused on refining its service and preparing for a strong return post-pandemic. The company's commitment to innovation and readiness to pivot allowed it to weather the storm.",
  },
  {
    year: "2023",
    title: "Returning Stronger Than Ever",
    description:
      "As the world began to recover and live events resumed, The Holograil bounced back in full force. From 2023 to the present, The Holograil has been a part of more than 1,000 events across Singapore and Jakarta. This impressive post-pandemic rebound reaffirmed The Holograil’s role as an industry leader, delivering unparalleled experiences and helping clients create unforgettable memories with its lenticular photo booth service.",
  },
];

const CaseStudy = () => {
  return (
    <div className="case-study">
      <Header />
      <MainSlide title="The Holograil’s Journey to Success "></MainSlide>
      <div className="time-line-container">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            isEven={index % 2 === 0} // Pass a prop to determine layout
          />
        ))}
      </div>
      {/* <div className="img-flow-slide">
        <div className="img-flow">
          <MovingCarousel />
        </div>
        <div className="description">
          <div className="description-title">
            The Holograil’s Continued Success
          </div>
          <div className="description-content">
            The Holograil’s journey from its 2017 launch to becoming a key
            player in the Southeast Asian event scene showcases its innovation,
            adaptability, and resilience.
          </div>
          <div className="description-content">
            As The Holograil continues to expand and evolve, it remains
            committed to pushing the boundaries of what’s possible in the photo
            booth industry, ensuring that every event it touches is nothing
            short of extraordinary.
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default CaseStudy;
