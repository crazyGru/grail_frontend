import left from "../left.png";
import right from "../right.png";

const MainSlide = ({ title, description, children }) => {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-gradient-to-b from-[#2b4099] to-[#0e1533] border-b-2 border-black">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">
        <div className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
          {title}
        </div>
        <p className="text-gray-300 font-bold text-base md:text-lg lg:text-xl xl:text-2xl mb-8 mt-10 px-4">
          {description}
        </p>
        {children}
      </div>
      <img
        src={left}
        className="absolute left-0 bottom-0 w-1/3 md:w-1/4 lg:w-1/5"
        alt="left_logo"
      />
      <img
        src={right}
        className="absolute right-0 bottom-0 w-1/3 md:w-1/4 lg:w-1/5"
        alt="right_logo"
      />
    </div>
  );
};

export default MainSlide;
