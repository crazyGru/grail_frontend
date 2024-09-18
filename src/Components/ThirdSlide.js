import "./ThirdSlide.css";
import left from "../left.png";
import right from "../right.png";

const ThirdSlide = ({ title, description, children }) => {
  return (
    <div className="main-slide">
      <div className="main-slide-content">
        <div className="title">{title}</div>
        <div className="subtitle">{description}</div>
        {children}
      </div>
      <img src={left} className="left_logo" alt="left_logo" />
      <img src={right} className="right_logo" alt="right_logo" />
    </div>
  );
};

export default ThirdSlide;
