import { useState } from "react";

const useCarousel = (items) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const increment = () => {
    if (currentIdx === items.length - 1) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const decrement = () => {
    if (currentIdx === 0) {
      setCurrentIdx(items.length - 1);
    } else {
      setCurrentIdx(currentIdx - 1);
    }
  };

  return { currentIdx, decrement, increment, setCurrentIdx };
};

export default useCarousel;
