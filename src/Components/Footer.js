import logo from "../logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import right from "../right.png";

const Footer = () => {
  return (
    <div className="slide-footer">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
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
      <img src={right} className="right_logo" alt="img" />
    </div>
  );
};

export default Footer;
