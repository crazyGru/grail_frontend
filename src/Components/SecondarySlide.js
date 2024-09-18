import "./SecondarySlide.css";
import left from "../bottom_left.png";
import right from "../bottom_right.png";

const SecondarySlide = ({ title, description, children }) => {
  return (
    <div className="secondary-slide">
      <div className="secondary-slide-content">
        <div className="title">{title}</div>
        <div className="subtitle">{description}</div>
        {children}
      </div>
      <img src={left} className="left_logo" alt="left_logo" />
      <img src={right} className="right_logo" alt="right_logo" />
    </div>
  );
};

export default SecondarySlide;
