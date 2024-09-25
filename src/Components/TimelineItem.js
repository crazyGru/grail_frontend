import React from "react";
import "./TimelineItem.css"; // Optional: To keep the styling in a separate file

const TimelineItem = ({ year, title, description, isEven }) => {
  return (
    <div className="w-full relative flex pr-1 pb-2 lg:p-8">
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row-reverse" : "md:flex-row"
        } pl-14 pt-6 w-full gap-2 md:pl-0 md:pt-0`}
      >
        <div
          className={`flex flex-col gap-1 md:w-1/2 ${
            isEven ? "md:items-start" : "md:items-end"
          } md:justify-center md:px-8`}
        >
          <div
            className={`text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-[#2b4099] ${
              isEven ? "md:text-left" : "md:text-right"
            }`}
          >
            {year}
          </div>
          <div
            className={`text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold text-[#2b4099]  ${
              isEven ? "md:text-left" : "md:text-right"
            }`}
          >
            {title}
          </div>
        </div>
        <div className="md:w-1/2 md:px-8 flex items-center">
          <p
            className={`text-base leading-relaxed ${
              isEven ? "md:text-right" : "md:text-left  "
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="w-[4px] h-full bg-blue-900 absolute left-7 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="w-[24px] h-[24px] md:w-[48px] md:h-[48px] bg-blue-200 rounded-full absolute left-7 md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] bg-blue-900 rounded-full absolute left-7 md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default TimelineItem;
