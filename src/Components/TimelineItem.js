import React from "react";
import "./TimelineItem.css"; // Optional: To keep the styling in a separate file

const TimelineItem = ({ year, title, description, isEven }) => {
  return (
    <div className="container">
      {isEven ? ( // If even, show year and title first
        <>
          <div className="item time">
            <div className="item_year">{year}</div>
            <div className="item_title">{title}</div>
          </div>
          <div className="item">{description}</div>
        </>
      ) : (
        // If odd, swap the order
        <>
          <div className="item time">{description}</div>
          <div className="item">
            <div className="item_year">{year}</div>
            <div className="item_title">{title}</div>
          </div>
        </>
      )}
      <div className="h-divider"></div>
      <div className="circle">
        <div className="circle small"></div>
      </div>
    </div>
  );
};

export default TimelineItem;
