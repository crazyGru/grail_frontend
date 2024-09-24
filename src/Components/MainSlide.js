import left from "../left.png";
import right from "../right.png";

const MainSlide = ({ title, description, children }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#2b4099] to-[#0e1533] border-b-2 border-black">
      <div className="flex flex-col items-center justify-center text-center w-screen">
        <div className="text-white font-extrabold text-7xl mb-4 w-1/2">
          {title}
        </div>
        <p className="text-gray-300 font-bold text-lg md:text-xl lg:text-2xl mb-8 w-1/2 mt-10">
          {description}
        </p>
        {children}
      </div>
      <img
        src={left}
        className="absolute left-0 bottom-0 h-1/2"
        alt="left_logo"
      />
      <img
        src={right}
        className="absolute right-0 bottom-0 h-1/2"
        alt="right_logo"
      />
    </div>
  );
};

export default MainSlide;
