import CarouselItem from "./CarouselItem";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";
import { data } from "./data";
import "./carousel.css";
import useCarousel from "./useCarousel";

const CAROUSEL_ITEM_WIDTH = -105;

const Carousel = () => {
  const { currentIdx, decrement, increment, setCurrentIdx } = useCarousel(data);

  const translateX = currentIdx * CAROUSEL_ITEM_WIDTH;

  const style = { transform: `translateX(${translateX}%)` };

  return (
    <div className="carousel-box">
      <button onClick={decrement} className="carousel-button left">
        <ArrowLeft />
      </button>
      <div className="carousel">
        <div style={style} className="carousel-item-container">
          {data.map((item) => (
            <CarouselItem {...item} key={item.id} />
          ))}
        </div>
      </div>
      <button onClick={increment} className="carousel-button right">
        <ArrowRight />
      </button>
      <div className="carousel-dots">
        {data.map((item, idx) => (
          <button
            key={item.key}
            className={`${idx === currentIdx ? "active" : ""}`}
            onClick={() => setCurrentIdx(idx)}
          >
            &nbsp;
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
