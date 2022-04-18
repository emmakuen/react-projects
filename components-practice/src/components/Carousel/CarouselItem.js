import React from "react";
import "./carousel.css";

const CarouselItem = (props) => {
  const { imgSrc, review, reviewer, reviewerTitle } = props;
  return (
    <div className="carousel-item">
      <img src={imgSrc} alt={reviewer} className="carousel-image" />
      <figure>
        <blockquote>{review}</blockquote>
        <figcaption>
          <p>{reviewer}</p>
          <p>{reviewerTitle}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CarouselItem;
