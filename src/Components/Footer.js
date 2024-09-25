import logo from "../logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import right from "../right.png";

const Footer = () => {
  return (
    <div className="relative bg-black text-white py-10 flex flex-col items-center md:items-start px-4 md:px-10 overflow-hidden">
      <img
        src={logo}
        className="h-6 cursor-pointer mb-4"
        alt="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="flex flex-col md:flex-row md:justify-between w-full max-w-4xl">
        <div className="info-container flex flex-col space-y-2">
          <div className="info-item flex items-center">
            <FaLocationDot className="icon mr-2" />
            <span>140 Paya Lebar Rd, #06-23, Singapore 409015</span>
          </div>
          <div className="info-item flex items-center">
            <FaPhone className="icon mr-2" />
            <span>+65 9187 2817</span>
          </div>
          <div className="info-item flex items-center">
            <IoMdMail className="icon mr-2" />
            <span>hello@thegrail.com</span>
          </div>
          <div className="info-item flex items-center">
            <AiFillInstagram className="icon mr-2" />
            <span>@thegrail</span>
          </div>
        </div>
      </div>
      <img
        src={right}
        className="hidden md:block w-1/3 ml-4 absolute right-0 bottom-0"
        alt="img"
      />
    </div>
  );
};

export default Footer;
