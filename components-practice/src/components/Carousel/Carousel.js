import React from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import CarouselItem from "./CarouselItem";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-box">
      <div className="carousel">
        <ArrowLeft />
        <CarouselItem />
        <ArrowRight />
      </div>
      <div className="carousel-dots">
        <div className="active"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Carousel;
