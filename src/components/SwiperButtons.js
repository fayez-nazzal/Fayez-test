import React from "react";
import { useSelector } from "react-redux";
const SwiperButtons = (props) => {
  const themeColor = useSelector((state) => state.theme.currentColor);

  const classes = `bg-${
    props.reverseColors ? "white" : themeColor
  } cursor-pointer inline-flex items-center justify-center w-12 h-12 p-0 px-0 py-0 mx-2 font-mono text-4xl font-bold text-${
    props.reverseColors ? themeColor : "white"
  } rounded-full z-40 focus:outline-none`;

  const slideLeft = () => {
    props.swiper.slidePrev(460);
  };

  const slideRight = () => {
    props.swiper.slideNext(460);
  };

  return (
    <div className="flex items-center justify-center mt-16 mb-24">
      <button className={classes} onClick={slideLeft}>
        {"<"}
      </button>
      <button className={classes} onClick={slideRight}>
        {">"}
      </button>
    </div>
  );
};

export default SwiperButtons;
