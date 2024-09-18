import React, { useState, useEffect } from "react";
import "./MovingCarousel.css"; // Import the CSS for styling

const MovingCarousel = () => {
  // Array of image paths for both columns
  const imagesColumn1 = ["/images/1.png", "/images/2.png", "/images/3.png"];

  const imagesColumn2 = ["/images/1.png", "/images/2.png", "/images/3.png"];

  // Shuffle function to randomize images on mount
  const shuffleImages = (images) => {
    return images.sort(() => Math.random() - 0.5);
  };

  const [shuffledColumn1, setShuffledColumn1] = useState([]);
  const [shuffledColumn2, setShuffledColumn2] = useState([]);

  useEffect(() => {
    // Shuffle images when component mounts
    setShuffledColumn1(shuffleImages([...imagesColumn1]));
    setShuffledColumn2(shuffleImages([...imagesColumn2]));
  }, []);

  return (
    <div className="scroll-container">
      {/* First column */}
      <div className="scroll-column">
        {[...shuffledColumn1, ...shuffledColumn1].map((image, index) => (
          <div
            className="scroll-image"
            key={`column1-image-${index}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Second column */}
      <div className="scroll-column">
        {[...shuffledColumn2, ...shuffledColumn2].map((image, index) => (
          <div
            className="scroll-image"
            key={`column2-image-${index}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MovingCarousel;
