import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRatings({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }
  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave() {
    setHover(currentIndex);
  }
  return (
    <div className="start-rating">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : ""}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
