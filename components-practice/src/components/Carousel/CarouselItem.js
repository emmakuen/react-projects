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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facere
          error modi, natus in sit repudiandae, impedit, obcaecati recusandae
          vitae perspiciatis voluptas quia itaque ducimus minus cum et amet
          tempore qui.
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
