import CarouselItem from "./CarouselItem";
import { data } from "./data";
import "./carousel.css";
import useCarousel from "./useCarousel";

const CAROUSEL_ITEM_WIDTH = -105;

const Carousel = () => {
  const { currentIdx, decrement, increment, setCurrentIdx } = useCarousel(data);

  const translateX = currentIdx * CAROUSEL_ITEM_WIDTH;
  console.log(translateX);

  const style = { transform: `translateX(${translateX}%)` };

  return (
    <div className="carousel-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
        className="carousel-button left"
        onClick={decrement}
      >
        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
      </svg>
      <div className="carousel">
        <div style={style} className="carousel-item-container">
          {data.map((item) => (
            <CarouselItem {...item} key={item.id} />
          ))}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 512"
        className="carousel-button right"
        onClick={increment}
      >
        <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
      </svg>
      <div className="carousel-dots">
        {data.map((item, idx) => (
          <div
            key={item.key}
            className={`${idx === currentIdx ? "active" : ""}`}
            onClick={() => setCurrentIdx(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
