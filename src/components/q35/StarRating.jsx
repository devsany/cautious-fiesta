import React, { useState } from "react";
// import "./StarRating.css"; // Assume you have some basic styling for the stars

const StarRating = ({ totalStars = 1 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={`star ${rating > index ? "filled" : ""}`}
          onClick={() => handleRating(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
