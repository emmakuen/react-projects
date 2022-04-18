import React from "react";
import "./carousel.css";

const CarouselItem = () => {
  return (
    <div className="carousel-item">
      <img
        src="/assets/img/carousel/person1.jpg"
        alt=""
        className="carousel-image"
      />
      <figure>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          labore dolorum neque officia ut aliquid dolorem eaque ipsam dolores
          numquam. Inventore hic omnis distinctio asperiores amet ab porro
          quibusdam harum!
        </blockquote>
        <figcaption>
          <p>Maria de Almeida</p>
          <p>Senior Product Manager at EDP Commercial</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CarouselItem;
